// console.log("your first node app");
const fs = require("fs");
// fs.writeFileSync("abc.txt", "it is m2nd first core module");
// fs.appendFileSync("abc.txt", "    here is how to append something in the file");
// const buf_data = fs.readFileSync("abc.txt");
// console.log(buf_data.toString());
// fs.renameSync("abc.txt", "part2.txt");
// const folderpath = "/NODE/";
// fs.mkdirSync("ahmed");
// fs.writeFileSync("ahmed/test.txt", "this is  a test file y directory");
// fs.appendFileSync("ahmed/test.txt", "this is the 2nd line of this folder");
// fs.unlinkSync("ahmed/test.txt");
// fs.rmdirSync("ahmed");
// fs.mkdir("tech", (err) => {
//   console.log(err);
//   console.log("folder is created");
// });
// fs.writeFile("tech/test.txt", "thi file created through async", (err) => {
//   console.log(err, "this is done");
// });
// fs.appendFile("tech/test.txt", "appending this file", (err) => {
//   console.log("boom guys");
// });
// fs.readFile("tech/test.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// fs.unlink("tech/test.txt", (err) => {
//   console.log("tetst file deleted");
// });
fs.rmdir("tech", () => console.log("tech folder delted"));
