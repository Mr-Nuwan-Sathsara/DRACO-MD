const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7dMjHCTR#6ioXgVo6e2gW4VQNnI3ligEIoh4UaRj5zGeEZziZz_o",
MONGODB: process.env.MONGODB || "mongodb+srv://tesil69892:geftVnd17Jt1ct7a@cluster0.lgcsm.mongodb.net/",
};
