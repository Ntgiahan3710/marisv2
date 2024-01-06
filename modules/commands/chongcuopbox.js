module.exports.config = {
 name: "chongcuopbox",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Ngăn chặn việc thay đổi admin",
 usages: "chongcuopbox",
 commandCategory: "Quản Lí Box",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[⚜️]→ Cần quyền quản trị viên nhóm, vui lòng thêm và thử lại!', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[⚜️]→ Đã ${(data["guard"] == true) ? "bật" : "tắt"} thành công chống cướp box`, event.threadID, event.messageID);
}






module.exports.config = {
 name: "chongcuopbox",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Ngăn chặn việc thay đổi admin",
 usages: "chongcuopbox",
 commandCategory: "Quản Lí Box",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads, Users}) => {
    const axios = require('axios');
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    let name = await Users.getNameUser(event.senderID);
    const info = await api.getThreadInfo(event.threadID);

    var array = [];
    const res1 = await axios.get(`hn`);
    var data1 = res1.data.data;
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    array.push(downloadfile1);


  
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage({body:'==== 『 𝐄𝐑𝐎𝐋 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝙼𝚞𝚘̂́𝚗 𝚋𝚘𝚝 𝚝𝚑𝚞̛̣𝚌 𝚑𝚒𝚎̣̂𝚗 𝚕𝚎̣̂𝚗𝚑 𝚗𝚊̀𝚢, 𝚟𝚞𝚒 𝚕𝚘̀𝚗𝚐 𝚝𝚑𝚎̂𝚖 𝚋𝚘𝚝 𝚕𝚊̀𝚖 𝚚𝚝𝚟!!!\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n=== 「'+ thu +'||'+ gio + '」 ===' , },event.threadID, event.messageID);

  
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);



   
    return api.sendMessage(`[⚜️]→ Đã ${(data["guard"] == true) ? "bật" : "tắt"} thành công chống cướp box`, event.threadID, event.messageID);
}