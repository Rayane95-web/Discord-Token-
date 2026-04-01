
import {Client,GatewayIntentBits,Collection} from "discord.js";
import fs from "fs";
import config from "./config/config.js";

const client=new Client({intents:[GatewayIntentBits.Guilds]});
client.commands=new Collection();

for(const f of fs.readdirSync("./commands")){
 const c=await import(`./commands/${f}`);
 client.commands.set(c.default.data.name,c.default);
}

client.on("interactionCreate",async i=>{
 if(!i.isChatInputCommand())return;
 const c=client.commands.get(i.commandName);
 if(!c)return;
 try{await c.execute(i);}catch(e){console.log(e);i.reply("err");}
});

client.once("ready",()=>console.log("READY"));
client.login(config.token);
