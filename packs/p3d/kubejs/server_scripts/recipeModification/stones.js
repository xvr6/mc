ServerEvents.recipes((event) => {
  // - Crushing recipe
  //                (output[], input)
  event.recipes.createCrushing(
    [
      CreateItem.of("createnuclear:uranium_powder", 0.225),
      CreateItem.of("createmetallurgy:dirty_zinc_dust", 0.55),
      CreateItem.of("2x createnuclear:lead_nugget", 0.45),
    ],
    "createnuclear:autunite",
  );
  // - Add in ability for wolframite/tungsten automation
  // Increase cost of scorchia
  event.remove({ id: "create:crafting/palettes/scorchia" });
  event.recipes.create.haunting(
    [CreateItem.of("create:scorchia", 0.8)],
    ["create:scoria"],
  );
  event.recipes.createCrushing(
    [
      CreateItem.of("createmetallurgy:crushed_raw_tungsten", 0.4),
      CreateItem.of("createmetallurgy:tungsten_nugget", 0.35),
    ],
    "create:scorchia",
  );

  // - tungsten sheet actually has a use now.
  event.recipes.create.pressing(
    "createmetallurgy:tungsten_sheet",
    "createmetallurgy:tungsten_ingot",
  );

  event.replaceInput(
    { id: "createmetallurgy:crafting/materials/tungsten_wire" },
    "createmetallurgy:tungsten_ingot",
    "createmetallurgy:tungsten_sheet",
  );

  // - Adjust bulb crafting recipes, remove duplicates; electroenergetics has prio
  event.remove({ output: Ingredient.of("#createmetallurgy:light_bulb") });
  event.remove({ id: "electroenergetics:crafting/bulb" });

  // new recipe fpr electro bulb to use tungsten
  event.shaped(Item.of("electroenergetics:bulb", 6), [" G ", " T ", "CAC"], {
    G: "minecraft:glass",
    T: "createmetallurgy:tungsten_wire_spool",
    C: "electroenergetics:connector",
    A: "create:andesite_alloy",
  });
  // may just remove this bulb type entirely, but it has cool cosmetic applicatiions iirc
  event.replaceInput(
    { id: "bits_n_bobs:crafting/lightbulb" },
    "minecraft:glowstone_dust",
    "createmetallurgy:tungsten_wire_spool",
  );
  // change recipe
  event.remove({ output: "createmetallurgy:tungsten_sheet" });
  event.recipes.create.cutting(
    [Item.of("createmetallurgy:tungsten_wire", 2)],
    "createmetallurgy:tungsten_sheet",
  );

  // - Diamond automation but evil
  event.recipes
    .createCompacting(
      [
        CreateItem.of("minecraft:diamond", 0.175),
        CreateItem.of("createnuclear:yellowcake", 0.9),
      ],
      [
        Item.of("createnuclear:enriched_yellowcake", 1),
        Item.of("minecraft:coal_block", 4),
      ],
    )
    .superheated();
  event.recipes
    .createCompacting(
      [
        Item.of("minecraft:coal", 3),
        CreateItem.of("2x minecraft:coal", 0.25),
        "createnuclear:yellowcake",
      ],
      ["createnuclear:enriched_yellowcake", "quark:charcoal_block"],
    )
    .heated();

  // - Stone types automatable
  //Veridium
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
  //Dripstone
  event.recipes.createFilling("minecraft:dripstone_block", [
    Ingredient.of("#minecraft:terracotta"),
    Fluid.of("minecraft:lava", 250),
  ]);
  //Chalk
  event.recipes.shapeless("regions_unexplored:chalk", [
    "2x supplementaries:ash",
    "minecraft:bone_block",
  ]);

  // - Removing duplicate netherrack recipe and replace with my
  //   own less efficient one to make it only viable if you can automate mass quantities (with enriching)
  event.remove({ output: "minecraft:netherrack", type: "create:mixing" });
  event.recipes
    .createMixing(
      [CreateItem.of("minecraft:netherrack", 0.8)],
      [
        Ingredient.of("#c:cobblestones"),
        "create:cinder_flour",
        Fluid.of("minecraft:lava", 750),
      ],
    )
    .heated();

  // - Adding slight buff to superheated lava mixing
  event.remove({ id: "create:mixing/lava_from_cobble" });
  event.recipes
    .createMixing(
      [Fluid.of("minecraft:lava", 75)],
      Ingredient.of("#c:cobblestones"),
    )
    .superheated();

  // filter{}, to be replaced, what to replace with
  event.replaceOutput(
    { id: "create:milling/dripstone_block" },
    "minecraft:clay_ball",
    "minecraft:pointed_dripstone",
  );

  // - Immersive weathering cracked bricks changing
  event.remove({ id: "cluttered:antique_bricks" });
  event.stonecutting("cluttered:antique_bricks", "minecraft:bricks");
  event.remove({ id: "immersive_weathering:cracked_bricks" });
  event.stonecutting("immersive_weathering:cracked_bricks", "minecraft:bricks");
  event.remove({ id: "immersive_weathering:cracked_end_stone_bricks" });
  event.stonecutting(
    "immersive_weathering:cracked_end_stone_bricks",
    "minecraft:end_stone_bricks",
  );
  // - Sulfur Caves stuff
  event.recipes.createFilling("minecraft:cinnabar", [
    Fluid.of("create_dragons_plus:red_dye", 128),
    "minecraft:calcite",
  ]);
  event.recipes.createFilling("minecraft:sulfur", [
    Fluid.of("create_dragons_plus:yellow_dye", 128),
    "minecraft:calcite",
  ]);

  // - Change balast stones recipe
  event.remove({ id: "ballastmod:ballast_stones" });
  event.custom({
    type: "ratatouille:threshing",
    ingredients: [{ tag: "c:cobblestones" }],
    results: [{ id: "ballastmod:ballast_stones" }],
  });
  //
});
