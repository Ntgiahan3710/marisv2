const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "Hệ thống support-bot",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
  try {
	const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "ADMIN",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};
module.exports. run = async ({ api, event, args }) => {
   const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const permission = ["100042972203184",""];
  if (!permission.includes(event.senderID)) return api.sendMessage("𝐒𝐮́𝐜 𝐯𝐚̣̂𝐭 𝐦𝐚̀ 𝐜𝐮̃𝐧𝐠 đ𝐨̀𝐢 𝐝𝐮̀𝐧𝐠", event.threadID, event.messageID);
  const hieusimprin = process.uptime();
  var hieu = Math.floor(hieusimprin / (60 * 60));
  var simp = Math.floor((hieusimprin % (60 * 60)) / 60);
  var rin = Math.floor(hieusimprin % 60);
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  return api.sendMessage({body:`=====『 𝐀𝐔𝐓𝐎𝐒𝐄𝐄𝐍 』=====\n◆━━━━━━━━━━━━━◆\nĐ𝐚̃ 𝐛𝐚̣̂𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐭𝐮̛̣ đ𝐨̣̂𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜𝐨́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐦𝐨̛́𝐢\n𝐁𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hieu} 𝐆𝐢𝐨̛̀ ${simp} 𝐏𝐡𝐮́𝐭 ${rin} 𝐆𝐢𝐚̂𝐲\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://toan-nguyen.toan2005aye.repl.co/images/anime')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  return api.sendMessage({body:`=====『 𝐀𝐔𝐓𝐎𝐒𝐄𝐄𝐍 』=====\n◆━━━━━━━━━━━━━◆\nĐã 𝐭ắ𝐭 𝐜𝐡ế độ 𝐭ự độ𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜ó 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐦ớ𝐢\n𝐁𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hieu} 𝐆𝐢𝐨̛̀ ${simp} 𝐏𝐡𝐮́𝐭 ${rin} 𝐆𝐢𝐚̂𝐲\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://toan-nguyen.toan2005aye.repl.co/images/anime')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
	}
	else {
	  return api.sendMessage({body:`=====『 𝐇𝐃𝐒𝐃 』=====\n◆━━━━━━━━━━━━━◆\n𝐁ạ𝐧 𝐜ó 𝐭𝐡ể 𝐝ù𝐧𝐠 𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧 𝐨𝐧 𝐡𝐨ặ𝐜 𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧 𝐨𝐟𝐟\n𝐀𝐧𝐡 𝐡𝐮̛𝐨̛́𝐧𝐠 𝐝𝐚̂̃𝐧 𝐭𝐡𝐞̂́ 𝐦𝐚̀ 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢𝐞̂́𝐭 𝐝𝐮̀𝐧𝐠 𝐭𝐡𝐢̀ 𝐜𝐡𝐞̂́𝐭 𝐦𝐞̣ đ𝐢 😏\n𝐁𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hieu} 𝐆𝐢𝐨̛̀ ${simp} 𝐏𝐡𝐮́𝐭 ${rin} 𝐆𝐢𝐚̂𝐲\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-images.duytrollgame.repl.co/rin.php')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};
  }
  catch(e) {
    console.log(e);
  }
};