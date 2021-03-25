console.log("your async folder");
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readfss = util.promisify(readFile);
const start = async () => {
  try {
    await writeFile("abc.txt", "aslam bhai is a great man");
    const data = await readFile("abc.txt", "utf-8");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
  //   try {
  //     const first = await readfss("abc.txt", "utf-8");
  //     console.log(first);
  //   } catch (error) {
  //     console.log(error);
  //   }
};
start();
