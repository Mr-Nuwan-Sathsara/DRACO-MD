const crypto = require('crypto');
const { cmd } = require('../command');
const{ botwatermark } = require('../botwatermark')

cmd({
    pattern: "spass",
    desc: "Generate a strong password.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      await m.react("🔄")
        const length = args[0] ? parseInt(args[0]) : 12; // Default length is 12 if not provided
        if (isNaN(length) || length < 8) {
            return reply('Please provide a valid length for the password (minimum 8 characters).');
        }

        const generatePassword = (len) => {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
            let password = '';
            for (let i = 0; i < len; i++) {
                const randomIndex = crypto.randomInt(0, charset.length);
                password += charset[randomIndex];
            }
            return password;
        };

        const password = generatePassword(length);
      
let msg = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗤𝗨𝗢𝗧𝗘𝗦 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥 🐲 」*

*🔐 Yᴏᴜʀ Sᴛʀᴏɴɢ Pᴀꜱꜱᴡᴏʀᴅ 🔐*\n\n\n${botwatermark}`;

await conn.sendMessage(from, { text: msg }, { quoted: mek });
await conn.sendMessage(from, {text: `${password}`})

await m.react("✅")
    }catch(e){
console.log(e)
reply(`${e}`)
}
})
