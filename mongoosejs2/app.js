const mongoose = require("mongoose");
const validator = require("validator");
mongoose
  .connect("mongodb://localhost:27017/ahmed", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((re) => console.log("sucess"))
  .catch((err) => console.log(err));

const testschema = new mongoose.Schema({
  name: {
    type: String,
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error("invald");
    //   }
    // },
  },
  points: {
    type: Number,
    minlength: 3,
    required: true,
    validate(value) {
      if (value < 10) {
        throw new Error("value is less than 10");
      }
    },
  },
});
const TEST = "test";
const testCollection = new mongoose.model("test", testschema, TEST);

const addDocuments = async () => {
  try {
    const add1 = new testCollection({
      name: "atiq",
      points: 20,
    });
    // const add2 = new testCollection({
    //   name: "rehman",
    //   points: 55,
    // });
    // const add3 = new testCollection({
    //   name: "rao anwar",
    //   points: 15,
    // });
    // const add4 = new testCollection({
    //   name: "mohsin abro",
    //   points: 57,
    // });
    // testCollection.insertMany([add1, add2, add3, add4]);
    const result = await testCollection.insertMany([add1]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
addDocuments();
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

// getDocuments();
// addData.save();
const updateDocuments = async (_id) => {
  try {
    const result = await testCollection.findByIdAndUpdate(
      { _id },
      { name: "saleemii bhai has updated" },
      {
        useFindAndModify: false,
        new: true,
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// updateDocuments("606956c08e83a6190413a597");
const deleteDocuments = async (_id) => {
  try {
    const result = await testCollection.deleteOne({ _id });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// deleteDocuments("606956c08e83a6190413a597");
