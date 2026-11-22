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

PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("starterKitGiven")) {
    event.player.stages.add("starterKitGiven");
    const username = event.entity.username;
    STARTER_KIT.forEach(([item, count]) => {
      event.server.runCommandSilent(`give ${username} ${item} ${count}`);
    });
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
