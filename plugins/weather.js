const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "weather",
    desc: "Get weather information any city.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        await m.react("🔄")
        if (!q) return reply("Give me a city name.");
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=2d61a72574c11c4f36173b627f8cb177&units=metric`;
        const response = await axios.get(url);
        const data = response.data;

        const weather = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗪𝗘𝗔𝗧𝗛𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡  🐲 」*

*╭──🌦️ Weather Information 🌦️──◦•◦❥•*
*╎*
*╎* *🌍 Cᴏᴜɴᴛʀʏ:* ${data.sys.country}
*╎* *🏙️ Cɪᴛʏ:* ${data.name}
*╎* *🌡️ Tᴇᴍᴘᴇʀʀᴀᴛᴜʀᴇ:* ${data.main.temp}°C
*╎* *🌡️ Fᴇᴇʟꜱ Lɪᴋᴇ:* ${data.main.feels_like}°C
*╎* *🌡️ Mɪɴ Tᴇᴍᴘ:* ${data.main.temp_min}°C
*╎* *🌡️ Mᴀx Tᴇᴍᴘ:* ${data.main.temp_max}°C
*╎* *💧 Hᴜᴍɪᴅɪᴛʏ:* ${data.main.humidity}%
*╎* *☁️ Wᴇᴀᴛʜᴇʀ:* ${data.weather[0].main}
*╎* *🌫️ Dᴇꜱᴄʀɪᴘᴛɪᴏɴ:* ${data.weather[0].description}
*╎* *💨 Wɪɴᴅ Sᴘᴇᴇᴅ:* ${data.wind.speed} m/s
*╎* *🔽 Pʀᴇꜱꜱᴜʀᴇ:* ${data.main.pressure} hPa
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{text:weather},{quoted:mek})

await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})
