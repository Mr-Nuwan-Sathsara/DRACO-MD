const { cmd, commands } = require('../command');
const { botwatermark } = require('../botwatermark')
const axios = require('axios')

const {
  GOOGLE_IMG_SCRAP,
  GOOGLE_IMG_INVERSE_ENGINE_URL,
  GOOGLE_IMG_INVERSE_ENGINE_UPLOAD,
  GOOGLE_QUERY,
} = require("google-img-scrap");

cmd({
    pattern: "img",
    alias: ["image"],
    desc: "Download images.",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!q) return reply("*❗ Gɪᴠᴇ Tᴇxᴛ Tᴏ Dᴏᴡɴʟᴏᴀᴅ Iᴍᴀɢᴇꜱ ❗*")

await m.react("🖼️")

const data = await GOOGLE_IMG_SCRAP({
  search: q,
  limit: 10,
});

  if(data.result[0] || !data.result[1] ) { 
  return await conn.sendMessage(from,{image: {url: data.result[0].url},caption: botwatermark},{quoted: mek})
}
  if(data.result[1] || !data.result[2] ) { 
    await conn.sendMessage(from,{image: {url: data.result[0].url},caption: botwatermark},{quoted: mek})
  return await conn.sendMessage(from,{image: {url: data.result[1].url},caption: botwatermark},{quoted: mek})
}
  if(data.result[2] || !data.result[3] ) { 
    await conn.sendMessage(from,{image: {url: data.result[0].url},caption: botwatermark},{quoted: mek})
    await conn.sendMessage(from,{image: {url: data.result[1].url},caption: botwatermark},{quoted: mek})
  return await conn.sendMessage(from,{image: {url: data.result[2].url},caption: botwatermark},{quoted: mek})
}
  if(data.result[3] || !data.result[4] ) { 
    await conn.sendMessage(from,{image: {url: data.result[0].url},caption: botwatermark},{quoted: mek})
    await conn.sendMessage(from,{image: {url: data.result[1].url},caption: botwatermark},{quoted: mek})
    await conn.sendMessage(from,{image: {url: data.result[2].url},caption: botwatermark},{quoted: mek})
  return await conn.sendMessage(from,{image: {url: data.result[3].url},caption: botwatermark},{quoted: mek})
}
  if(data.result[4]) { 
    await conn.sendMessage(from,{image: {url: data.result[0].url},caption: botwatermark},{quoted: mek})
    await conn.sendMessage(from,{image: {url: data.result[1].url},caption: botwatermark},{quoted: mek})
    await conn.sendMessage(from,{image: {url: data.result[2].url},caption: botwatermark},{quoted: mek})
    await conn.sendMessage(from,{image: {url: data.result[3].url},caption: botwatermark},{quoted: mek})
  return await conn.sendMessage(from,{image: {url: data.result[4].url},caption: botwatermark},{quoted: mek})
}

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "apk",
    desc: "Download apk.",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

await m.react("🔄")
      
const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${q}/limit=1`;
const response = await axios.get(apiUrl);
const data = response.data;

let step1 = data.datalist.list[0].size % 1000000
let step2 = `.` + step1
let step3 = data.datalist.list[0].size / 1000000
let correctsize = step3 - step2
    
let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗔𝗣𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──📦 APK Details 📦──◦•◦❥•*
*╎*
*╎* *🏷️ Nᴀᴍᴇ :* ${data.datalist.list[0].name}
*╎* *📦 Sɪᴢᴇ :* ${correctsize}MB
*╎* *🔖 Pᴀᴄᴋᴀɢᴇ :* ${data.datalist.list[0].package}
*╎* *📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ${data.datalist.list[0].updated}
*╎* *👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ${data.datalist.list[0].developer.name}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: data.datalist.list[0].icon},caption: desc},{quoted: mek})
await conn.sendMessage(from,{document: {url: data.datalist.list[0].file.path_alt},fileName: data.datalist.list[0].name + ".apk",mimetype: 'application/vnd.android.package-archive',caption: `${botwatermark}`},{quoted: mek})
        
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

const getFBInfo = require("@xaviabot/fb-downloader");

cmd({
    pattern: "fb",
    alias: ["facebook","fbdl"],
    desc: "Download facebook videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

let cl = q.search("facebook.com/")
if(!q || !q.startsWith("https://") || cl == -1) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Fᴀᴄᴇʙᴏᴏᴋ Vɪᴅᴇᴏ Lɪɴᴋ. ❗*")
}

await m.react("🎬")

const result = await getFBInfo(q);

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗗𝗘𝗥 🐲 」*

*╭──🎬 Video Info 🎬──◦•◦❥•*
*╎*
*╎* *🔗 Uʀʟ :* ${result.url}
*╎* *📝 Tɪᴛᴛʟᴇ :* ${result.title}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Hᴅ Qᴜᴀʟɪᴛʏ*
*╎* *2️⃣ Fᴏʀ Sᴅ Qᴜᴀʟɪᴛʏ*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: result.thumbnail},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")

const url = urls[0]
const result = await getFBInfo(url);
await conn.sendMessage(from,{video: {url: result.hd},mimetype: "video/mp4",caption: `*Hᴅ Qᴜᴀʟɪᴛʏ*\n\n${botwatermark}`},{quoted: mek})
    
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")

const url = urls[0]
const result = await getFBInfo(url);
await conn.sendMessage(from,{video: {url: result.sd},mimetype: "video/mp4",caption: `*Sᴅ Qᴜᴀʟɪᴛʏ*\n\n${botwatermark}`},{quoted: mek})

await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

const { ndown } = require("nayan-media-downloader")

cmd({
    pattern: "instagram",
    alias: ["insta"],
    desc: "Download instagram files.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const cl = q.search("instagram.com/")
if(!q || !q.startsWith("https://") || cl == -1) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Iɴꜱᴛᴀɢʀᴀᴍ Vɪᴅᴇᴏ Lɪɴᴋ ❗*")
}

await m.react("🎬")

let data = await ndown(q)
    
let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──🎬 Video Details 🎬──◦•◦❥•*
*╎*
*╎* *🔗 Uʀʟ :* ${q}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Hᴅ Qᴜᴀʟɪᴛʏ*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: data.data[0].thumbnail},caption: desc},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")
const url = urls[0]
let data = await ndown(url)
await conn.sendMessage(from,{video: {url: data.data[0].url},mimetype: "video/mp4",caption: `*Hᴅ Qᴜᴀʟɪᴛʏ*\n\n${botwatermark}`},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

const tik = require('rahad-media-downloader');

cmd({
    pattern: "tiktok",
    alias: ["tt"],
    desc: "Download tiktok videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const cl = q.search("tiktok.com/")
if(!q || !q.startsWith("https://") || cl == -1) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ TɪᴋTᴏᴋ Vɪᴅᴇᴏ Lɪɴᴋ. ❗*")
}

await m.react("🎬")

const result = await tik.rahadtikdl(q);

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──🎬 Video Details 🎬──◦•◦❥•*
*╎*
*╎* *📝 Tɪᴛʟᴇ :* ${result.data.title}
*╎* *❤️ Lɪᴋᴇꜱ :* ${result.data.react_count}
*╎* *📊 Vɪᴇᴡꜱ :* ${result.data.play_count}
*╎* *🎶 Mᴜꜱɪᴄ Aᴜᴛʜᴏʀ :* ${result.data.musicInfo.author}
*╎* *🔗 Uʀʟ :* ${q}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Wɪᴛʜ Wᴀᴛᴇʀᴍᴀʀᴋ*
*╎* *2️⃣ Fᴏʀ Wɪᴛʜᴏᴜᴛ Wᴀᴛᴇʀᴍᴀʀᴋ*
*╎* *3️⃣ Fᴏʀ Aᴜᴅɪᴏ*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: result.data.cover },caption:desc},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗜𝗞𝗧𝗢𝗞",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")
const url = urls[0]
const result = await tik.rahadtikdl(url);
await conn.sendMessage(from, { video: { url: result.data.watermarkMp4},mimetype: "video/mp4",caption: `*Wɪᴛʜ Wᴀᴛᴇʀᴍᴀʀᴋ*\n\n${botwatermark}` }, { quoted: mek })
await m.react("✅")  

}catch(e){
console.log(e)
reply(`${e}`)
}
})          

cmd({
    reply_pattern: "2",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗜𝗞𝗧𝗢𝗞",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")
const url = urls[0]
const result = await tik.rahadtikdl(url);

await conn.sendMessage(from, { video: { url: result.data.noWatermarkMp4 }, mimetype: "video/mp4", caption: `*Wɪᴛʜᴏᴜᴛ Wᴀᴛᴇʀᴍᴀʀᴋ*\n\n${botwatermark}` }, { quoted: mek })
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})          

cmd({
    reply_pattern: "3",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗜𝗞𝗧𝗢𝗞",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")
const url = urls[0]
const result = await tik.rahadtikdl(url);

await conn.sendMessage(from, { audio: { url: result.data.musicInfo.music }, mimetype: "audio/mpeg" }, { quoted: mek })
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

const { twitterdown } = require("nayan-media-downloader")
const { twitter } = require('btch-downloader')

cmd({
    pattern: "twitter",
    alias: ["x"],
    desc: "Download Twitter/X videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

const cl = q.search("x.com/")
if(!q || !q.startsWith("https://") || cl == -1) {
    await m.react("❌")
    return reply("*❗ Gɪᴠᴇ Tᴡɪᴛᴛᴇʀ/X Vɪᴅᴇᴏ Lɪɴᴋ. ❗*")
}

await m.react("🎬")

let data = await twitter(q)

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗪𝗜𝗧𝗧𝗘𝗥 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──🎬 Video Details 🎬──◦•◦❥•*
*╎*
*╎* *🔗 Uʀʟ :* ${q}
*╎* *📝 Tɪᴛʟᴇ :* ${data.title}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Hᴅ Qᴀʟɪᴛʏ*
*╎* *2️⃣ Fᴏʀ Sᴅ Qᴀʟɪᴛʏ*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: `https://logocreator.io/wp-content/uploads/2023/11/64c2bb00cc53d81d58842318_og-twitter-x.png`},mimetype: "image/png",caption: desc},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗪𝗜𝗧𝗧𝗘𝗥",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")
const url = urls[0]
let URL = await twitterdown(url)

await conn.sendMessage(from,{video: {url: URL.data.HD},mimetype: "video/mp4",caption: `*Hᴅ Qᴀʟɪᴛʏ*\n\n${botwatermark}`},{quoted:mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗪𝗜𝗧𝗧𝗘𝗥",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔄")
const url = urls[0]
let URL = await twitterdown(url)

await conn.sendMessage(from,{video: {url: URL.data.SD},mimetype: "video/mp4",caption: `*Sᴅ Qᴀʟɪᴛʏ*\n\n${botwatermark}`},{quoted:mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "Download song.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🎶")

if(!q) return reply("Please give me a song name or url")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──🎶 Song Details 🎶──◦•◦❥•*
*╎*
*╎* *📝 Tɪᴛʟᴇ :* ${data.title}
*╎* *⏰ Dᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
*╎* *📆 Aɢᴏ :* ${data.ago}
*╎* *📊 Vɪᴇᴡꜱ :* ${data.views}
*╎* *🗓️ Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${data.description}
*╎* *🔗 Uʀʟ :* ${data.url}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Aᴜᴅɪᴏ*
*╎* *2️⃣ Fᴏʀ Dᴏᴄᴜᴍᴇɴᴛ*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗢𝗡𝗚",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

await m.react("📥")

const url = urls[0]  
const search = await yts(url)
const data = search.videos[0];

//===Download Audio===

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//===Send Audio===

await m.react("📤")
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await m.react("✅")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗢𝗡𝗚",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

await m.react("📥")

const url = urls[0]
const search = await yts(url)
const data = search.videos[0];

//===Download Audio===

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//===Send Audio===

await m.react("📤")
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:botwatermark},{quoted:mek})
await m.react("✅")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "video",
    desc: "Download Video.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await m.react("🎬")

if(!q) return reply("Please give me a video name or url")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──🎬 Video Details 🎬──◦•◦❥•*
*╎*
*╎* *📝 Tɪᴛʟᴇ :* ${data.title}
*╎* *⏰ Dᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
*╎* *📆 Aɢᴏ :* ${data.ago}
*╎* *📊 Vɪᴇᴡꜱ :* ${data.views}
*╎* *🗓️ Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${data.description}
*╎* *🔗 Uʀʟ :* ${data.url}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Vɪᴅᴇᴏ*
*╎* *2️⃣ Fᴏʀ Dᴏᴄᴜᴍᴇɴᴛ*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗩𝗜𝗗𝗘𝗢",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

await m.react("📥")
const url = urls[0]
const search = await yts(url)
const data = search.videos[0];

//===Download Video===

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//===Send Video===

await m.react("📤")
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption:botwatermark},{quoted:mek})
await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗩𝗜𝗗𝗘𝗢",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls}) => {
try{

await m.react("📥")
const url = urls[0]
const search = await yts(url)
const data = search.videos[0];

//===Download Video===

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//===Send Video===

await m.react("📤")
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:botwatermark},{quoted:mek})
await m.react("✅")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "gdrive",
    desc: "Download google drive files.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const api = `https://widipe.com/download/gdrive?url=${q}`
