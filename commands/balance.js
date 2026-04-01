
import {SlashCommandBuilder,EmbedBuilder} from "discord.js";
import {getUser} from "../utils/data.js";
import {f} from "../utils/format.js";

export default {
 data:new SlashCommandBuilder().setName("balance").setDescription("balance"),
 async execute(i){
  const u=getUser(i.user.id);
  const e=new EmbedBuilder().setTitle("Balance")
  .addFields({name:"Wallet",value:f(u.wallet)});
  i.reply({embeds:[e]});
 }
};
