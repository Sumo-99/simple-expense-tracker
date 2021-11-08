const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
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
