var mongoose = require("mongoose");
async function init() {
  try {
    await mongoose.connect(
      "mongodb+srv://neeru:neeru@cluster0.6qdoa.mongodb.net/SignUp?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error in mongoDb connection");
    console.log(error);
  }
}

init();
