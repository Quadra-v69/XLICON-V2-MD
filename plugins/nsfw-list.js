let handler = async (m, { conn, usedPrefix }) => {
    if (!global.db.data.chats[m.chat].nsfw) throw `🚫 group doesnt supprt nsfw \n\n enable it by \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ uneed to be atleast 18 years`) 
   
m.react(rwait)
    let nsfwCommands = ['xnxx', 'xvid',  'genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts', 'stockings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl'];
  
    let message = `
  *_404_*  𝙊𝙤𝙥𝙨 *_!_* 𝙉𝙤𝙩𝙝𝙞𝙣𝙜 𝙩𝙤 𝙎𝙚𝙚 𝙃𝙚𝙧𝙚 _*!*_
  `;
  
    console.log("Sending message...");
    await conn.reply(m.chat, message, m);
    console.log("Message sent.");
  };
  
  handler.help = ['nsfw'];
  handler.tags = ['nsfw'];
  handler.command = ['nsfw'];
  handler.group = true
  handler.register = true;

  export default handler;
  
