const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
    pattern: "kick",
    desc: "Remove member in group.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")
if(!q && !m.quoted) return reply("*❗ Mᴇɴᴛɪᴏɴ ᴀ Uꜱᴇʀ Oʀ Tᴀɢ ᴀ Uꜱᴇʀ ❗*")

await m.react("🔄")

if(!q) {
const user = quoted.sender
await conn.groupParticipantsUpdate(
    from, 
    [user],
    "remove"
)
await conn.sendMessage(from,{text: `*✅ ${user} Hᴀꜱ Bᴇᴇɴ Rᴇᴍᴏᴠᴇᴅ.*`},{quoted: mek})
await m.react("✅")
}else if(!q.startsWith("@")) return reply("Use @ to mention user.")

const rmj = q.slice(1) + "@s.whatsapp.net"

await conn.groupParticipantsUpdate(
    from, 
    [rmj],
    "remove"
)

await conn.sendMessage(from,{text: `*✅ ${rmj} Hᴀꜱ Bᴇᴇɴ Rᴇᴍᴏᴠᴇᴅ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "promote",
    desc: "Give admin to member in group.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")
if(!q && !m.quoted) return reply("*❗ Mᴇɴᴛɪᴏɴ ᴀ Uꜱᴇʀ Oʀ Tᴀɢ ᴀ Uꜱᴇʀ ❗*")

await m.react("🔄")

if(!q) {
const user = quoted.sender
await conn.groupParticipantsUpdate(
    from, 
    [user],
    "promote"
)
await conn.sendMessage(from,{text: `*✅ ${user} Hᴀꜱ Bᴇᴇɴ Pʀᴏᴍᴏᴛᴇᴅ Tᴏ Aᴅᴍɪɴ.*`},{quoted: mek})
await m.react("✅")
}else if(!q.startsWith("@")) return reply("Use @ to mention user.")

const pmj = q.slice(1) + "@s.whatsapp.net"
await conn.groupParticipantsUpdate(
    from, 
    [pmj],
    "promote"
)
await conn.sendMessage(from,{text: `*✅ ${pmj} Hᴀꜱ Bᴇᴇɴ Pʀᴏᴍᴏᴛᴇᴅ Tᴏ Aᴅᴍɪɴ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "demote",
    desc: "Demote admin to member in group.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")
if(!q && !m.quoted) return reply("*❗ Mᴇɴᴛɪᴏɴ ᴀ Uꜱᴇʀ Oʀ Tᴀɢ ᴀ Uꜱᴇʀ ❗*")

await m.react("🔄")

if(!q) {
const user = quoted.sender
await conn.groupParticipantsUpdate(
    from, 
    [user],
    "demote"
)
await conn.sendMessage(from,{text: `*✅ ${user} Hᴀꜱ Bᴇᴇɴ Dᴇᴍᴏᴛᴇᴅ Tᴏ Mᴇᴍʙᴇʀ.*`},{quoted: mek})
await m.react("✅")
}else if(!q.startsWith("@")) return reply("Use @ to mention user.")

const dmj = q.slice(1) + "@s.whatsapp.net"
await conn.groupParticipantsUpdate(
    from, 
    [dmj],
    "demote"
)
await conn.sendMessage(from,{text: `*✅ ${dmj} Hᴀꜱ Bᴇᴇɴ Dᴇᴍᴏᴛᴇᴅ Tᴏ Mᴇᴍʙᴇʀ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "mute",
    alias: ["close"],
    desc: "Change settings to only admin can send messages.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
await conn.groupSettingUpdate(from, 'announcement')
await conn.sendMessage(from, { text: `*✅ Gʀᴏᴜᴘ Cʟᴏꜱᴇᴅ.*`, mentions: participants.map(a => a.id) } )
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "unmute",
    alias: ["open"],
    desc: "Change settings to all members can send messages.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
await conn.groupSettingUpdate(from, 'not_announcement')
await conn.sendMessage(from, { text: `*✅ Gʀᴏᴜᴘ Oᴘᴇɴᴇᴅ.*`, mentions: participants.map(a => a.id) } )
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "locks",
    desc: "Lock group settings.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
await conn.groupSettingUpdate(from, 'locked')
await conn.sendMessage(from,{text: `*✅ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢꜱ Lᴏᴄᴋᴇᴅ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "unlocks",
    desc: "Unlock group settings.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
await conn.groupSettingUpdate(from, 'unlocked')
await conn.sendMessage(from,{text: `*✅ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢꜱ Uɴʟᴏᴄᴋᴇᴅ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "setgname",
    desc: "Change group name.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
await conn.groupUpdateSubject(from, q)
await conn.sendMessage(from,{text: `*✅ Gʀᴏᴜᴘ Nᴀᴍᴇ Cʜᴀɴɢᴇᴅ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "setgdesc",
    desc: "Change group description.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
await conn.groupUpdateDescription(from, q)
await conn.sendMessage(from,{text: `*✅ Gʀᴏᴜᴘ Dᴇꜱᴄʀɪᴘᴛɪᴏɴ Cʜᴀɴɢᴇᴅ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "glink",
    desc: "Get group invite link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
const code = await conn.groupInviteCode(from)
await conn.sendMessage(from,{text: `*🔗 Hᴇʀᴇ Iꜱ Gʀᴏᴜᴘ Iɴᴠɪᴛᴇ Lɪɴᴋ :*\nhttps://chat.whatsapp.com/${code}`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "resetglink",
    desc: "Reset group invite link.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
const code = await sock.groupRevokeInvite(from)
await conn.sendMessage(from,{text: `*✅ Gʀᴏᴜᴘ Iɴᴠɪᴛᴇ Lɪɴᴋ Rᴇꜱᴇᴛ Sᴜᴄᴄᴇꜱꜱ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "tagall",
    desc: "To Tag all Members.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")

let teks = `*❗ Aᴛᴛᴇɴᴛɪᴏɴ ❗* 
 
`
for (let mem of participants) {
teks += `🪀 @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: mek })

await m.react("✅")
                
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "hidetag",
    desc: "To Tag all Members for Message.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

if(!q && !m.quoted ) return reply('ℹ️ *Please add a message or Quote a text*')
if (!q) {
let teks = `${m.quoted.msg}`
return conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) } )
}
let teks = `${q}`
conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) } )
                
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "ginfo",
    alias: ["groupinfo"],
    desc: "Get group informations.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

const metadata = await conn.groupMetadata(from) 
let ppUrl = await conn.profilePictureUrl( from , 'image')

const gdata = `
*「 🤡 𝗖𝗟𝗢𝗪𝗡-𝗠𝗗 𝗪𝗔 𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🤡 」*

*╭──🪀 Group Informations 🪀──◦•◦❥•*
*╎*
*╎* *🏷️ Gʀᴏᴜᴘ Nᴀᴍᴇ :* ${metadata.subject}
*╎* *🔖 Gʀᴏᴜᴘ Jɪᴅ :* ${metadata.id}
*╎* *👤 Gʀᴏᴜᴘ Cʀᴇᴀᴛᴏʀ :* ${metadata.owner}
*╎* *🪀 Mᴇᴍʙᴇʀꜱ Cᴏᴜɴᴛ :* ${metadata.size}
*╎* *🗓️ Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${metadata.desc}
*╎*
*╰────────────────────◦•◦❥•*`

await conn.sendMessage(from,{image:{url: ppUrl },caption: gdata },{quoted:mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "remgp",
    desc: "Remove group picture.",
    category: "group",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")
if(!isAdmins) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Gʀᴏᴜᴘ Aᴅᴍɪɴ. ❗*")
if(!isBotAdmins) return reply("*❗ Bᴏᴛ Nᴇᴇᴅꜱ Tᴏ Bᴇ ᴀ Gʀᴏᴜᴘ Aᴅᴍɪɴ Tᴏ Dᴏ Tʜɪꜱ ❗*")

await m.react("🔄")
await sock.removeProfilePicture(from)
await conn.sendMessage(from,{text: `*✅ Gʀᴏᴜᴘ Pɪᴄᴛᴜʀᴇ Rᴇᴍᴏᴠᴇᴅ.*`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})
