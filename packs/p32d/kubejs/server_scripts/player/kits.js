// Starter kit, given once per player on first login.

// [item id, count]
const STARTER_KIT = [
  ["minecraft:stone_sword", 1],
  ["minecraft:stone_pickaxe", 1],
  ["minecraft:stone_axe", 1],
  ["create:wrench", 1],
  ["minecraft:oak_boat", 1],
  ["minecraft:red_bed", 1],
  ["rusticdelight:syrup_sandwich", 16],
  ["minecraft:torch", 32],
];

// Shared by the first-login welcome and the /help override below
const HELP_LINES = [
  "§eUseful commands:",
  " §a/sethome§7, §a/home §7- set & return to your home (1 per player)",
  " §a/spawn §7- teleport to world spawn",
  " §a/back §7- return to where you died or last teleported from",
  " §a/crafting§7, §a/stonecutter§7, §a/trashcan §7- portable utilities",
  " §a/tamable [mob] §7- list tamable mobs / how to tame one",
  // PlayerName Styler (FTB Essentials /nick is disabled)
  " §a/nickname set <name> §7- set a nickname (supports color tags)",
  "   §7colors: §f<red>§7, §f<#ff8800>§7 - close with §f</tag>§7, e.g. §f<red>Red</red>",
  " §a/nickname clear §7- reset to your normal name",
];

const WELCOME_MESSAGE = [
  "§6§lWelcome to p32d!§r §7You've been given a starter kit.",
].concat(HELP_LINES);

const HELP_MESSAGE = ["§6§lp32d help"].concat(HELP_LINES);

// Replaces bare /help. Brigadier merges this into vanilla's "help" node, so
// only the no-argument form changes; /help <command> still works as before.
ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;
  event.register(
    Commands.literal("help").executes((ctx) => {
      const player = ctx.source.player;
      HELP_MESSAGE.forEach((line) => {
        if (player) player.tell(line);
        else ctx.source.sendSystemMessage(Text.of(line));
      });
      return 1;
    }),
  );
});

PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("starterKitGiven")) {
    event.player.stages.add("starterKitGiven");
    // `let`, not `const`: Rhino throws "redeclaration of var" for a const inside an if-block here
    let username = event.entity.username;
    STARTER_KIT.forEach(([item, count]) => {
      event.server.runCommandSilent(`give ${username} ${item} ${count}`);
    });

    // Welcome message (FTB Essentials commands; see config/ftbessentials.snbt)
    WELCOME_MESSAGE.forEach((line) => event.player.tell(line));
  }

  // --- Mob bundle (disabled) ---
  //if (!event.player.stages.has("spawnEggsGiven")) {
  //  event.player.stages.add("spawnEggsGiven");
  //  event.server.runCommandSilent(
  //    `give ${event.entity.username} minecraft:gray_bundle[minecraft:bundle_contents=[
  //        { id: "minecraft:cow_spawn_egg", count: 2 },
  //        { id: "minecraft:sheep_spawn_egg", count: 2 },
  //        { id: "minecraft:chicken_spawn_egg", count: 2 },
  //        { id: "minecraft:bee_spawn_egg", count: 2 },
  //        { id: "minecraft:pig_spawn_egg", count: 2 },
  //        { id: "minecraft:beehive", count: 1 }
  //        ]
  //      ]`,
  //  );
  //}
});
