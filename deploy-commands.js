// deploy-commands.js
import { REST, Routes } from "discord.js";
import fs from "fs";
import config from "./config/config.js";

const cmds = [];

// Load all command files and validate them
for (const f of fs.readdirSync("./commands")) {
  try {
    const c = await import(`./commands/${f}`);
    const data = c.default?.data;

    // Check if data exists and has a description
    if (!data) {
      console.warn(`Skipping ${f}: no data export found.`);
      continue;
    }

    // Check description
    const desc = data.description || data.options?.[0]?.description;
    if (!desc || typeof desc !== "string") {
      console.warn(`Skipping ${f}: missing or invalid description.`);
      continue;
    }

    cmds.push(data.toJSON());
  } catch (err) {
    console.error(`Error loading ${f}:`, err);
  }
}

const rest = new REST({ version: "10" }).setToken(config.token);
const DEV_MODE = true;

try {
  if (DEV_MODE) {
    // Guild-specific commands → appear instantly
    await rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: cmds });
    console.log(`✅ Deployed ${cmds.length} commands to guild ${config.guildId}`);
  } else {
    // Global commands → may take up to 1 hour
    await rest.put(Routes.applicationCommands(config.clientId), { body: cmds });
    console.log(`✅ Deployed ${cmds.length} global commands`);
  }
} catch (err) {
  console.error("Failed to deploy commands:", err);
}
