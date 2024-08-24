import { getDbConnection } from "../db";

export const updateOrCreateUserFromOauth = async ({ oauthUserInfo }) => {
  const { id: googleId, verified_email: isVerified, email } = oauthUserInfo;

  const db = getDbConnection("react-auth-db");
  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    const result = await db
      .collection("users")
      .findOneAndUpdate(
        { email },
        { $set: { googleId, isVerified } },
        { returnDocument: "after" }
      );
    return result;
  }

  const result = await db.collection("users").insertOne({
    email,
    googleId,
    isVerified,
    info: {},
  });

  const insertedUser = await db
    .collection("users")
    .findOne({ _id: result.insertedId });
  return insertedUser;
};
