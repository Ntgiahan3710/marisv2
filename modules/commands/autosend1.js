 module.exports.config = {
    name: 'autosend1',
    version: '10.02',
    hasPermssion: 2,
    credits: 'DC-Nam',// mod by vthien 
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Auto',
    usages: '[]',
    cooldowns: 0
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [{
        timer: '5:30:00 AM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '6:30:00 AM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '7:30:00 AM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '8:30:00 AM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
           {
        timer: '9:30:00 AM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
           {
        timer: '10:30:00 AM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '11:30:00 AM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '12:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '1:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '2:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '3:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '4:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '5:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '6:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '7:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '8:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '9:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
          {
        timer: '10:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
},
         {
        timer: '11:30:00 PM',
    message: ['==== [ 𝗔𝗨𝗧𝗢 𝗔̂𝗠 𝗡𝗛𝗔̣𝗖 ] ====\n━━━━━━━━━━━━━━━━\n→ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 𝗛𝗮̃𝘆 𝗻𝗴𝗵𝗲 𝘁𝘆́ 𝗻𝗵𝗮̣𝗰 đ𝗶, 𝗻𝗼́ 𝘀𝗲̃ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝗴𝗶𝗮̉𝗶 𝘁𝗼𝗮̉ 𝘀𝗮𝘂 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝗮̀𝘆 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶, 𝗰𝗮̆𝗻𝗴 𝘁𝗵𝗮̆̉𝗻𝗴,𝘀𝗮𝘂 𝗴𝗶𝗼̛̀ 𝗵𝗼̣𝗰...']     
}];
    const rdPathName = Math.floor(Math.random() * 99999999999999);
    const moment = require("moment-timezone");
const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | DD/MM/YYYY");
    module.exports.handleReply = async function({ api, args, event, handleReply, Users }) {
       // var name = (await Users.getData(event.senderID)).name;
        let { body, threadID, senderID, messageID } = event;
        var text = `BoxID: ${handleReply.boxid}  Tin Nhắn ${body} || Time: ${time}`
        const axios = require('axios');
            const fs = require('fs-extra')
       if(handleReply.type == 'sendtoadmin'){
        if (event.attachments.length != 0) {
            if (event.attachments[0].type == "audio") {
            var path = __dirname + `/sendmsg/${rdPathName}.m4a` ||  __dirname + `/sendmsg/${rdPathName}.mp3`
            }
            if (event.attachments[0].type == "photo") {
            var path = __dirname + `/sendmsg/${rdPathName}.jpg`
            }
            if (event.attachments[0].type == "video") {
            var path = __dirname + `/sendmsg/${rdPathName}.mp4`
            }
            if (event.attachments[0].type == "animated_image") {
            var path = __dirname + `/sendmsg/${rdPathName}.gif`
            }
          let getdata = (await axios.get(`${event.attachments[0].url}`, {
              responseType: 'arraybuffer'
            })).data
            fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
            var formsend = {
              body: `${text}`,
              attachment: fs.createReadStream(path) 
            }
       } else {
        var formsend = {
            body: `${text}`
          }
       }
       var idad = global.config.ADMINBOT;
       for (let ad of idad) {
        api.sendMessage(fromsend, threadID, (error, info) => {       
            if (error) { console.log(error) } else
              global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                boxid: handleReply.boxid,
                messID: messageID,
                type: "sendtouser"
              })
            })
       }   
}
if(handleReply.type == "sendtouser"){
    if (event.attachments.length != 0) {
        if (event.attachments[0].type == "audio") {
        var path = __dirname + `/sendmsg/${rdPathName}.m4a` ||  __dirname + `/sendmsg/${rdPathName}.mp3`
        }
        if (event.attachments[0].type == "photo") {
        var path = __dirname + `/sendmsg/${rdPathName}.jpg`
        }
        if (event.attachments[0].type == "video") {
        var path = __dirname + `/sendmsg/${rdPathName}.mp4`
        }
        if (event.attachments[0].type == "animated_image") {
        var path = __dirname + `/sendmsg/${rdPathName}.gif`
        }
      let getdata = (await axios.get(`${event.attachments[0].url}`, {
          responseType: 'arraybuffer'
        })).data
        fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
        var formsend = {
          body: `${text}`,
          attachment: fs.createReadStream(path) 
        }
   } else {
    var formsend = {
        body: `${text}`
      }
   }
   var idad = global.config.ADMINBOT;
   for (let ad of idad) {
    api.sendMessage(fromsend, threadID, (error, info) => {       
        if (error) { console.log(error) } else
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            boxid: handleReply.boxid,
            messID: messageID,
            type: "sendtoadmin"
          })
        })
   } 
}
}
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://apirandom.quoc-thaithai12.repl.co/thinh`)).data.data)
            msg = {
                body: msg, attachment: (await get((await get(`https://apirandom.quoc-thaithai12.repl.co/mp3`)).data.data, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i, (error, info) => {       
                if (error) { console.log(error) } else
                  global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    boxid: i,
                    messID: messageID,
                    type: "sendtoadmin"
                  })
                }));
        };
    }, 1000);
};
module.exports.run = () => {};