ServerEvents.recipes((event) => {
  //remove OG recipes
  event.remove({ output: "create:blaze_cake_base" });
  event.remove({ output: "create_deep_dark:echo_cake_base" });
  event.remove({ output: "create_enchantment_industry:experience_cake_base" });

  // - Cakes
  // remove all ways to make cake but select 2
  event.remove({
    not: { id: "farmersdelight:cake_from_slices" },
    not: { id: "ratatouille:filling/cake" },
    output: "minecraft:cake",
  });

  // Readd other cake recipe that used removed cake bases
  event.recipes.createFilling("createaddition:chocolate_cake", [
    "ratatouille:cake_base",
    Fluid.of("create:chocolate", 500),
  ]);

  // - Blaze Cakes
  // remove OG recipes
  event.remove({ output: "create:blaze_cake_base" });
  event.remove({ output: "create_deep_dark:echo_cake_base" });
  event.remove({ output: "create_enchantment_industry:experience_cake_base" });

  // new batters
  event.recipes.createMixing(Fluid.of("kubejs:blaze_cake_batter", 500), [
    Fluid.of("ratatouille:cake_batter", 500),
    "create:cinder_flour",
  ]);
  event.recipes.createMixing(Fluid.of("kubejs:echo_cake_batter", 500), [
    Fluid.of("ratatouille:cake_batter", 500),
    "create_deep_dark:sculk_flouer",
  ]);
  event.recipes.createMixing(Fluid.of("kubejs:experience_cake_batter", 500), [
    Fluid.of("ratatouille:cake_batter", 500),
    "minecraft:lapis_lazuli",
  ]);

  // Filled cake molds
  event.recipes.createFilling("kubejs:blaze_cake_mold_filled", [
    "ratatouille:cake_mold",
    Fluid.of("kubejs:blaze_cake_batter", 500),
  ]);
  event.recipes.createFilling("kubejs:echo_cake_mold_filled", [
    "ratatouille:cake_mold",
    Fluid.of("kubejs:echo_cake_batter", 500),
  ]);
  event.recipes.createFilling("kubejs:experience_cake_mold_filled", [
    "ratatouille:cake_mold",
    Fluid.of("kubejs:experience_cake_batter", 500),
  ]);

  // Cooking filled cake molds
  event.smoking(
    "kubejs:blaze_cake_mold_baked",
    "kubejs:blaze_cake_mold_filled",
  );
  event.smoking("kubejs:echo_cake_mold_baked", "kubejs:echo_cake_mold_filled");
  event.smoking(
    "kubejs:experience_cake_mold_baked",
    "kubejs:experience_cake_mold_filled",
  );

  // Demold and produce normal unfilled cakes
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
