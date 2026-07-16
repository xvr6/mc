global.enriching = (event) => {
  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "minecraft:tuff" }],
    result: [CreateItem.of("createnuclear:autunite", 0.15)],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ tag: "minecraft:small_flowers" }],
    result: [CreateItem.of("minecraft:wither_rose", 0.8)],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ tag: "minecraft:tall_flowers" }],
    result: [
      CreateItem.of("minecraft:wither_rose", 0.8),
      CreateItem.of("minecraft:wither_rose", 0.6),
    ],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "minecraft:amethyst_block" }],
    result: [{ item: "minecraft:budding_amethyst" }],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "unusualend:citrine_block" }],
    result: [{ item: "unusualend:budding_citrine" }],
  });

  event.custom({
    type: "createnuclear:enriched",
    ingredients: [{ item: "quark:charcoal_block" }],
    result: [
      { item: "minecraft:coal", count: 3 },
      CreateItem.of("2x minecraft:coal", 0.4),
    ],
  });
};
