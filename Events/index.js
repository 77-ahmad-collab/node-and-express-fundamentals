const Eventemitter = require("events");
const event = new Eventemitter();
event.on("fire", () => {
  console.log("that eent has been fired");
});
event.on("fire", () => {
  console.log("that eent has been fired again and again");
});
event.emit("fire");
