ServerEvents.recipes((event) => {
  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "create:asurine" }],
    results: [{ id: "createnuclear:autunite", chance: 0.25 }],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [Ingredient.of("#minecraft:small_flowers")],
    results: [{ id: "minecraft:wither_rose", chance: 0.4 }],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [Ingredient.of("#minecraft:tall_flowers")],
    results: [
      { id: "minecraft:wither_rose", chance: 0.6 },
      { id: "minecraft:wither_rose", chance: 0.4 },
    ],
  });

  // more easily farmable amethyst, something mainly cosmetic in this pack
  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "minecraft:amethyst_block" }],
    results: [{ id: "minecraft:budding_amethyst" }],
  });

  event.recipes.createCrushing(
    ["minecraft:amethyst_block", "galosphere:glinted_amethyst_cluster"],
    "minecraft:budding_amethyst",
  );
  event.recipes.createMilling(
    [
      "minecraft:amethyst_shard x4",
      CreateItem.of("minecraft:glowstone_dust x2", 0.8),
    ],
    "galosphere:glinted_amethyst_cluster",
  );

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "unusualend:citrine_block" }],
    results: [{ id: "unusualend:budding_citrine" }],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "minecraft:soul_soil" }],
    results: [{ id: "createnuclear:enriched_soul_soil", chance: 0.15 }],
  });

  // - This should become the only way to automate netherrack for balance purposes
  event.custom({
    type: "createnuclear:enriched",
    ingredients: [Ingredient.of("#c:flours")],
    results: [{ id: "create:cinder_flour", chance: 0.35 }],
  });
});
