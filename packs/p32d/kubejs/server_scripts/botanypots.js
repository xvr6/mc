ServerEvents.recipes((event) => {
  event.recipes.botanypots.crop(
    "minecraft:poplar_sapling", // seed item
    ["minecraft:oak_leaves"], // categories that this crop can be planted on
    { block: "minecraft:poplar_sapling" }, // display block
    [
      Item.of("minecraft:poplar_log") // item
        .withChance(100) // weight of this entry compared to the others
        .withRolls(1, 4), // the times this loot will be chosen (min, max)
      Item.of("minecraft:poplar_sapling").withChance(5),
    ],
    2400, // growthTicks
  );
});
