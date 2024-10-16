const config = require('../config')
const { cmd, commands } = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        await m.react("📍")
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*🔄 Cʜᴇᴄᴋɪɴɢ Dʀᴀᴄᴏ-Mᴅ Bᴏᴛ Pɪɴɢ...*' }, {quoted:mek})
        const endTime = Date.now()
        const ping = endTime - startTime

        let pinspeed = `clownmdpingspeed`

        if(ping > 0) pinspeed = `*🚀 Yᴏᴜʀ Bᴏᴛ Sᴘᴇᴇᴅ Iꜱ Vᴇʀʏ Fᴀꜱᴛ 🚀*`
        if(ping > 200) pinspeed = `*🛜 Yᴏᴜʀ Bᴏᴛ Sᴘᴇᴇᴅ Iꜱ Fᴀꜱᴛ 🛜*`
        if(ping > 500) pinspeed = `*❗ Yᴏᴜʀ Bᴏᴛ Sᴘᴇᴇᴅ Iꜱ Sʟᴏᴡ ❗*`
        if(ping > 1000) pinspeed = `*🚫 Yᴏᴜʀ Bᴏᴛ Sᴘᴇᴇᴅ Iꜱ Vᴇʀʏ Sʟᴏᴡ 🚫*`

        await conn.sendMessage(from, { text: `*📍 Dʀᴀᴄᴏ-Mᴅ Bᴏᴛ Pɪɴɢ: ${ping}ᴍꜱ*\n${pinspeed}` })
        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
