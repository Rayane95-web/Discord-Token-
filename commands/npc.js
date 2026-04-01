
import {SlashCommandBuilder} from "discord.js";
import {rnd} from "../utils/npc.js";

export default {
 data:new SlashCommandBuilder().setName("npc").setDescription("npc"),
 async execute(i){
  const n=rnd();
  i.reply(n.name+": "+n.msg);
 }
};
