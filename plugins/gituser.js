const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "gituser",
    desc: "Fetch detailed GitHub user profile including profile picture.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      await m.react("🔄")
        const username = args[0];
        if (!username) {
            return reply("Please provide a GitHub username.");
        }

        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗚𝗜𝗧𝗛𝗨𝗕 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🐲 」*

*👤 Uꜱᴇʀɴᴀᴍᴇ*: ${data.name || data.login}
*🔗 Gɪᴛʜᴜʙ Uʀʟ*:(${data.html_url})
*📝 Bɪᴏ*: ${data.bio || 'Not available'}
*🏙️ Lᴏᴄᴀᴛɪᴏɴ*: ${data.location || 'Unknown'}
*📊 Pᴜʙʟɪᴄ Rᴇᴘᴏꜱ*: ${data.public_repos}
*👥 Fᴏʟʟᴏᴡᴇʀꜱ*: ${data.followers} | Following: ${data.following}
*📅 Cʀᴇᴀᴛᴇᴅ Aᴛ*: ${new Date(data.created_at).toDateString()}
*🔭 Pᴜʙʟɪᴄ Gɪꜱᴛꜱ*: ${data.public_gists}\n\n\n${botwatermark}`

        await conn.sendMessage(from, { image: { url: data.avatar_url }, caption: desc }, { quoted: mek });
      await m.react("✅")
    }catch(e){
console.log(e)
reply(`${e}`)
}
})