const response = await axios.get(api)
const data = response.data
  
if (!q || !q.startsWith("https://drive.google.com")) {
    await m.react("❌")
    return reply("*❗️ Give Google Drive Url. ❗️*")
} else if(!data.result.fileName) {
  await m.react("❌")
  return reply("*❗️ Can't Download This File. ❗️*")
} else {

await m.react("🔄")

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗚-𝗗𝗥𝗜𝗩𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──📁 Google Drive File Info 📁──◦•◦❥•*
*╎*
*╎* *🏷️ Fɪʟᴇ Nᴀᴍᴇ :* ${data.result.fileName}
*╎* *🔖 Fɪʟᴇ Tʏᴘᴇ :* ${data.result.mimetype}
*╎* *📦 Fɪʟᴇ Sɪᴢᴇ :* ${data.result.fileSize}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: `media/gdrive.png`},caption: desc},{quoted: mek})
await conn.sendMessage(from,{document: {url: data.result.data},mimetype: data.result.mimetype,fileName: data.result.fileName,caption: botwatermark},{quoted: mek})
await m.react("✅")

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "mediafire",
    alias: ["mf"],
    desc: "Download mediafire files.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/mediafire?link=${q}`
const response = await axios.get(api)
const data = response.data

if (!q || !q.startsWith("https://www.mediafire.com")) {
    await m.react("❌")
    return reply("*❗️ Give Mediafire Url. ❗️*")
} else if(!data.result.filename) {
  await m.react("❌")
  return reply("*❗️ Can't Download This File. ❗️*")
} else {

await m.react("🔄")

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──📁 Mediafire File Info 📁──◦•◦❥•*
*╎*
*╎* *🏷️ Fɪʟᴇ Nᴀᴍᴇ :* ${data.result.filename}
*╎* *🔖 Fɪʟᴇ Tʏᴘᴇ :* ${data.result.filetype}
*╎* *🗂️ Exᴛ :* ${data.result.ext}
*╎* *📦 Fɪʟᴇ Sɪᴢᴇ :* ${data.result.filesizeH}
*╎* *📆 Uᴘʟᴏᴀᴅ Dᴀᴛᴇ :* ${data.result.upload_date}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: `media/mediafire.png`},caption: desc},{quoted:mek})
await conn.sendMessage(from, { document: { url: data.result.url }, fileName: data.result.filename, mimetype: data.result.filetype, caption: `*Hᴇʀᴇ Iꜱ Yᴏᴜʀ Gᴏᴏɢʟᴇ Dʀɪᴠᴇ Fɪʟᴇ*\n\n${botwatermark}` }, { quoted: mek })
await m.react("✅")

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "scloud",
    alias: ["soundcloud"],
    desc: "Download soundcloud songs.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/soundcloud?url=${q}`
