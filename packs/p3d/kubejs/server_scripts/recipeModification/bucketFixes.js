ServerEvents.recipes((event) => {
  event.recipes.createEmptying(
    ["minecraft:bucket", Fluid.of("createmetallurgy:molten_void_steel", 1000)],
    "createmetallurgy:molten_void_steel_bucket",
  );
  event.recipes.createEmptying(
    ["minecraft:bucket", Fluid.of("ratatouille:egg_yolk", 1000)],
    "ratatouille:egg_yolk_bucket",
  );
  event.recipes.createEmptying(
    ["minecraft:bucket", Fluid.of("createmetallurgy:molten_electrum", 1000)],
    "createmetallurgy:molten_electrum_bucket",
  );
  event.recipes.createEmptying(
    ["minecraft:bucket", Fluid.of("createmetallurgy:molten_bronze", 1000)],
    "createmetallurgy:molten_bronze_bucket",
  );
  event.recipes.createEmptying(
    ["minecraft:bucket", Fluid.of("ratatouille:cake_batter", 1000)],
    "ratatouille:cake_batter_bucket",
  );
  event.recipes.createEmptying(
    ["minecraft:bucket", Fluid.of("ratatouille:melon_juice_fluid", 1000)],
    "ratatouille:melon_juice_fluid_bucker",
  );
});
