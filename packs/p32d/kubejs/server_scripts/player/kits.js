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

const WELCOME_MESSAGE = [
  "§6§lWelcome to p32d!§r §7You've been given a starter kit.",
  "§eUseful commands:",
  " §a/sethome§7, §a/home §7- set & return to your home (1 per player)",
  " §a/spawn §7- teleport to world spawn",
  " §a/back §7- return to where you died or last teleported from",
  " §a/crafting§7, §a/stonecutter§7, §a/trashcan §7- portable utilities",
];

PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("starterKitGiven")) {
    event.player.stages.add("starterKitGiven");
    const username = event.entity.username;
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
