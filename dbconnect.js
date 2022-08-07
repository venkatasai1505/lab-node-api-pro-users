const mongoose = require("mongoose");
const dbString =
  "mongodb+srv://root:root@cluster0.nbbgs3y.mongodb.net/prograd?retryWrites=true&w=majority";

mongoose
  .connect(dbString, {
    useNewUrlParser: true
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(`Can't be connected ${err}`));

  module.exports = mongoose