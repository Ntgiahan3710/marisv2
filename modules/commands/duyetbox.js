module.exports.config = {
  name: "duyetbox",
  version: "1.0.2",
  hasPermssion: 3,
  credits: "DungUwU",
  description: "Duyệt người dùng hoặc nhóm sử dụng Bot",
  commandCategory: "Hệ Thống",
  cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
}

module.exports.run = async ({ event, api, args }) => {
  const { threadID, messageID, senderID } = event;
 
  let data = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(pendingPath));
  
  
  let msg = "";
  let idBox = (args[0]) ? args[0] : threadID;
  if (args[0] == "list") {
    msg = "[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Danh sách các nhóm đã duyệt";
    let count = 0;
    for (e of data) {
       let name = (await api.getThreadInfo(e)).name || "Nhóm Chat";
      msg += `\n[⚜️]→ ${count += 1}. ${name}\n[⚜️]→ ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (args[0] == "del") {
   let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
    idBox = (args[1]) ? args[1] : event.threadID;
    if (isNaN(parseInt(idBox))) return api.sendMessage("[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Không phải một con số", threadID, messageID);
    if (!data.includes(idBox)) return api.sendMessage("[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Nhóm không được duyệt từ trước", threadID, messageID);
    api.sendMessage(`[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Nhóm ${threadName}\n[⚜️]→ ID: ${idBox} đã bị gỡ khỏi danh sách được phép sử dụng Bot`, threadID, () => {
      if (!pending.includes(idBox)) pending.push(idBox);
      data.splice(data.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
    }, messageID)
  }
  else if (args[0] == "pending") {
   
    msg = "[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Danh sách nhóm đang chờ phê duyệt";
    let count = 0;
    for (e of pending) {
      let name = (await api.getThreadInfo(e)).name || "[⚜️] Nhóm Chat [⚜️]";
      msg += `\n[⚜️]→ ${count += 1}. ${name}\n[⚜️] → ID: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  
  else if (isNaN(parseInt(idBox))) api.sendMessage("[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ ID bạn nhập không hợp lệ", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(`[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ ID ${idBox} đã được phê duyệt từ trước`, threadID, messageID);
  else api.sendMessage("[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Nhóm đã được Admin duyệt để sử dụng", idBox, (error, info) => {
    if (error) return api.sendMessage("[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Đã có lỗi xảy ra, đảm bảo rằng ID bạn nhập hợp lệ và Bot đang ở trong nhóm", threadID, messageID);
    else {
      data.push(idBox);
      pending.splice(pending.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      api.sendMessage(`[⚜️] 𝙕𝙞̣𝙩𝘾𝙪𝙩𝙚🐣 [⚜️]\n[⚜️]→ Phê duyệt thành công nhóm: ${idBox}`, threadID, messageID);
    }
  });
}