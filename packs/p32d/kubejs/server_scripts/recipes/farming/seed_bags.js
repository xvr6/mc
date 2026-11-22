// Crop bags: 9 seeds <-> 1 bag (blocks registered in startup_scripts/blocks.js).

// [bag, contents, count returned when unpacking (default 9)]
const SEED_BAGS = [
  ["kubejs:asparagus_seed_bag", "expandeddelight:asparagus_seeds"],
  ["kubejs:beetroot_seed_bag", "minecraft:beetroot_seeds"],
  ["kubejs:blueberry_bag", "biomeswevegone:blueberries", 1],
  ["kubejs:cabbage_seed_bag", "farmersdelight:cabbage_seeds"],
  ["kubejs:chili_pepper_seed_bag", "expandeddelight:chili_pepper_seeds"],
  ["kubejs:crimson_berry_bag", "netherdescent:crimson_berries"],
  ["kubejs:elven_sweet_berry_bag", "creategarnished:elven_sweet_berries"],
  ["kubejs:flax_seed_bag", "supplementaries:flax_seeds"],
  ["kubejs:melon_seed_bag", "minecraft:melon_seeds"],
  ["kubejs:pumpkin_seed_bag", "minecraft:pumpkin_seeds"],
  ["kubejs:tomato_seed_bag", "farmersdelight:tomato_seeds"],
  ["kubejs:wheat_seed_bag", "minecraft:wheat_seeds"],
];

ServerEvents.recipes((event) => {
  SEED_BAGS.forEach(([bag, seed, unpackCount]) => {
    event.shapeless(bag, [`9x ${seed}`]);
    event.shapeless(`${unpackCount || 9}x ${seed}`, [bag]);
  });
});
