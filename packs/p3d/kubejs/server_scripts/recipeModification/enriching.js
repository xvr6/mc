ServerEvents.recipes((event) => {
  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "minecraft:tuff" }],
    results: [{ id: "createnuclear:autunite", chance: 0.15 }],
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

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "minecraft:amethyst_block" }],
    results: [{ id: "minecraft:budding_amethyst" }],
  });

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
