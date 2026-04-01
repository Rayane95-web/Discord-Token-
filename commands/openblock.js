
import {SlashCommandBuilder} from "discord.js";
import {getUser,saveUser} from "../utils/data.js";
import {roll} from "../utils/luckyBlock.js";

export default {
 data:new SlashCommandBuilder().setName("openblock").setDescription("open lucky block"),
 async execute(i){
  const u=getUser(i.user.id);
  if(!u.inventory.lucky_block) return i.reply("no blocks");
  u.inventory.lucky_block--;
  const r=roll();
  if(r.name==="OMEGA"){u.wallet+=1e9;}
  const res=r.reward();
  if(res.money)u.wallet+=res.money;
  if(res.item){u.inventory[res.item]=(u.inventory[res.item]||0)+1;}
  saveUser(i.user.id,u);
  i.reply("got "+r.name);
 }
};
