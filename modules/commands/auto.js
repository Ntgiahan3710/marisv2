module.exports.config = {
    name: 'autosend2',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'admin',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '11:00:00 PM',
    message: ['𝗞𝗵𝘂𝘆𝗮 𝗿𝗼̂̀𝗶 𝗻𝗴𝘂̉ 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗼̛𝗶 𝘁𝗵𝘂̛́𝗰 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗼̂́𝘁 𝗰𝗵𝗼 𝘀𝘂̛́𝗰 𝗸𝗵𝗼𝗲̉ đ𝗮̂𝘂 😴', '𝗞𝗵𝘂𝘆𝗮 𝗿𝗼̂̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗻𝗵𝗲́ 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😇']
},
{
    timer: '10:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 😴', '𝗞𝗵𝘂𝘆𝗮 𝗿𝗼̂̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗻𝗵𝗲́ 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😇']
},
{
    timer: '09:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉ 🥰', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😇']
},
{
    timer: '1:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
},
             {
    timer: '2:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
},
             {
    timer: '3:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
},
             {
    timer: '4:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
},
             {
    timer: '6:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
},
             {
    timer: '7:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
},
             {
    timer: '8:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
},
{
    timer: '6:00:00 AM',
    message: ['𝗕𝗼𝘁 𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ 😉', '𝗕𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😙', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ ❤️']
},
             {
    timer: '7:00:00 AM',
    message: ['𝗕𝗼𝘁 𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ 😉', '𝗕𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😙', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ ❤️']
},
             {
    timer: '8:00:00 AM',
    message: ['𝗕𝗼𝘁 𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ 😉', '𝗕𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😙', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ ❤️']
},
             {
    timer: '9:00:00 AM',
    message: ['𝗕𝗼𝘁 𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ 😉', '𝗕𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😙', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ ❤️']
},
{
    timer: '12:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝘃𝘂𝗶 𝘃𝗲̉ 😋', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝗮̆𝗻 𝗻𝗴𝗼𝗻 𝗺𝗶𝗲̣̂𝗻𝗴 😋']
},           
{
    timer: '11:00:00 AM',
    message: ['𝗖𝗮̉ 𝘀𝗮́𝗻𝗴 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶 𝗿𝗼̂̀𝗶 𝗻𝗴𝗵𝗶̉ 𝗻𝗴𝗼̛𝗶 𝗻𝗮̣𝗽 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗮̀𝗼 !!😴']
},               
{
    timer: '10:00:00 AM',
    message: ['𝗡𝗮̂́𝘂 𝗰𝗼̛𝗺 𝗻𝗵𝗼̛́ 𝗯𝗮̣̂𝘁 𝗻𝘂́𝘁 𝗻𝗵𝗮 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 😙']
},          
{
    timer: '5:00:00 PM',
    message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘁𝗮̀ 𝘃𝘂𝗶 𝘃𝗲̉🥰']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};