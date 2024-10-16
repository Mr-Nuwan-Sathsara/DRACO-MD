const { readEnv } = require('../lib/database')
const { cmd, commands } = require('../command')
const { botwatermark } = require('../botwatermark')

cmd({
  pattern: "menu",
  alias: ["mainmenu"],
  desc: "Get bot command pannel.",
  category: "other",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        mainmenu: ''
      };

      const categoryCounters = {};

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          const category = commands[i].category;

          // Initialize counter for the category if it doesn't exist
          if (!categoryCounters[category]) {
            categoryCounters[category] = 1;
          } else {
            categoryCounters[category]++;
          }

          menu[category] += `   *${categoryCounters[category]}   ➩   ${commands[i].mtitle}*\n*╎*`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 🐲 」*

*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*
*╎*
*╎*${menu.mainmenu}
*╰────────────────────◦•◦❥•*

*😘 Sᴇɴᴅ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʀᴇʟᴀᴛᴇᴅ ᴛᴏ ᴛʜᴀᴛ ᴍᴇɴᴜ ᴛᴏ ɢᴇᴛ ᴛʜᴇ ᴍᴇɴᴜ ʏᴏᴜ ᴡᴀɴᴛ. 👇*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { audio: { url: `media/menu.mp3` }, mimetype: "audio/mpeg", ptt: true }, { quoted: mek })
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/XbpB6PX/Picsart-24-09-23-18-23-07-685.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "1",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "downloadmenu",
  mtitle: "📥 Dᴏᴡɴʟᴏᴀᴅ Mᴇɴᴜ 📥",
  desc: "Get download command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        download: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 📥 Dᴏᴡɴʟᴏᴀᴅ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎ ${menu.download}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/1T3XN0G/Picsart-24-09-23-18-24-06-401.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "2",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "othermenu",
  mtitle: "🧩 Oᴛʜᴇʀ Mᴇɴᴜ 🧩",
  desc: "Get other command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        other: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 🧩 Oᴛʜᴇʀ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.other}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/HCNTCB6/Picsart-24-09-23-18-21-26-906.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "3",
  pattern: "ownermenu",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  mtitle: "👤 Oᴡɴᴇʀ Mᴇɴᴜ 👤",
  desc: "Get owner command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        owner: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 👤 Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.owner}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/ypyJ36Q/Picsart-24-09-23-18-22-05-357.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "4",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "aimenu",
  mtitle: "🤖 Aɪ Mᴇɴᴜ 🤖",
  desc: "Get ai command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        ai: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗔𝗜 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 🤖 Aɪ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.ai}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/jwJZkPP/Picsart-24-09-23-18-20-45-889.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "5",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "groupmenu",
  mtitle: "🪀 Gʀᴏᴜᴘ Mᴇɴᴜ 🪀",
  desc: "Get group command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        group: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 🪀 Gʀᴏᴜᴘ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.group}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/Lh7y7g2/Picsart-24-09-23-18-21-52-459.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "6",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "searchmenu",
  mtitle: "🔎 Sᴇᴀʀᴄʜ Mᴇɴᴜ 🔎",
  desc: "Get search command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        search: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 🔎 Sᴇᴀʀᴄʜ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.search}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/dKnHcPG/Picsart-24-09-23-18-19-37-799.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "7",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "convertmenu",
  mtitle: "💫 Cᴏɴᴠᴇʀᴛ Mᴇɴᴜ 💫",
  desc: "Get convert command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        convert: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 💫 Cᴏɴᴠᴇʀᴛ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.convert}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/QdNtncC/Picsart-24-09-23-18-20-21-338.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "8",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "funmenu",
  mtitle: "👻 Fᴜɴ Mᴇɴᴜ 👻",
  desc: "Get fun command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        fun: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 👻 Fᴜɴ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.fun}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/31jsJGn/Picsart-24-09-23-18-22-17-646.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "9",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "animemenu",
  mtitle: "🍄 Aɴɪᴍᴇ Mᴇɴᴜ 🍄",
  desc: "Get anime command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        anime: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 🍄 Aɴɪᴍᴇ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.anime}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/xGPzqvB/Picsart-24-10-16-16-24-06-647.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================

cmd({
  reply_pattern: "10",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "bugmenu",
  mtitle: "🎭 Bᴜɢ Mᴇɴᴜ 🎭",
  desc: "Get bug command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        bug: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 🎭 Bᴜɢ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.bug}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/NFrQbNk/Picsart-24-09-23-18-21-15-136.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })

//===================================================


cmd({
  reply_pattern: "11",
  quoted_includes: "*╭────📋 Mᴀɪɴ Mᴇɴᴜ ─────◦•◦❥•*",
  pattern: "nsfwmenu",
  mtitle: "🔞 Nꜱꜰᴡ Mᴇɴᴜ 🔞",
  desc: "Get nsfw command list.",
  category: "mainmenu",
  filename: __filename
},
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      const config = await readEnv();
      let menu = {
        nsfw: ''
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += ` 🏷️ Cᴍᴅ -  ${config.PREFIX}${commands[i].pattern}*\n*╎* *🔖 Dᴇꜱᴄ-  ${commands[i].desc}*\n*╎*\n*╎`;
        }
      }

      let madeMenu = `*「 🐲 𝗗𝗥𝗔𝗖𝗢-𝗠𝗗 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🐲 」*

*╭─ 🔞 Nꜱꜰᴡ Cᴏᴍᴍᴀɴᴅꜱ ── ◦•◦❥•*
*╎*
*╎${menu.nsfw}*
*╰────────────────────◦•◦❥•*\n\n\n${botwatermark}`

      await m.react("📋")
      await conn.sendMessage(from, { image: { url: `https://i.ibb.co/ykfVM5H/Picsart-24-09-23-18-22-33-240.jpg` }, caption: madeMenu }, { quoted: mek })

    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  })
