global.enriching = (event) => {
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
    ingredients: [{ item: "quark:charcoal_block" }],
    results: [
      { id: "minecraft:coal", count: 4 },
      { id: "minecraft:coal", count: 2, chance: 0.6 },
    ],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [Ingredient.of("#c:flours")],
    results: [{ id: "create:cinder_flour", chance: 0.4 }],
  });
};
