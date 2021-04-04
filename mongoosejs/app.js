const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/ahmed", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((re) => console.log("sucess"))
  .catch((err) => console.log(err));

const loginSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});
const collname = "reg";
const LoginModel = new mongoose.model("reg", loginSchema, collname);
const addDocuments = async () => {
  try {
    const addData = new LoginModel({
      name: "data more",
      age: 40,
      gender: "youtube",
    });
    const addData2 = new LoginModel({
      name: "tagain adding",
      age: 40,
      gender: "youtube",
    });
    LoginModel.insertMany([addData, addData2]);
  } catch (error) {
    console.log(error);
  }
};
// addDocuments();
const getDocuments = async () => {
  try {
    const result = await LoginModel.find({
      $or: [{ name: { $in: ["data more"] } }, { age: { $gte: 40 } }],
    })
      .select({
        name: 1,
      })
      .sort({ name: 1 });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocuments();
