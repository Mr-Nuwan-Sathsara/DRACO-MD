const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config');
const { botwatermark } = require('../botwatermark');

cmd({
    pattern: "omdb",
    desc: "Fetch detailed information about a movie.",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        await m.react("🎬")
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=d3963e30`;
        const response = await axios.get(apiUrl);

        const data = response.data;
        if (data.Response === "False") {
            return reply("🚫 Movie not found.");
        }

      let movieInfo = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗢𝗩𝗜𝗘 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🐲 」*

*╭─🎬 Movie Information 🎬─◦•◦❥•*
*╎* *🏷️ Tɪᴛʟᴇ:* ${data.Title}
*╎* *📆 Yᴇᴀʀ:* ${data.Year}
*╎* *⭐ Rᴀᴛᴇᴅ:* ${data.Rated}
*╎* *🗓️ Rᴇʟᴇᴀꜱᴇᴅ:* ${data.Released}
*╎* *⏰ Rᴜɴᴛɪᴍᴇ:* ${data.Runtime}
*╎* *🎭 Gᴇɴʀᴇ:* ${data.Genre}
*╎* *📽️ Dɪʀᴇᴄᴛᴏʀ:* ${data.Director}
*╎* *✍️ Wʀɪᴛᴇʀ:* ${data.Writer}
*╎* *🧚‍♂️ Aᴄᴛᴏʀꜱ:* ${data.Actors}
*╎* *📝 Pʟᴏᴛ:* ${data.Plot}
*╎* *🔖 Lᴀɴɢᴜᴀɢᴇ:* ${data.Language}
*╎* *🌍 Cᴏᴜɴᴛʀʏ:* ${data.Country}
*╎* *🏆 Aᴡᴀʀᴅꜱ:* ${data.Awards}
*╎* *🌟 Iᴍᴅʙ Rᴀᴛɪɴɢ:* ${data.imdbRating}
*╎* *🗃️ Iᴍᴅʙ Vᴏᴛᴇꜱ:* ${data.imdbVotes}
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`;

const moviePic = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;
await conn.sendMessage(from,{image:{url: moviePic},caption: movieInfo},{quoted:mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
