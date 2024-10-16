const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "getppp",
    desc: "Get anyone profile picture.",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!quoted) return reply("Reply user to unblock.")

await m.react("🔄")
const user = quoted.sender
const ppUrl = await conn.profilePictureUrl(from, 'image')
await conn.sendMessage(from,{image: {url: ppUrl},caption: `test`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})
