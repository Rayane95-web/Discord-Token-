
import {REST,Routes} from "discord.js";
import fs from "fs";
import config from "./config/config.js";

const cmds=[];
for(const f of fs.readdirSync("./commands")){
 const c=await import(`./commands/${f}`);
 cmds.push(c.default.data.toJSON());
}

const rest=new REST({version:"10"}).setToken(config.token);
const DEV_MODE=true;

if(DEV_MODE){
 await rest.put(Routes.applicationGuildCommands(config.clientId,config.guildId),{body:cmds});
}else{
 await rest.put(Routes.applicationCommands(config.clientId),{body:cmds});
}
console.log("deployed");
