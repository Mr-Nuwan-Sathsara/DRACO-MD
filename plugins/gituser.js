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
        if (!q) {
            return reply("Please provide a GitHub username.");
        }

        const apiUrl = `https://api.github.com/users/${q}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let desc = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗚𝗜𝗧𝗛𝗨𝗕 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🐲 」*

*👤 Username :* ${data.name || data.login}
*🔗 Github Url :* ${data.html_url}
*📝 Bio :* ${data.bio || 'Not available'}
*🏙️ Location :* ${data.location || 'Unknown'}
*📊 Public Repos :* ${data.public_repos}
*👥 Followers :* ${data.followers} | Following: ${data.following}
*📅 Created At :* ${new Date(data.created_at).toDateString()}
*🔭 Public Gists :* ${data.public_gists}\n\n\n${botwatermark}`

        await conn.sendMessage(from, { image: { url: data.avatar_url }, caption: desc }, { quoted: mek });
      await m.react("✅")
    }catch(e){
console.log(e)
reply(`${e}`)
}
})
