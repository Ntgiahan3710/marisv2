module.exports.config = {
	name: "casino",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "Tổng Hợp Về Cờ Bạc",
	commandCategory: "Trò Chơi",
	usages: "casino",
	cooldowns: 0
};	
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   
   const request = require('request');
   const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream, fs } = require("fs-extra");
  const { threadID, messageID, senderID } = event;
  const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
  const choose = args[0];
  const kqua = args[1];
  const tiencuoc = args[2];
  if (!existsSync(__dirname + '/cache/casio.jpg')) {
        request('https://i.imgur.com/1Y9eup1.jpg').pipe(createWriteStream(__dirname + '/cache/casio.jpg'));
      }
  if(!choose){
    var msg =  {body: `🃏─── 𝐂𝐀𝐒𝐈𝐍𝐎 ───🃏\n\n❯  𝟏. 𝐓𝐫𝐨̀ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 🎲\n❯  𝟐. 𝐓𝐫𝐨̀ 𝐂𝐡𝐚̆̃𝐧 𝐋𝐞̉ 🎴\n❯  𝟑. 𝐓𝐫𝐨̀ 𝐋𝐨̂ Đ𝐞̂̀ 💸\n❯  𝟒. 𝐓𝐫𝐨̀ 𝐇𝐢𝐞̣̂𝐮 𝐒𝐨̂́ 🎫\n❯  𝟓. 𝐓𝐫𝐨̀ 𝐒𝐥𝐨𝐭 🎰\n❯  𝟲. 𝗧𝗿𝗼̀ 𝗞𝗲́𝗼 𝗕𝘂́𝗮 𝗕𝗮𝗼 ✌️\n\n𝐑𝐞𝐩𝐥𝐲 𝐒𝐓𝐓 𝐱𝐞𝐦 𝐡𝐮̛𝐨̛́𝐧𝐠 𝐝𝐚̂̃𝐧 𝐜𝐚́𝐜𝐡 𝐜𝐡𝐨̛𝐢 𝐭𝐮̛̀𝐧𝐠 𝐭𝐫𝐨̀ 𝐜𝐡𝐨̛𝐢 𝐧𝐡𝐞́ 🌸\n🃏─── 𝐂𝐀𝐒𝐈𝐍𝐎 ───🃏`, attachment : [
      require("fs").createReadStream(__dirname + "/cache/casio.jpg")
    ]}
   return api.sendMessage(msg,  threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: senderID,
                messageID: info.messageID
            })
        })
  }
  const z = Math.floor(Math.random() * 20);
      const y = Math.floor(Math.random() * 20);
      const dap_an = y - z;
  const x = Math.floor(Math.random() * 100);
  const typ2 = ['chẵn', 'lẻ'];
  const random2 = typ2[Math.floor(Math.random() * typ2.length)];
   var chan = [ 0, 2, 4, 6, 8];
    var le =[1, 3, 5, 7, 9];
    if (random2 == 'chẵn') {
    var defl_number2 = chan[Math.floor(Math.random() * chan.length)];
  }
  if (random2 == 'lẻ') {
    var defl_number2 = le[Math.floor(Math.random() * le.length)];
  }
  const typ = ['tài', 'xỉu'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
   var tai = [4,5,6,7,8,9,10];
    var xiu =[11,12,13,14,15,16,17];
    if (random == 'tài') {
    var defl_number = tai[Math.floor(Math.random() * tai.length)];
  }
  if (random == 'xỉu') {
    var defl_number = xiu[Math.floor(Math.random() * xiu.length)];
  }
  if (choose == 'tài' || choose == 'xỉu') { 
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Số dư bạn không đủ ${kqua}$ để có thể chơi`, threadID, messageID);
if (choose == random) {
  	await Currencies.increaseMoney(senderID, parseInt(kqua * 2));
  return api.sendMessage(`bạn thắng bot lắc ra ${random} ${defl_number} và nhận được ${kqua * 2}`,event.threadID, event.messageID)
} else {
  await Currencies.decreaseMoney(senderID, parseInt(kqua ));
      return api.sendMessage(`bạn thua bot lắc ra ${random} ${defl_number} và mất ${kqua}`,event.threadID, event.messageID)}
 }
 if (choose == 'lẻ' || choose == 'chẵn') {
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Số dư bạn không đủ ${kqua}$ để có thể chơi`, threadID, messageID);
   if (choose == random2) {
      await Currencies.increaseMoney(senderID, parseInt(kqua * 2 ));
  return api.sendMessage(`bạn thắng bot lắc ra ${random2} ${defl_number2} và nhận được ${kqua * 2}`,event.threadID, event.messageID)
} else {
   await Currencies.decreaseMoney(senderID, parseInt(kqua ));
  return api.sendMessage(`bạn thua bot lắc ra ${random2} ${defl_number2} và mất trắng số tiền ${kqua}`,event.threadID, event.messageID)}
  }
  if (choose == 'lode' || choose == 'lô' || choose == 'đề') { 
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Số dư bạn không đủ ${kqua}$ để có thể chơi`, threadID, messageID);
    api.sendMessage(`vui lòng đợi kết quả lô đề sau ít phút hehe`, event.threadID, async (err, info) => {
      await new Promise(resolve => setTimeout(resolve, 120 * 1000));
      api.unsendMessage(info.messageID)
 if(kqua == x){
    await Currencies.inreaseMoney(senderID, parseInt(kqua * 2));
   return api.sendMessage(`bạn đã thắng vì chọn ${args[1]} và kết quả lô hôm nay trên đài của bot là ${x} thần may mắn đã độ bạn và nhận được số tiền là ${kqua * 2} ehehe`, threadID, messageID)
 } else {
    await Currencies.decreaseMoney(senderID, parseInt(kqua ));
return api.sendMessage(`bạn đã thua vì chọn ${args[1]} và kết quả lô hôm nay trên đài của bot là ${x} hjx thần may mắn quên bạn rồi và mất số tiền là ${kqua}`, threadID, messageID)
 }
    }
    )}
    if (choose == 'hieu' || choose == 'Hieu' || choose == 'Hiệu') { 
      if(isNaN(kqua)){return api.sendMessage('nqu', threadID, messageID)}
   if(kqua == dap_an){  
      await Currencies.increaseMoney(senderID, parseInt(tiencuoc * 2));
  return api.sendMessage(`bạn thắng bạn chọn là: ${kqua}\nsố thứ nhất bot chọn là: ${z}\nsố thứ nhất bot chọn là: ${y}\nhiệu số là ${dap_an} và bạn nhận được số tiền là ${tiencuoc * 2}`,threadID, messageID)} else {
     await Currencies.decreaseMoney(senderID, parseInt(tiencuoc  ));
  return api.sendMessage(`bạn thua bạn chọn là: ${kqua}\nsố thứ nhất bot chọn là: ${z}\nsố thứ nhất bot chọn là: ${y}\nhiệu số là ${dap_an} và mất số tiền là ${tiencuoc}`,threadID, messageID)
  }
    }
if (args[0] == "rps" || args[0] == "kbb") { 
  function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
          
    if(!args[1]) {
        outMsg("Vui lòng nhập 'kéo' hoặc 'búa' hoặc 'bao'")
    }
    else{
    var turnbot = ["✌️","👊","✋"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          const userturn = args[1];
                   
          if (userturn == "kéo"||userturn == "búa"||userturn == "bao") {
            if (userturn == turnbot) {
              return outMsg(`Hòa\nUser : ${userturn}\nBot : ${botturn}\nHòa, số dư không thay đổi`)
            } else if (userturn == "kéo") {
              if (botturn == "👊") {
                
                return outMsg(`BẠN ĐÃ THUA\n\nUser : ${userturn}\nBot : ${botturn}\n`)
                
              } else if (botturn == "✋") {
                
                return outMsg(`BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nBot : ${botturn}\n`)
                
            }
          } else if (userturn == "búa") {
            if (botturn == "✋") {
              
              return outMsg(`BẠN ĐÃ THUA\n\nUser : ${userturn}\nBot : ${botturn}\n`)
              
            } else if (botturn == "✌️") {
              
              return outMsg(`BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nBot : ${botturn}\n`)
              
          }
        } else if (userturn == "bao") {
          if (botturn == "✌️") {
            
            return outMsg(`BẠN ĐÃ THUA\n\nUser : ${userturn}\nBot : ${botturn}\n`)
            
          } else if (botturn == "👊") {
           
            return outMsg(`BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nBot : ${botturn}\n`)
            
   }
  }
}
  } 
}
 if (choose == 'slot') { 
   const slotItems = ["🍇", "🍉", "🍊", "🍏", "🥭", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽"];
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(`╭──────────╮\nㅤ🎰 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} 🎰\n« 🎰\n╰──────────╯\n𝐗𝐢𝐧 𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐭𝐡𝐚̆́𝐧𝐠 𝐫𝐨̂̀𝐢`, event.threadID, event.messageID);
           
            break;
        }
        case false: {
            api.sendMessage(`╭──────────╮\nㅤ🎰 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} « 🎰\n╰──────────╯\n𝐁𝐚̣𝐧 𝐭𝐡𝐮𝐚 𝐫𝐨̂̀𝐢 𝐱𝐢𝐧 𝐜𝐡𝐢𝐚 𝐛𝐮𝐨̂̀𝐧`, event.threadID, event.messageID);
           
            break;
        }
    }
 }

}


 module.exports.handleReply = async function ({
    args, event, Users, api, handleReply, Currencies
}) {
  const { threadID, messageID } = event;
    var { author } = handleReply;
    if (event.senderID != author) return api.sendMessage("cút mẹ mày đi", event.threadID, event.messageID); 
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": { 
          return api.sendMessage(`𝐁𝐚̣𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐜𝐚𝐬𝐢𝐧𝐨 [ 𝐓𝐀̀𝐈 𝐡𝐨𝐚̣̆𝐜 𝐗𝐈̉𝐔 ]`, threadID, messageID )
        }
        case "2": { 
          return api.sendMessage(`𝐁𝐚̣𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐜𝐚𝐬𝐢𝐧𝐨 [ 𝐂𝐡𝐚̆̃𝐧 𝐡𝐨𝐚̣̆𝐜 𝐋𝐞̉ ]`, threadID, messageID )
        }
        case "3": { 
          return api.sendMessage(`𝐁𝐚̣𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐜𝐚𝐬𝐢𝐧𝐨 [ Lode Or Lô Or Đề ] [ Số Mà Bạn Tin Tưởng ]`, threadID, messageID )
        }
        case "4": {
          return api.sendMessage(`𝐁𝐚̣𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐜𝐚𝐬𝐢𝐧𝐨 [ 𝐡𝐢𝐞𝐮 𝐎𝐫 𝐇𝐢𝐞̣̂𝐮 𝐎𝐫 𝐇𝐢𝐞𝐮 ] [ 𝐒𝐨̂́ 𝐌𝐚̀ 𝐁𝐚̣𝐧 𝐓𝐢𝐧 𝐓𝐮̛𝐨̛̉𝐧𝐠 ]`, event.threadID, event.messageID )
        }
        case "5": {
          return api.sendMessage(`𝐁𝐚̣𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐜𝐚𝐬𝐢𝐧𝐨 [ 𝐒𝐥𝐨𝐭 ]`, event.threadID, event.messageID )
        }
         case "6": {
          return api.sendMessage(`𝐁𝐚̣𝐧 𝐡𝐚̃𝐲 𝐧𝐡𝐚̣̂𝐩 𝐥𝐞̣̂𝐧𝐡 ${global.config.PREFIX}𝐜𝐚𝐬𝐢𝐧𝐨 𝐤𝐛𝐛 ["kéo", "búa", "bao"]`, event.threadID, event.messageID )}
}
    }
    }
}