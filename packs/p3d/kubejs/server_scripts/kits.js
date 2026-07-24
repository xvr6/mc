const startingKit = [
  // Define starting kit here! Entries are: [item:id, count]
  ["minecraft:wooden_sword", 1],
  ["minecraft:wooden_pickaxe", 1],
  ["minecraft:wooden_axe", 1],
  //  ["create:wrench", 1],
  //  ["railways:handcar", 1],
  // ["cobblemon_synchro_machine:synchro_machine", 1],
  ["cobblemon:poke_ball", 16],
  ["rusticdelight:syrup_sandwich", 16],
];

const spawnerBundle = Item.of("minecraft:bundle", {
  Items: [
    { id: "minecraft:cow_spawn_egg", count: 2 },
    { id: "minecraft:sheep_spawn_egg", count: 2 },
    { id: "minecraft:chicken_spawn_egg", count: 2 },
    { id: "minecraft:bee_spawn_egg", count: 2 },
    { id: "minecraft:pig_spawn_egg", count: 2 },
  ],
});

//the actual event
PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("kit_given")) {
    event.player.stages.add("kit_given");
    const entity = event.entity.username;
    for (const item in startingKit) {
      let element = startingKit[item];
      event.server.runCommandSilent(
        `give ${entity} ${element[0]} ${element[1]}`,
      );
    }
  }
  // - mob bundle
  if (!event.player.stages.has("spawn_eggs_given")) {
    event.player.stages.add("spawn_eggs_given");
    event.player.give(spawnerBundle);
  }
});
