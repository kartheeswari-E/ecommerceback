import mongoose from "mongoose";
const db = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://kartheeswari:karthiga123password1@cluster0.iwhgked.mongodb.net"
    );
    console.log("Db connection established.");
  } catch (error) {
    console.log("DB Error: ", error);
  }
};
export default db;