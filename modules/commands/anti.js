const chalk = require('chalk');
module.exports.config = {
  name: "anti",
  version: "0.0.1",
  hasPermssion: 1,
  credits: "Tpk",
  description: "Các loại anti",
  commandCategory: "Hệ thống quản trị viên",
  usages: "anti + reply",
  cooldowns: 0
};

const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
function handleByte(byte) {
	const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	let i = 0, usage = parseInt(byte, 10) || 0;

	while(usage >= 1024 && ++i){
		usage = usage/1024;
	}
  
	return(usage.toFixed(usage < 10 && i > 0 ? 1 : 0) + ' ' + units[i]);
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function({ api, args, event, Users, handleReply }) {
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const picture = (await axios.get(`https://i.imgur.com/AgwAC3E.gif`, { responseType: "stream"})).data
  const { threadID, messageID, senderID } = event;
   return api.sendMessage({body: "===== 「 𝗔𝗡𝗧𝗜 𝗙𝗨𝗟𝗟 」=====\n━━━━━━━━━━━━━━━━━━\n\n[ 𝟭 ] ➜ On/off thông báo lên rank của bot\n[ 𝟮 ] ➜ On/off adminboxonly tính năng chỉ admin bot dùng được\n[ 𝟯 ] ➜ On/off chế độ antijoin tính năng cấm thành viên/người dùng vào nhóm\n[ 𝟰 ] ➜ On/off chế độ chống cướp box chế độ này bot sẽ gỡ all qtv/key tránh bị cướp box\n[ 𝟱 ] ➜ On/off chế độ antiout tính năng này lúc thành viên out bot sẽ tag lại tránh hành vi out chùa\n[ 𝟲 ] ➜ On/off thông báo khi thành viên vào nhóm joinNoti\n[ 𝟳 ] ➜ On/off thông báo khi người dùng out nhóm leaveNoti\n[ 𝟴 ] ➜ Danh sách ADMINBOT\n[ 𝟵 ] ➜ Danh sách Support BOT\n[ 𝟭𝟬 ] ➜ Danh sách Quản Trị Viên\n[ 𝟭𝟭 ] ➜ Thông tin box hiện tại\n━━━━━━━━━━━━━━━━━━\n➜ 𝗤𝘂𝗮̉𝗻 𝗧𝗿𝗶̣ 𝗩𝗶𝗲̂𝗻 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻 🦄", attachment: (await axios.get((await axios.get(`https://quoc-vong-1.hehehehe001.repl.co/api/gai.php`)).data.data, {
                    responseType: 'stream'
                })).data
}, threadID, (error, info) => {
            global.client.handleReply.push({
               name: this.config.name,
                    messageID: info.messageID,
                    ú: event.senderID,
                    type: "choosee",
            })
        }, event.messageID)
}

module.exports.handleReply = async function({ args, event, Users,Threads, api, permssion, handleReply }) {
  const { threadID, messageID, senderID } = event;
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {  
        case "2": {
if (permssion < 1) return api.sendMessage("[⚜️]➜ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID);
        const { writeFileSync } = global.nodemodule["fs-extra"];
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'bot', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;  
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("➜ 𝐓𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐨𝐧𝐥𝐲 𝐜𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀", threadID, messageID);
        } else {
            api.sendMessage("➜ 𝐁𝐚̣̂𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐦𝐨𝐝𝐞 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐨𝐧𝐥𝐲 𝐜𝐡𝐢̉ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 🎀", threadID, messageID);
            adminbox[threadID] = true;
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
    }break;
          case "1": {
            if (permssion < 1) return api.sendMessage("➜ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            const { threadID, messageID } = event;
	let data = (await Threads.getData(threadID)).data;
	
	if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
	else data["rankup"] = false;
	await Threads.setData(threadID, { data });
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`➜ Đã ${(data["rankup"] == true) ? "bật" : "tắt"} thành công thông báo rankup ✔️`, event.threadID);
          }break;
        case "3": {
          if (permssion < 1) return api.sendMessage("➜ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('➜ 𝐁𝐨𝐭 𝐜𝐚̂̀𝐧 𝐪𝐮𝐲𝐞̂̀𝐧 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦 💕', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`➜ Kích hoạt ${(data.newMember == true) ? "bật" : "tắt"} thành công chống người dùng vào nhóm ✔️`, event.threadID, event.messageID);
}break;
        case "4": {
          if (permssion < 1) return api.sendMessage("➜ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('➜ Bot cần Quản Trị Viên nhóm để thực hiện lệnh!!', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`➜ Kích hoạt ${(data["guard"] == true) ? "bật" : "tắt"} thành công chế độ chống cướp box ✔️`, event.threadID, event.messageID);
}break;
        case "5": {
          if (permssion < 1) return api.sendMessage("➜ lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
           var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
 else data["antiout"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`➜ Kích hoạt ${(data["antiout"] == true) ? "bật" : "tắt"} thành công chế độ chống out chùa ✔️`, event.threadID);

}break;
          case "6": {
            if (permssion < 1) return api.sendMessage("➜ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["join"] == "undefined" || data["join"] == false) data["join"] = true;
 else data["join"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`➜ Kích hoạt ${(data["join"] == true) ? "bật" : "tắt"} thông báo JoinNoti!!`, event.threadID);

}break;            
          case "7": {
            if (permssion < 1) return api.sendMessage("➜ Xin lỗi! lệnh này chỉ quản trị viên mới dùng được", threadID, messageID);
            var info = await api.getThreadInfo(event.threadID);
let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["leave"] == "undefined" || data["leave"] == false) data["leave"] = true;
 else data["leave"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`➜ Kích hoạt ${(data["leave"] == true) ? "bật" : "tắt"} thành công thông báo người rời nhóm`, event.threadID);

}break;                    
        case "8": {
  const { ADMINBOT } = global.config;
   listAdmin = ADMINBOT || config.ADMINBOT ||  [];
    var msg = [];
    for (const idAdmin of listAdmin) {
        if (parseInt(idAdmin)) {
          const name = (await Users.getData(idAdmin)).name
            msg.push(`➜ ${name}\n➜ Link: fb.me/${idAdmin} `);              
        }
    }
   return api.sendMessage(`[⚜️]=== 『 ADMINBOT LIST 』 ===[⚜️]\n━━━━━━━━━━━━━━━━\n\n${msg.join("\n\n")}\n`, event.threadID, event.messageID);
}break;
          case "9": {
  const { NDH } = global.config;
   listNDH = NDH || config.NDH ||  [];
    var msg = [];
    for (const idNDH of listNDH) {
        if (parseInt(idNDH)) {
          const name = (await Users.getData(idNDH)).name
            msg.push(`➜ ${name}\n➜ Link: fb.com/${idNDH}`);              
        }
    }
   return api.sendMessage(`[⚜️]=== 『 NDHBOT LIST 』 ===[⚜️]\n━━━━━━━━━━━━━━━━\n\n${msg.join("\n\n")}\n`, event.threadID, event.messageID);
}break;
        case "10": {
    var threadInfo = await api.getThreadInfo(event.threadID);
    let qtv = threadInfo.adminIDs.length;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const info = (await api.getUserInfo(qtv2[i].id));
        const name = info[qtv2[i].id].name;
        listad += '' + `${dem++}` + '. ' + name + '\n';
    }

    api.sendMessage(
        `[📜]➜ 𝐃𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 ${qtv} 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐠𝐨̂̀𝐦:\n${listad}`,event.threadID,event.messageID)

}break;
   case "11": {
 const fullTime = global.client.getTime("fullTime");
 const moment = require("moment-timezone");
 const request = require("request")
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();
    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
    let icon = threadInfo.emoji;
    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let color = threadInfo.color;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'Kh';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "Chưa có thông tin ";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "Chưa có thông tin";
    let hqua = (ytd != 0) ? ytd : "Chưa có thông tin";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }
var listqtv = '';
var adminIDs = threadInfo.adminIDs;
for (let get of adminIDs) {
const infoUsers = await Users.getInfo(get.id);
    listqtv += `\n ${infoUsers.name}\n`
    }
    api.unsendMessage(handleReply.messageID);
    var callback = () =>
      api.sendMessage({
        body: `[⚜️]=== 『 INFORMATION BOX 』 ===[⚜️]\n━━━━━━━━━━━━━━━━\n\n➜ Tên nhóm :${threadName}\n➜ ID: ${id}\n➜ Phê duyệt: ${pd}\n➜ Biểu tượng: ${icon}\n➜ Mã dao diện: ${color}\n➜ Tổng thành viên:  ${threadMem}\n➜ Nam: ${nam}\n➜ Nữ : ${nu}\n➜ Quản trị viên: ${qtv}\n➜ Danh sách Quản Trị Viên: ${listqtv}\n────────────\n➜ Tổng tin nhắn: ${sl}\n➜ Mức độ tương tác: ${mdtt}\n➜ Tổng số tin nhắn hôm qua: ${hqua}\n➜ Hôm nay đã nhắn được: ${hnay}\n➜ Ngày tạo dữ liệu: ${fullTime}\n   ===== 「${timeNow}」 =====`,
        attachment: fs.createReadStream(__dirname + '/cache/box.png')
      },
        threadID,
        () => fs.unlinkSync(__dirname + '/cache/box.png')
      );
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/box.png'))
      .on('close', () => callback());
  }break;

            
}}}}
        
