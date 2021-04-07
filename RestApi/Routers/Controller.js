const student = require("../db/Models/studentsdata");

const getData = async (req, res) => {
  const result = await student.find();
  // console.log(result);
  res.send(result);
};
const getsingleData = async (req, res) => {
  // console.log(req.params);
  const result = await student.findById(req.params.id);
  res.send(result);
};
const updateData = async (req, res) => {
  const result = await student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(result);
};
const deleteData = async (req, res) => {
  const result = await student.findByIdAndDelete(req.params.id);
  res.send(result);
};
const addData = (req, res) => {
  // console.log(req.body);
  const stu_data = new student(req.body);
  stu_data.save();
  res.send(req.body);
};
module.exports = { addData, getData, deleteData, updateData, getsingleData };
