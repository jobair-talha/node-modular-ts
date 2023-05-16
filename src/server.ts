import mongoose from "mongoose";
import app from "./app";
const port = 5000;

async function DB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/New");
    console.log(`Database Connection Successful!`);

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
DB();
