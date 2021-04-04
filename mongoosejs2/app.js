const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/ahmed", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((re) => console.log("sucess"))
  .catch((err) => console.log(err));

const testschema = new mongoose.Schema({
  name: String,
  points: Number,
});
const TEST = "test";
const testCollection = new mongoose.model("test", testschema, TEST);

const addDocuments = async () => {
  try {
    const add1 = new testCollection({
      name: "atiq",
      points: 45,
    });
    const add2 = new testCollection({
      name: "rehman",
      points: 55,
    });
    const add3 = new testCollection({
      name: "rao anwar",
      points: 15,
    });
    const add4 = new testCollection({
      name: "mohsin abro",
      points: 57,
    });
    testCollection.insertMany([add1, add2, add3, add4]);
  } catch (error) {
    console.log(error);
  }
};
// addDocuments();
const getDocuments = async () => {
  try {
    const result = await testCollection
      .find({
        $and: [{ points: { $gt: 40 } }, { name: "mohsin" }],
      })
      .count();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocuments();
// addData.save();
