const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    const con = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Atlas connection successful: ${con.connection.host}`.magenta.italic
    );
  } catch (err) {
    console.log(`OOPS: ${err.message}`.red.bold);
    //quit app if failure>
    process.exit(1);
  }
};

module.exports = dbConnect;
