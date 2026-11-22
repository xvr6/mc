// Custom blocks.

// --- Crop bags (storage blocks; recipes in server_scripts/recipes/farming/seed_bags.js) ---
// [block id, display name]; top texture is kubejs:block/<id>_top
const CROP_BAGS = [
  ["asparagus_seed_bag", "Bag of Asparagus Seeds"],
  ["beetroot_seed_bag", "Bag of Beetroot Seeds"],
  ["blueberry_bag", "Bag of Blueberry Seeds"],
  ["cabbage_seed_bag", "Bag of Cabbage Seeds"],
  ["chili_pepper_seed_bag", "Bag of Chili Pepper Seeds"],
  ["crimson_berry_bag", "Bag of Crimson Berries"],
  ["elven_sweet_berry_bag", "Bag of Elven Sweet Berries"],
  ["flax_seed_bag", "Bag of Flax Seeds"],
  ["melon_seed_bag", "Bag of Melon Seeds"],
  ["pumpkin_seed_bag", "Bag of Pumpkin Seeds"],
  ["tomato_seed_bag", "Bag of Tomato Seeds"],
  ["wheat_seed_bag", "Bag of Wheat Seeds"],
];

StartupEvents.registry("block", (event) => {
  CROP_BAGS.forEach(([id, name]) => {
    event
      .create(id)
      .displayName(name)
      .texture("up", `kubejs:block/${id}_top`)
      .texture("down", "kubejs:block/crop_bag_bottom")
      .texture("north", "kubejs:block/crop_bag_side_tied")
      .texture("south", "kubejs:block/crop_bag_side_tied")
      .texture("east", "kubejs:block/crop_bag_side")
      .texture("west", "kubejs:block/crop_bag_side");
  });
});
