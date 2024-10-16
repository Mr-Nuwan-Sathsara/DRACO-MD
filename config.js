const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qRkQSA7B#vaBgvJd4Wg21lgFsQ-yEO4QRjJK-XlIZCTpAhNfOHPg",
MONGODB: process.env.MONGODB || "mongodb+srv://contactnuwansathsara:ql4Mp73skN2mdarF@cluster0.qdqp0.mongodb.net/",
};
