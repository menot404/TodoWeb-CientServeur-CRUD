const { default: mongoose } = require("mongoose");
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI
const dbConnect = async () => {
  try {
    if (MONGO_URI) {
        await mongoose.connect(`${MONGO_URI}`);
        console.log(`✅ Connecté à mongoDB`);
    }
  } catch (error) {
    console.error(`❌ Error Connect: ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnect();
