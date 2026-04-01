
import {SlashCommandBuilder} from "discord.js";
import {shop} from "../utils/shop.js";

export default {
 data:new SlashCommandBuilder().setName("shop").setDescription("shop"),
 async execute(i){
  let txt="";
  for(const k in shop){txt+=k+" - "+shop[k].price+"\n";}
  i.reply(txt);
 }
};
