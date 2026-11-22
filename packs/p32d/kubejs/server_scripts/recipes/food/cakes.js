// Cakes. Special cake bases go through ratatouille's mold chain:
// batter -> filled mold -> smoked -> demolded base.
// Custom fluids/items are registered in startup_scripts (fluids.js, items.js).

ServerEvents.recipes((event) => {
  // --- Plain cake: remove all ways to make it except 2 ---
  event.remove({
    // array = OR; two `not` keys in one object would keep only the last one
    not: [
      { id: "farmersdelight:cake_from_slices" },
      { id: "ratatouille:filling/cake" },
    ],
    output: "minecraft:cake",
  });

  // Re-add chocolate cake, which used a removed cake base
  event.recipes.create.filling("createaddition:chocolate_cake", [
    "ratatouille:cake_base",
    Fluid.of("create:chocolate", 500),
  ]);

  // --- Special cake bases: remove originals ---
  event.remove({ output: "create:blaze_cake_base" });
  event.remove({ output: "create_deep_dark:echo_cake_base" });
  event.remove({ output: "create_enchantment_industry:experience_cake_base" });

  // --- Batters ---
  event.recipes.create.mixing(Fluid.of("kubejs:blaze_cake_batter", 500), [
    Fluid.of("ratatouille:cake_batter", 500),
    "create:cinder_flour",
  ]);
  event.recipes.create.mixing(Fluid.of("kubejs:echo_cake_batter", 500), [
    Fluid.of("ratatouille:cake_batter", 500),
    "create_deep_dark:sculk_flour",
  ]);
  event.recipes.create.mixing(Fluid.of("kubejs:experience_cake_batter", 500), [
    Fluid.of("ratatouille:cake_batter", 500),
    "minecraft:lapis_lazuli",
  ]);

  // --- Filled molds ---
  event.recipes.create.filling("kubejs:blaze_cake_mold_filled", [
    "ratatouille:cake_mold",
    Fluid.of("kubejs:blaze_cake_batter", 500),
  ]);
  event.recipes.create.filling("kubejs:echo_cake_mold_filled", [
    "ratatouille:cake_mold",
    Fluid.of("kubejs:echo_cake_batter", 500),
  ]);
  event.recipes.create.filling("kubejs:experience_cake_mold_filled", [
    "ratatouille:cake_mold",
    Fluid.of("kubejs:experience_cake_batter", 500),
  ]);

  // --- Baking ---
  event.smoking(
    "kubejs:blaze_cake_mold_baked",
    "kubejs:blaze_cake_mold_filled",
  );
  event.smoking("kubejs:echo_cake_mold_baked", "kubejs:echo_cake_mold_filled");
  event.smoking(
    "kubejs:experience_cake_mold_baked",
    "kubejs:experience_cake_mold_filled",
  );

  // --- Demolding -> cake base + empty mold ---
  event.custom({
    type: "ratatouille:demolding",
    ingredients: [{ item: "kubejs:blaze_cake_mold_baked" }],
    results: [
      { id: "create:blaze_cake_base" },
      { id: "ratatouille:cake_mold" },
    ],
  });
  event.custom({
    type: "ratatouille:demolding",
    ingredients: [{ item: "kubejs:echo_cake_mold_baked" }],
    results: [
      { id: "create_deep_dark:echo_cake_base" },
      { id: "ratatouille:cake_mold" },
    ],
  });
  event.custom({
    type: "ratatouille:demolding",
    ingredients: [{ item: "kubejs:experience_cake_mold_baked" }],
    results: [
      { id: "create_enchantment_industry:experience_cake_base" },
      { id: "ratatouille:cake_mold" },
    ],
  });
});