const response = await axios.get(api)
const data = response.data

if (!q || !q.startsWith("https://m.soundcloud.com")) {
    await m.react("❌")
    return reply("*❗️ Give Soundcloud Url. ❗️*")
} else if(!data.result.title) {
  await m.react("❌")
  return reply("*❗️ Can't Download This song. ❗️*")
} else {

await m.react("🎶")

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗢𝗨𝗡𝗗𝗖𝗟𝗢𝗨𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──🎶 Song Details 🎶──◦•◦❥•*
*╎*
*╎* *📝 Tɪᴛʟᴇ :* ${data.result.title}
*╎* *⏰ A :* ${data.result.author.username}
*╎* *🔗 Uʀʟ :* ${q}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Aᴜᴅɪᴏ*
*╎* *2️⃣ Fᴏʀ Dᴏᴄᴜᴍᴇɴᴛ*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from, {image: {url: data.result.imageURL},caption: desc},{quoted:mek})
await m.react("✅")

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗢𝗨𝗡𝗗𝗖𝗟𝗢𝗨𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {
await m.react("📥")

const url = urls[0]
const api = `https://widipe.com/soundcloud?url=${url}`
const response = await axios.get(api)
const data = response.data

const test = data.result.url;
console.log(test)

await m.react("📤")
await conn.sendMessage(from, {audio: {url: data.result.url},mimetype: "audio/mpeg"},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗢𝗨𝗡𝗗𝗖𝗟𝗢𝗨𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {
await m.react("📥")
const url = urls[0]
const api = `https://widipe.com/soundcloud?url=${url}`
const response = await axios.get(api)
const data = response.data
await m.react("📤")
await conn.sendMessage(from, { document: { url: data.result.url }, fileName: data.result.title + ".mp3", caption: botwatermark}, { quoted: mek })
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "thdl",
    alias: ["threads"],
    desc: "Download threads posts.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/download/threads?url=${q}`
const response = await axios.get(api)
const data = response.data

  let vori = ""
if(!data.result.image_urls[0]) vori = "video_urls"
if(!data.result.video_urls[0]) vori = "image_urls"
  let remoji = ""
if(vori == "image_urls") remoji = "🖼"
if(vori == "video_urls") remoji = "🎬"
if (!q || !q.startsWith("https://www.threads.net")) {
    await m.react("❌")
    return reply("*❗️ Give Threads Url. ❗️*")
} else if(data.result == "Failed Download !") {
  await m.react("❌")
  return reply("*❗️ Can't Download This Post. ❗️*")
} else {

await m.react(remoji)

let desc = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗛𝗥𝗘𝗔𝗗𝗦 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🐲 」*

*╭──${remoji} Threads Post Info ${remoji}──◦•◦❥•*
*╎*
*╎* *🔗 Url :* ${q}
*╎*
*╰────────────────────◦•◦❥•*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎* *1️⃣ Fᴏʀ Download*
*╰─────────────────┈*\n\n\n${botwatermark}`

await conn.sendMessage(from,{image: {url: `media/thdl.png`},caption: desc},{quoted:mek})

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗧𝗛𝗥𝗘𝗔𝗗𝗦 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔁")
const url = urls[0]
const api = `https://widipe.com/download/threads?url=${url}`
const response = await axios.get(api)
const data = response.data

let vori = ""
if(!data.result.image_urls[0]) vori = "video_urls"
if(!data.result.video_urls[0]) vori = "image_urls"
if(vori == "image_urls") {
  await conn.sendMessage(from, {image: {url: data.result.image_urls[0]},caption: botwatermark},{quoted: mek})
  await m.react("✅")
} else {
  await conn.sendMessage(from, {video: {url: data.result.video_urls[0].download_url},caption: botwatermark},{quoted: mek})
  await m.react("✅")
}

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================
