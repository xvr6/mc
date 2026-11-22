// Fluid handling: missing bucket emptying recipes, fueling tanks.

// [bucket, fluid] — buckets with no Create emptying recipe
const BUCKET_EMPTYING = [
  [
    "createmetallurgy:molten_void_steel_bucket",
    "createmetallurgy:molten_void_steel",
  ],
  ["ratatouille:egg_yolk_bucket", "ratatouille:egg_yolk"],
  [
    "createmetallurgy:molten_electrum_bucket",
    "createmetallurgy:molten_electrum",
  ],
  ["createmetallurgy:molten_bronze_bucket", "createmetallurgy:molten_bronze"],
  ["ratatouille:cake_batter_bucket", "ratatouille:cake_batter"],
  ["ratatouille:melon_juice_fluid_bucket", "ratatouille:melon_juice_fluid"],
];

ServerEvents.recipes((event) => {
  // --- Bucket emptying fixes ---
  BUCKET_EMPTYING.forEach(([bucket, fluid]) => {
    event.recipes.create.emptying(
      ["minecraft:bucket", Fluid.of(fluid, 1000)],
      bucket,
    );
  });

  // --- Fueling tanks: cheaper; filling tank + 2 sturdy sheets ---
  ["small", "medium", "large"].forEach((size) => {
    event.remove({ id: `create_sa:${size}_fueling_tank_recipe` });
    event.shaped(`create_sa:${size}_fueling_tank`, ["S", "T", "S"], {
      T: `create_sa:${size}_filling_tank`,
      S: "create:sturdy_sheet",
    });
  });
});
