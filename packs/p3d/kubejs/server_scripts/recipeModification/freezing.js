ServerEvents.recipes((event) => {
  event.custom({
    type: "create_dragons_plus:freezing",
    ingredients: [{ item: "minecraft:water_bucket" }],
    results: [{ id: "minecraft:powder_snow_bucket" }],
  });
  event.recipes.createSplashing(
    ["minecraft:snow_block", "minecraft:bucket"],
    "minecraft:powder_snow_bucket",
  );
});
