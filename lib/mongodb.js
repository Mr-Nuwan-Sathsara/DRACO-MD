const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'OWNER_NUMBER', value: '94755845165' },
    { key: 'PREFIX', value: '.' },
    { key: 'BUTTONS', value: 'false' },
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/W0sVQht/Picsart-24-09-23-18-15-44-090.jpg' },
    { key: 'ALIVE_MSG', value: 'ﾠﾠ *⟡━⟪ 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 ⟫━⟡*\n\n*╭─「  Hᴇʟʟᴏ 👋 」*\n*╎ﾠI ᴀᴍ Cʟᴏᴡɴ-MD Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ. 🤡*\n*╎ﾠI ᴀᴍ Aʟɪᴠᴇ Nᴏᴡ. ✅*\n*╎ﾠCʀᴇᴀᴛᴇᴅ Bʏ Mʀ.Uɴᴋɴᴏᴡɴ. 👤*\n*╎ﾠSᴇɴᴅ .menu Tᴏ Gᴇᴛ Cᴏᴍᴍᴀɴᴅ Lɪꜱᴛ. 📋*\n*╰───────────────┈*' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'private' },
    { key: 'O_REACT', value: 'false' },
    { key: 'OWNER_REACT', value: '🤡' },
    { key: 'AUTO_REPLY', value: 'false' },
    { key: 'AUTO_VOICE', value: 'false' },
    { key: 'AUTO_STICKER', value: 'false' },
    { key: 'NSFW', value: 'false' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('✅ DRACO-MD MongoDB Connected');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
