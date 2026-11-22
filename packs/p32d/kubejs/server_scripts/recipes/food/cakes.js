// Cakes. All cake bases go through ratatouille's mold chain:
// batter -> filled mold -> smoked -> demolded base.
// Custom fluids/items are registered in startup_scripts (fluids.js, items.js).

// [cake, flavoring mixed into ratatouille batter, resulting cake base]
const CAKE_BASES = [
  ["blaze", "create:cinder_flour", "create:blaze_cake_base"],
  ["echo", "create_deep_dark:sculk_flour", "create_deep_dark:echo_cake_base"],
  [
    "experience",
    "minecraft:lapis_lazuli",
    "create_enchantment_industry:experience_cake_base",
  ],
];

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

  // --- Special cake bases ---
  CAKE_BASES.forEach(([cake, flavoring, base]) => {
    const batter = `kubejs:${cake}_cake_batter`;
    const filled = `kubejs:${cake}_cake_mold_filled`;
    const baked = `kubejs:${cake}_cake_mold_baked`;

    event.remove({ output: base });

    event.recipes.create.mixing(Fluid.of(batter, 500), [
      Fluid.of("ratatouille:cake_batter", 500),
      flavoring,
    ]);
    event.recipes.create.filling(filled, [
      "ratatouille:cake_mold",
      Fluid.of(batter, 500),
    ]);
    event.smoking(baked, filled);
    event.custom({
      type: "ratatouille:demolding",
      ingredients: [{ item: baked }],
      results: [{ id: base }, { id: "ratatouille:cake_mold" }],
    });
  });
});
