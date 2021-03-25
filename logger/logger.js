const logger = (req, res, next) => {
  console.log(
    "i am a logger taht is basically a middleware from logger sepaerta"
  );
  console.log(req.method);
  next();
};
module.exports = logger;
