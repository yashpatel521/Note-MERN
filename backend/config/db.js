const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedtopology: true,
    });
    console.log(`Connected successfully ${conn.connection.host}`);
  } catch (error) {
    console.error(`ERROR : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
