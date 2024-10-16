const { cmd, commands } = require('../command')
const { botwatermark } = require('../botwatermark')
const axios = require('axios')

cmd({
    pattern: "lyrics",
    desc: "Get song lyrics.",
    category: "search",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try{

const api = `https://widipe.com/lirik?text=${q}`
const response = await axios.get(api)
const data = response.data

if(!q) {
  await m.react("❌")
  return reply("*❗️ Give song name to find lyrics. ❗️*")
} else if(data.result.error) {
  await m.react("❌")
  return reply("*❗️ Can't find lyrics. ❗️*")
} else {

await m.react("🎶")
let desc = `
*📝 Title :* ${data.result.title}
*✍️ Artist :* ${data.result.artist}
*📆 Released Date :* ${data.result.releasedAt}

*📜 Lyrics :*
${data.result.lyrics}\n\n\n${botwatermark}`

await conn.sendMessage(from, {image: {url: data.result.image},caption: desc},{quoted: mek})

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})
