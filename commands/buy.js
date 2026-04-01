
import {SlashCommandBuilder} from "discord.js";
import {getUser,saveUser} from "../utils/data.js";
import {shop} from "../utils/shop.js";

export default {
 data:new SlashCommandBuilder()
 .setName("buy")
 .addStringOption(o=>o.setName("item").setRequired(true)),
 async execute(i){
  const item=i.options.getString("item");
  const u=getUser(i.user.id);
  if(!shop[item]) return i.reply("invalid");
  if(u.wallet<shop[item].price) return i.reply("no money");
  u.wallet-=shop[item].price;
  u.inventory[item]=(u.inventory[item]||0)+1;
  saveUser(i.user.id,u);
  i.reply("bought "+item);
 }
};
