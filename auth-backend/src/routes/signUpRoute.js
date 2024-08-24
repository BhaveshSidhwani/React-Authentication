import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";
import { awsUserPool } from "../util/awsUserPool";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;

    const attributes = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
    ];

    awsUserPool.signUp(
      email,
      password,
      attributes,
      null,
      async (err, awsResult) => {
        if (err) {
          console.log("Unable to signup", err);
          return res.status(500).json({ message: "Unable to signup user" });
        }

        const db = getDbConnection("react-auth-db");

        const initialInfo = {
          hairColor: "",
          favoriteFood: "",
          bio: "",
        };

        const result = await db.collection("users").insertOne({
          email,
          info: initialInfo,
        });

        const { insertedId } = result;
        jwt.sign(
          {
            id: insertedId,
            isVerified: false,
            email,
            info: initialInfo,
          },
          process.env.JWT_SECRET,
          { expiresIn: "2d" },
          (err, token) => {
            if (err) return sendStatus(500);
            res.status(200).json({ token });
          }
        );
      }
    );
  },
};
