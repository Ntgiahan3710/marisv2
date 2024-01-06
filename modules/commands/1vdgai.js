module.exports.config = {
  name: "vdgai",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "Toàn",
  description: "sos", 
  commandCategory: "Không cần dấu lệnh",
  usages: "¹",
  cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};

function random(arr) {
var rd = arr[Math.floor(Math.random() * arr.length)];
    return rd;
        };
module.exports.handleEvent = async function ({ api, event, Threads }) {
  const tim = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const request = require('request');
  const picture = (await axios.get(`https://imgur.com/m4ruygS.jpg`, { responseType: "stream"})).data
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "Gái") {
       api.sendMessage({body: `=====『 𝐕𝐢𝐝𝐞𝐨 𝐆𝐚́𝐢 』=====\n━━━━━━━━━━━━━━━━\n[⏰]➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: ${tim} || ${thu}  `, attachment: (await axios.get((await axios.get(`http://api-vua-trang.tranng123123.repl.co/images/videogaixinh`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
  }
      if (body.toLowerCase() == "Gái") {
       api.sendMessage({body: `====『 𝐕𝐢𝐝𝐞𝐨 𝐆𝐚́𝐢 』====\n━━━━━━━━━━━━━━━━\n[⏰]➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: ${tim} || ${thu}`, attachment: (await axios.get((await axios.get(`http://api-vua-trang.tranng123123.repl.co/images/videogaixinh`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
      }
if (body.toLowerCase() == "Gái") {
       api.sendMessage({body: `=====『 𝐕𝐢𝐝𝐞𝐨 𝐆𝐚́𝐢 』=====\n━━━━━━━━━━━━━━━━\n[⏰]➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: ${tim} || ${thu}  `, attachment: (await axios.get((await axios.get(`http://api-vua-trang.tranng123123.repl.co/images/videogaixinh`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
}
if (body.toLowerCase() == "Gái") {
       api.sendMessage({body: `=====『 𝐕𝐢𝐝𝐞𝐨 𝐆𝐚́𝐢 』=====\n━━━━━━━━━━━━━━━━\n[⏰]➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: ${tim} || ${thu}  `, attachment: (await axios.get((await axios.get(`http://api-vua-trang.tranng123123.repl.co/images/videogaixinh`)).data.url, {
                    responseType: 'stream'
                })).data}, event.threadID, event.messageID);	
}
 }
//ko api thì attachment: (picture)}, event.threadID, event.messageID);
module.exports.handleReaction = async function({ api, event, Threads, handleReaction, getText }) {
	try {
		if (event.userID != handleReaction.author) return;
		const { threadID, messageID } = event;
		var data = (await Threads.getData(String(threadID))).data || {};
		data["PREFIX"] = handleReaction.PREFIX;
		await Threads.setData(threadID, { data });
		await global.data.threadData.set(String(threadID), data);
		api.unsendMessage(handleReaction.messageID);
		return api.sendMessage(`đã đổi prefix của nhóm thành: ${handleReaction.PREFIX}`, threadID, messageID);
	} catch (e) { return console.log(e) }
}

module.exports.run = async ({ api, event, args, Threads }) => {
	if (typeof args[0] == "undefined") return api.sendMessage("bạn phải nhập prefix cần thay đổi", event.threadID, event.messageID);
	let prefix = args[0].trim();
	if (!prefix) return api.sendMessage("bạn phải nhập prefix cần thay đổi", event.threadID, event.messageID);
	if (prefix == "reset") {
		var data = (await Threads.getData(event.threadID)).data || {};
		data["PREFIX"] = global.config.PREFIX;
		await Threads.setData(event.threadID, { data });
		await global.data.threadData.set(String(event.threadID), data);
		return api.sendMessage(`đã reset prefix thành: ${global.config.PREFIX}`, event.threadID, event.messageID);
	} else return api.sendMessage(`bạn có chắc muốn đổi prefix của nhóm thành: ${prefix}\n👉 thả cảm xúc vào tin nhắn này để xác nhận`, event.threadID, (error, info) => {
		global.client.handleReaction.push({
			name: this.config.name,
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
                          }