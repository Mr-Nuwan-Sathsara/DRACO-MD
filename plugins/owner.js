const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')


cmd({
    pattern: "setpn",
    desc: "Chnage whatsapp profile name.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Bᴏᴛ Oᴡɴᴇʀ. ❗*")
if(!q) return reply("*❗ Gɪᴠᴇ Tᴇxᴛ Tᴏ Cʜᴀɴɢᴇ Pʀᴏꜰɪʟᴇ Nᴀᴍᴇ. ❗*")

await m.react("🔄")
await conn.updateProfileName(q)
await m.react("✅")
await conn.sendMessage(from,{text: `*✅ Wʜᴀᴛꜱᴀᴘᴘ Nᴀᴍᴇ Uᴘᴅᴀᴛᴇᴅ.*\n\n\n${botwatermark}`},{quoted: mek})
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "setpa",
    desc: "Chnage whatsapp profile about.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")
if(!q) return reply("*❗ Gɪᴠᴇ Tᴇxᴛ Tᴏ Cʜᴀɴɢᴇ Pʀᴏꜰɪʟᴇ Aʙᴏᴜᴛ. ❗*")
if(q.length > 256) return reply("*❗ Yᴏᴜ Cᴀɴ Aᴅᴅ 256 Mᴀx Cʜᴀʀᴀᴄᴛᴇʀꜱ Tᴏ Aʙᴏᴜᴛ. ❗*")

await m.react("🔄")
await conn.updateProfileStatus(q)
await m.react("✅")
await conn.sendMessage(from,{text: `*✅ Wʜᴀᴛꜱᴀᴘᴘ Aʙᴏᴜᴛ Uᴘᴅᴀᴛᴇᴅ.*\n\n\n${botwatermark}`},{quoted: mek})
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "rempp",
    desc: "Remove whatsapp profile picture.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")

await m.react("🔄")
await conn.removeProfilePicture(from)
await m.react("✅")
await conn.sendMessage(from,{text: `*✅ Wʜᴀᴛꜱᴀᴘᴘ Pʀᴏꜰɪʟᴇ Pɪᴄᴛᴜʀᴇ Rᴇᴍᴏᴠᴇᴅ.*\n\n\n${botwatermark}`},{quoted: mek})
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "block",
    desc: "Block user.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")

await m.react("🔄")
await conn.updateBlockStatus(from, "block")
await conn.sendMessage(from, {text: `*✅ Uꜱᴇʀ Bʟᴏᴄᴋᴇᴅ.*`})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "unblock",
    desc: "Unblock user.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")

await m.react("🔄")
await conn.updateBlockStatus(from, "unblock")
await conn.sendMessage(from, {text: `*✅ Uꜱᴇʀ Uɴʙʟᴏᴄᴋᴇᴅ.*`})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "broadcast",
    desc: "Send broadcast message to all groups.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")
if(!q) return reply("*❗ Gɪᴠᴇ Tᴇxᴛ Tᴏ Sᴇɴᴅ Aʟʟ Gʀᴏᴜᴘꜱ. ❗*")

await m.react("🔄")
const groups = Object.keys(await conn.groupFetchAllParticipating());

    for (const groupId of groups) {
        await conn.sendMessage(groupId, { text: q});
}

await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "jid",
    desc: "Get jid.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")

await m.react("🔄")
await conn.sendMessage(from,{text: from},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "allgjid",
    desc: "Get all group jids.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")

await m.react("🔄")
const groups = await conn.groupFetchAllParticipating();
const groupJids = Object.keys(groups).join('\n');
let desc = `📝 *Group JIDs:*\n\n${groupJids}`
await conn.sendMessage(from, {text: desc},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "join",
    desc: "Join whatsapp group using jid.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Your not the bot owner. ❗*")
if(!q) return reply("*❗ Give group jid to join. ❗*")

await m.react("🔄")
const response = await conn.groupAcceptInvite(q)
    if(!response.ok) return reply("test done")
await m.react("✅")
await conn.sendMessage(from,{text: `*✅ Joined.*\n\n\n${botwatermark}`},{quoted: mek})
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "leave",
    desc: "leave group.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*")
if(!isGroup) return reply("*❗ Tʜɪꜱ Cᴏᴍᴍᴀɴᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘꜱ ❗*")

await conn.groupLeave(from)

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "getpp",
    desc: "Get any group picture or person.",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!isOwner) return reply("*❗ Yᴏᴜʀ Nᴏᴛ Tʜᴇ Bᴏᴛ Oᴡɴᴇʀ. ❗*")
await m.react("🔄")
const ppUrl = await conn.profilePictureUrl(from, 'image')
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})
