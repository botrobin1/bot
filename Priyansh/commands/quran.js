/**
* @author Robin
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "quran",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Robin",
  description: "Dont Change This Credits Otherwise Your Bot lol",
  commandCategory: "random-img",
  usages: "Quran",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/MGbfUBW.jpeg",
"https://i.imgur.com/snGvdXq.jpeg",
"https://i.imgur.com/2Cwk7Y5.jpeg",
 "https://i.imgur.com/5yPiDiJ.jpeg",
"https://i.imgur.com/GHAKfNr.jpeg",
"https://i.imgur.com/Kl3F7oc.jpeg",
"https://i.imgur.com/ShHpLoQ.jpeg",
"https://i.imgur.com/d3vpLmX.jpeg",
"https://i.imgur.com/CbnRsfT.jpeg",
"https://i.imgur.com/pSz494o.jpeg",

     ];
     var callback = () => api.sendMessage({body:`★·.· 𝙑𝙀𝙍𝙄𝙇𝙔 , 𝙄𝙉 𝙏𝙃𝙀 𝙍𝙀𝙈𝙀𝙈𝘽𝙍𝘼𝙉𝘾𝙀 𝙊𝙁 𝘼𝙇𝙇𝘼𝙃 𝘿𝙊 𝙃𝙀𝘼𝙍𝙏𝙎 𝙁𝙄𝙉𝘿 🎀

          ✨• ▎𝑸𝑼𝑹𝑨𝑵 ▎•🖤       
                                               [𝙈𝘼𝘿𝙀 𝘽𝙔 ROBIN] `,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
