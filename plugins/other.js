const { cmd, commands } = require('../command')
const { botwatermark } = require('../botwatermark')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

cmd({
    pattern: "screenshot",
    desc: "Get screenshot any webpage.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

if(!q || !q.startsWith("https://")) {
  await m.react("❌")
  return reply("*❗️ Give url to get screenshot. ❗️*")
}

await m.react("🖼")
let text = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗦 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥 🐲 」*

*╭─ 「 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ 👇 」*
*╎*
*╎* *1️⃣ For Mobile View*
*╎* *2️⃣ For PC View*
*╎* *3⃣ For Tab View*
*╎*
*╰─────────────────┈*

*🔗 Url :* ${q}\n\n\n${botwatermark}`

await conn.sendMessage(from, {text: text},{quoted: mek})
        
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "1",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗦 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔁")
const url = urls[0]
const ssimg = `https://widipe.com/sshp?url=${url}`

await conn.sendMessage(from, {image: {url: ssimg},caption:botwatermark},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "2",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗦 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔁")
const url = urls[0]
const ssimg = `https://widipe.com/sspc?url=${url}`

await conn.sendMessage(from, {image: {url: ssimg},caption:botwatermark},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    reply_pattern: "3",
    quoted_includes: "𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗦 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, urls }) => {
try {

await m.react("🔁")
const url = urls[0]
const ssimg = `https://widipe.com/sstab?url=${url}`

await conn.sendMessage(from, {image: {url: ssimg},caption:botwatermark},{quoted: mek})
await m.react("✅")

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "domain",
    desc: "Get any domain information.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/whois?domain=${q}`
const response = await axios.get(api)
const data = response.data

if(!q) {
  await m.react("❌")
  return reply("*❗️ Give domain to get informations. ❗️*")
} else if (!data.result.domainName) {
  await m.react("❌")
  return reply("*❗️ Give correct domain. ❗️*")
} else {

await m.react("📌")

let text = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗗𝗢𝗠𝗔𝗜𝗡 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🐲 」*

*╭──📌 Domain Info 📌──◦•◦❥•*
*╎*
*╎* *📌 Domain Name :* ${data.result.domainName}
*╎* *👤 Registrar :* ${data.result.registrar}
*╎* *👤 Reseller :* ${data.result.reseller}
*╎* *💳 Registry Domain ID :* ${data.result.registryDomainId}
*╎* *🔗 Registrar Url :* ${data.result.registrarUrl}
*╎* *📆 Creation Date :* ${data.result.creationDate}
*╎* *📆 Updated Date :* ${data.result.updatedDate}
*╎* *📆 Expiration Date :* ${data.result.registrarRegistrationExpirationDate}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from, {text: text},{quoted: mek})

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "ipinfo",
    desc: "Get any IP information.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/ip/whois?ip=${q}`
const response = await axios.get(api)
const data = response.data

if(!q) {
  await m.react("❌")
  return reply("*❗️ Give IP to get informations. ❗️*\n*❗️ Eg: 175.000.000.000 ❗️*")
} else if (!data.result.range) {
  await m.react("❌")
  return reply("*❗️ Give correct IP. ❗️*")
} else {

await m.react("🔖")

let text = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗜𝗣 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡𝗦 🐲 」*

*╭──🔖 IP Address Info 🔖──◦•◦❥•*
*╎*
*╎* *📊 Range :* ${data.result.range}
*╎* *💳 Netname :* ${data.result.netname}
*╎* *🗓️ Desc :* ${data.result.descr}
*╎* *🌍 Country :* ${data.result.country}
*╎* *📌 ORG :* ${data.result.org}
*╎* *⚠️ Status :* ${data.result.status}
*╎* *📎 Notify :* ${data.result.notify}
*╎* *👤 Contact Abuse IRT :* ${data.result.contactAbuse.irt}
*╎* *🗺 Address :* ${data.result.contactAbuse.address}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from, {text: text},{quoted: mek})

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "iplocation",
    desc: "Get any IP location.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/iplocation?ip=${q}`
const response = await axios.get(api)
const data = response.data

if(!q) {
  await m.react("❌")
  return reply("*❗️ Give IP to find location. ❗️*")
} else if (!data.data) {
  await m.react("❌")
  return reply("*❗️ Give correct IP. ❗️*")
} else {

await m.react("🗺")

let text = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗜𝗣 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡 🐲 」*

*╭──🗺 IP Location 🗺──◦•◦❥•*
*╎*
*╎* *🌍 Country :* ${data.data.country}
*╎* *🗺 Address :* ${data.data.address}
*╎* *💳 Netname :* ${data.data.netName}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from, {text: text},{quoted: mek})

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "subdomain",
    desc: "Find sub domains using main domain.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/subdomain?domain=${q}`
const response = await axios.get(api)
const data = response.data
if(!q) {
    await m.react("❌")
    return reply("*❗️ Give domain to find subdomains. ❗️*")
}else if(!data.data[0]) {
    await m.react("❌")
    return reply("*❗️ Can't find subdomains. ❗️*")
}else {
await m.react("🔁")
let sd = `1. ${data.data[0]}`
    if(data.data[1]) sd += `\n*╎* 2. ${data.data[1]}`
    if(data.data[2]) sd += `\n*╎* 3. ${data.data[2]}`
    if(data.data[3]) sd += `\n*╎* 4. ${data.data[3]}`
    if(data.data[4]) sd += `\n*╎* 5. ${data.data[4]}`
    if(data.data[5]) sd += `\n*╎* 6. ${data.data[5]}`
    if(data.data[6]) sd += `\n*╎* 7. ${data.data[6]}`
    if(data.data[7]) sd += `\n*╎* 8. ${data.data[7]}`
    if(data.data[8]) sd += `\n*╎* 9. ${data.data[8]}`
    if(data.data[9]) sd += `\n*╎* 10. ${data.data[9]}`
    if(data.data[10]) sd += `\n*╎* 11. ${data.data[10]}`
    if(data.data[11]) sd += `\n*╎* 12. ${data.data[11]}`
    if(data.data[12]) sd += `\n*╎* 13. ${data.data[12]}`
    if(data.data[13]) sd += `\n*╎* 14. ${data.data[13]}`
    if(data.data[14]) sd += `\n*╎* 15. ${data.data[14]}`
    if(data.data[15]) sd += `\n*╎* 16. ${data.data[15]}`
    if(data.data[16]) sd += `\n*╎* 17. ${data.data[16]}`
    if(data.data[17]) sd += `\n*╎* 18. ${data.data[17]}`
    if(data.data[18]) sd += `\n*╎* 19. ${data.data[18]}`
    if(data.data[19]) sd += `\n*╎* 20. ${data.data[19]}`
    if(data.data[20]) sd += `\n*╎* 21. ${data.data[20]}`
    if(data.data[21]) sd += `\n*╎* 22. ${data.data[21]}`
    if(data.data[22]) sd += `\n*╎* 23. ${data.data[21]}`
    if(data.data[23]) sd += `\n*╎* 24 ${data.data[23]}`
    if(data.data[24]) sd += `\n*╎* 25. ${data.data[24]}`
let text = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗜𝗣 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡 🐲 」*

*╭──📎 Sub Domains 📎──◦•◦❥•*
*╎*
*╎* *📌 Main Domain :*
*╎* ${q}
*╎*
*╎* *📎 Sub Domains :*
*╎* ${sd}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`
await conn.sendMessage(from, {text: text},{quoted: mek})
await m.react("✅")
}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================

cmd({
    pattern: "domainexpire",
    desc: "Find domain expire date.",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {

const api = `https://widipe.com/expireddomain?domain=${q}`
const response = await axios.get(api)
const data = response.data

if(!q) {
  await m.react("❌")
  return reply("*❗️ Give Domain to find expire date. ❗️*")
} else if (!data.data) {
  await m.react("❌")
  return reply("*❗️ Give correct domain. ❗️*")
} else {

await m.react("🗺")

let text = `
*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 domain expire date finder 🐲 」*

*╭──📆 Expire Date 📆──◦•◦❥•*
*╎*
*╎* *📌 Domain :* ${q}
*╎* *📆 Expire Date :* ${data.data.expirationDate}
*╎*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

await conn.sendMessage(from, {text: text},{quoted: mek})

}
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============================================================
