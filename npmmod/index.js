const chalk = require("chalk");
const fs = require("fs");
// console.log(chalk.blue("i am testing the chalk"));
const http = require("http");
const nor_data = {
  name: "ahmad",
  age: "20",
  group: "pakistan",
};
const js_data = JSON.stringify(nor_data);
// fs.writeFile(`${__dirname}/UserApi/api.json`, js_data, () => {
//   console.log("its data is written");
// });
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.end("you are at recieving end");
  } else if (url == "/about") {
    res.end("you are at about page");
  } else if (url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    const dat = fs.readFile(
      `${__dirname}/UserApi/api.json`,
      "utf-8",
      (req, data) => {
        res.end(data);
      }
    );
  }
});
server.listen("8000", "127.0.0.1", () => {
  console.log("server is lisening");
  const jsdata = JSON.stringify(nor_data);
  console.log(nor_data);
  console.log(jsdata);
});
