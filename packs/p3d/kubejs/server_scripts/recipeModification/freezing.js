ServerEvents.recipes((event) => {
  // - Renewable snow w/o mob griefing
  event.custom({
    type: "create_dragons_plus:freezing",
    ingredients: [{ item: "minecraft:water_bucket" }],
    results: [{ id: "minecraft:powder_snow_bucket" }],
  });
  event.recipes.createSplashing(
    ["minecraft:snow_block", "minecraft:bucket"],
    "minecraft:powder_snow_bucket",
  );
  // - remove freezing block from ratatouille, use freezing instead

  event.remove({ id: "ratatouille:crafting/frozen_block" });
  event.remove({ id: "create:freezing/packed_ice" });
  event.remove({ id: "create:freezing/melon_popsicle_mold_filled" });
  event.remove({ id: "create:freezing/chocolate_mold_filled" });

  event.custom({
    type: "create_dragons_plus:freezing",
    ingredients: [{ item: "ratatouille:melon_popsicle_mold_filled" }],
    results: [{ id: "ratatouille:melon_popsicle_mold_solid" }],
  });
  event.custom({
    type: "create_dragons_plus:freezing",
    ingredients: [{ item: "ratatouille:chocolate_mold_filled" }],
    results: [{ id: "ratatouille:chocolate_mold_solid" }],
  });
});
