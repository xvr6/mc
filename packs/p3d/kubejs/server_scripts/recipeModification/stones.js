ServerEvents.recipes((event) => {
  // - Crushing recipe
  //                (output[], input)
  event.recipes.createCrushing(
    [
      CreateItem.of("createnuclear:uranium_powder", 0.35),
      CreateItem.of("create:crushed_raw_uranium", 0.05),
    ],
    "createnuclear:autunite",
  );
  //diamond antomation but evil
  event.recipes
    .createCompacting(CreateItem.of("minecraft:diamond", 0.05), [
      Item.of("minecraft:coal_block", 9),
      Fluid.of("createnuclear:uranium", 250),
    ])
    .superheated();

  // - Stone typed automatable
  //veridium
  event.recipes
    .createMixing(
      ["create:asurine", Fluid.of("createmetallurgy:molten_slag", 90)],
      ["minecraft:tuff", "create:veridium"],
    )
    .heated();
  //Crimsite
  event.recipes
    .createMixing(
      ["create:crimsite", Fluid.of("createmetallurgy:molten_slag", 90)],
      ["minecraft:tuff", "minecraft:netherrack"],
    )
    .heated();
  //Ochrum
  event.custom({
    type: "create_aquatic_ambitions:channeling",
    ingredients: [{ item: "minecraft:tuff" }],
    results: [
      { id: "create:ochrum" },
      { id: "createmetallurgy:slag", chance: 0.4 },
    ],
  });
  event.recipes.createFilling("minecraft:dripstone_block", [
    Ingredient.of("#minecraft:terracotta"),
    Fluid.of("minecraft:lava", 250),
  ]);

  // filter{}, to be replaced, what to replace with
  event.replaceOutput(
    { id: "create:milling/dripstone_block" },
    "minecraft:clay_ball",
    "minecraft:pointed_dripstone",
  );
});
