module.exports.config = {
  name: "joinNoti",
  eventType: ['log:subscribe'],
  version: "1.0.0",
  credits: "Mirai-Team",// Mod by Q.Huy (táo)
  description: "GROUP UPDATE NOTIFICATION"
};
/*module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}*/
const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
const { join } = require('path');
const axios = require('axios');
const jimp = require("jimp")
const fontlink = 'https://drive.google.com/u/0/uc?id=1ZwFqYB-x6S9MjPfYm3t3SP1joohGl4iw&export=download'
module.exports.circle = async (image) => {
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function({ api, event, Users }) {
  /*const { join } = global.nodemodule["path"];
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;*/
  var fullYear = global.client.getTime("fullYear");
  var getHours = await global.client.getTime("hours");
  var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "𝑠𝑎́𝑛𝑔" : getHours < 12 ? "𝑡𝑟𝑢̛𝑎" : getHours < 17 ? "𝑐ℎ𝑖𝑒̂̀𝑢" : getHours < 23 ? "𝑡𝑜̂́𝑖" : "𝐭𝐨̂́𝐢 𝐦𝐮𝐨̣̂𝐧"}`
  const moment = require("moment-timezone");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
  if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
  if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
  if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
  if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
  if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
  if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'
  const ngay = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  const { commands } = global.client;
  const { threadID } = event;
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`『 ${global.config.PREFIX} 』 ⪼ ${(!global.config.BOTNAME) ? "𝐁𝐎𝐓" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage("", event.threadID, () => api.sendMessage({body:`▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[🐧] → 𝗛𝗶 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝗕𝗼𝘁 𝗖𝘂̉𝗮 𝗧𝘂𝗮̂́𝗻\n[🎀] → 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗞𝗵𝗼̂𝗻𝗴 𝗦𝗽𝗮𝗺\n[🎊] → 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 ${global.config.PREFIX}𝗵𝗲𝗹𝗽 , ${global.config.PREFIX}𝗺𝗲𝗻𝘂 Đ𝗲̂̉ 𝗫𝗲𝗺 𝗖𝗵𝗶 𝗧𝗶𝗲̂́𝘁 𝗟𝗲̣̂𝗻𝗵 𝗖𝗼́ 𝗧𝗿𝗼𝗻𝗴 𝗕𝗼𝘁\n『 🌸 』 → 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 ${global.config.PREFIX}𝐫𝐞𝐪𝐮𝐞𝐬𝐭 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗔𝗱𝗺𝗶𝗻 𝗗𝘂𝘆𝗲̣̂𝘁\n[💓] → 𝗖𝗵𝘂́𝗰 𝗖𝗮́𝗰 𝗕𝗮̣𝗻 𝗦𝗮̀𝗶 𝗕𝗼𝘁 𝗩𝘂𝗶 𝗩𝗲̉\n━━━━━━━━━━━━━━━━━━\n[🌐 → 𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗠𝘂̛𝗼̛̣𝗻 𝗕𝗼𝘁 𝗖𝗵𝗼 𝗖𝗮́𝗰 𝗕𝗼𝘅 𝗞𝗵𝗮́𝗰 𝗧𝗵𝗶̀ 𝗔𝗱𝗱 𝗔𝗰𝗰 𝗕𝗼𝘁 𝗥𝗼̂̀𝗶 𝗧𝘂̛̣ 𝗧𝗮𝗴 𝗻𝗵𝗲́\n[🍓]→ 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁:https://www.facebook.com/TuanKaiDu1m2?mibextid=LQQJ4d\n━━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 ntuan 💓\n${gio} - ${ngay} || ${thu} `, attachment: fs.createReadStream(__dirname + "/cache/tbvnm/hiii.gif")}, threadID));
  }
  else {
    try {
      if (!fs.existsSync(__dirname + `/cache/Semi.ttf`)) {
        let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/Semi.ttf`, Buffer.from(getfont, "utf-8"));
      };
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for (o = 0; o < event.logMessageData.addedParticipants.length; o++) {
        let pathImg = __dirname + `/cache/${o}.png`;
        let pathAva = __dirname + `/cache/fbcover2.png`;
        let avtAnime = (await axios.get(encodeURI(
          `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {
          headers: {
            cookie: 'xs=13%3AlajUELLXiJWSGA%3A2%3A1670218018%3A-1%3A6326;c_user=100026039134645;fr=04yhWc9aZ2jCK6WYB.AWX6H8d2OYiFMQa_tmHEcMP9bNY.BjjYEe.-o.AAA.0.0.BjjYEi.AWW2404AO5I;sb=HoGNYx-MLHOu0FOMeC8kqttW;datr=HoGNY-xBBNLJjRghcnhN1hWA;'
          }
        }), { responseType: "arraybuffer" })).data;
        var ok = [
          'https://i.imgur.com/dDSh0wc.jpeg',
          'https://i.imgur.com/UucSRWJ.jpeg',
          'https://i.imgur.com/OYzHKNE.jpeg',
          'https://i.imgur.com/V5L9dPi.jpeg',
          'https://i.imgur.com/M7HEAMA.jpeg'
        ]
        let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
        fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
        fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
        var avatar = await this.circle(pathAva);
        let baseImage = await loadImage(pathImg);
        let baseAva = await loadImage(avatar);
        registerFont(__dirname + `/cache/Semi.ttf`, {
          family: "Semi"
        });
        let canvas = createCanvas(1902, 1082);
        console.log(canvas.width, canvas.height)
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
        ctx.fillStyle = "#FFF";
        ctx.textAlign = "center";
        ctx.font = `155px Semi`;
        ctx.fillText(`${event.logMessageData.addedParticipants[o].fullName}`, canvas.width / 2 + 20, canvas.height / 2 + 100);
        ctx.save();
        ctx.font = `75px Semi`;
        ctx.fillText(`Chào mừng ${threadName}`, canvas.width / 2 - 15, canvas.height / 2 + 235)
        ctx.fillText(`Thành viên thứ ${participantIDs.length - o}`, canvas.width / 2 - 15, canvas.height / 2 + 350)
        ctx.restore();
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(pathImg, imageBuffer);
        abx.push(fs.createReadStream(__dirname + `/cache/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "[🍓]=== 『 𝐉𝐎𝐈𝐍 𝐍𝐎𝐓𝐈 』===[🍓]\n━━━━━━━━━━━━━━━━━━━━━\n[🍓]→ 𝐻𝑖 𝑏𝑎̣𝑛 {name}\n『 🌸 』 → 𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 𝑏𝑎̣𝑛 đ𝑎̃ đ𝑒̂́𝑛 𝑣𝑜̛́𝑖 {threadName}\n[🌐]→ 𝑈𝑟𝑙 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘: https://www.facebook.com/profile.php?id={iduser}\n[🔎]→ 𝑈𝑖𝑑 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘: {iduser}\n[🧸]→ 𝑇𝑢̛̀ 𝑛𝑎𝑦 {type} {name} 𝑠𝑒̃ 𝑙𝑎̀ 𝑡ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 𝑡ℎ𝑢̛́ {soThanhVien} 𝑐𝑢̉𝑎 𝑛ℎ𝑜́𝑚 {threadName}\n[❗]→ 𝑌𝑒̂𝑢 𝑐𝑎̂̀𝑢 𝑡ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 {name} 𝑐𝑜́ 𝑡𝑟𝑎́𝑐ℎ 𝑛ℎ𝑖𝑒̣̂𝑚 𝑡𝑢̛𝑜̛𝑛𝑔 𝑡𝑎́𝑐 đ𝑎̂̀𝑦 đ𝑢̉ 𝑣𝑜̛́𝑖 𝑏𝑜𝑥 {threadName}\n━━━━━━━━━━━━━━━━━━━━━\n[❤️]→ 𝐶ℎ𝑢́𝑐 {type} 𝑐𝑜́ 𝑚𝑜̣̂𝑡 𝑏𝑢𝑜̂̉𝑖 {buoi} || {ngay} 𝑣𝑢𝑖 𝑣𝑒̉\n━━━━━━━━━━━━━━━━━━━━━\n[🥀]→ {name} đ𝑢̛𝑜̛̣𝑐 𝑡ℎ𝑒̂𝑚 𝑣𝑎̀𝑜 𝑏𝑜̛̉𝑖: {author}\n[ 👑 ]→ 𝑈𝑟𝑙 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝑛𝑔𝑢̛𝑜̛̀𝑖 𝑡ℎ𝑒̂𝑚 : https://www.facebook.com/profile.php?id={uidAuthor}\n[👉]→ 𝑁𝑔𝑎̀𝑦 𝑣𝑎̀𝑜: {thu} - {ngay} || {gio}" : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'Các bạn' : 'Bạn')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{buoi}/g, session)
        .replace(/\{ngay}/g, ngay)
        .replace(/\{gio}/g, gio)
        .replace(/\{thu}/g, thu);
   

      var formPush = { body: msg, attachment: abx, mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.png`)
      }
    } catch (e) { return console.log(e) };
  }
}




