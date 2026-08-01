ServerEvents.recipes((event) => {
  event.recipes.createSplashing(
    CreateItem.of("minecraft:slime_ball", 0.4),
    "minecraft:magma_cream",
  );
  // - Industrially Plated
  event.remove({
    not: { type: "minecraft:stonecutting" },
    mod: "industrially_plated",
  });
  event.recipes.createFilling("4x industrially_plated:blank_hazard_sign", [
    "create:iron_sheet",
    Fluid.of(`create_dragons_plus:yellow_dye`, 250),
  ]);
  event.recipes.createFilling("4x industrially_plated:blank_prohibition_sign", [
    "create:iron_sheet",
    Fluid.of(`create_dragons_plus:white_dye`, 250),
  ]);
  event.recipes.createFilling("4x industrially_plated:blank_safety_sign", [
    "create:iron_sheet",
    Fluid.of(`create_dragons_plus:green_dye`, 250),
  ]);
  event.recipes.createFilling("4x industrially_plated:blank_instruction_sign", [
    "create:iron_sheet",
    Fluid.of(`create_dragons_plus:blue_dye`, 250),
  ]);
  event.recipes.createFilling("4x industrially_plated:blank_fire_safety_sign", [
    "create:iron_sheet",
    Fluid.of(`create_dragons_plus:red_dye`, 250),
  ]);
  event.recipes.createFilling("industrially_plated:hazard_stripe_block", [
    "minecraft:black_concrete",
    Fluid.of("create_dragons_plus:yellow_dye", 250),
  ]);
  event.recipes.createFilling(
    "industrially_plated:radiation_hazard_stripe_block",
    [
      "minecraft:pink_concrete",
      Fluid.of("create_dragons_plus:yellow_dye", 250),
    ],
  );
  event.stonecutting(
    "industrially_plated:fire_diamond_sign",
    "industrially_plated:blank_instruction_sign",
  );

  // - create nuclear
  // TODO: replace with disel generators bulk fermenting recipe; lots of uranium powder in,
  //       much less distilled out as yellow cake. Makes nuclear require massive setup, thus much harder!
  event.remove({ id: `createnuclear:mixing/uranium_fluid` });
  event.remove({ id: "createnuclear:compacting/uranium_fluid_to_yellowcake" });
  event.recipes.createMixing(Fluid.of("createnuclear:uranium", 250), [
    "createnuclear:uranium_powder",
    Fluid.of("minecraft:water", 250),
  ]);
  event.recipes
    .createMixing(
      [
        "createnuclear:yellowcake",
        CreateItem.of("createnuclear:yellowcake", 0.4),
        "ratatouille:boil_stone",
      ],
      ["ratatouille:boil_stone", Fluid.of(`createnuclear:uranium`, 1000)],
    )
    .heated();

  // - Etched
  event.recipes
    .createCompacting(
      ["etched:blank_music_disc"],
      "createmetallurgy:graphite_blank_mold",
    )
    .heated();

  // - Cluttered
  event.replaceInput(
    { id: "cluttered:salt_pepper_shakers" },
    "minecraft:sugar",
    "#c:salt",
  );

  event.replaceInput(
    { id: "cluttered:gingerbread_bricks" },
    "minecraft:sugar",
    "creategarnished:gingerbread_flour",
  );

  // - Since firetick may be disabled and the best way to make ash is with that, add in another way to get ash
  event.recipes.createSplashing(
    [
      Item.of("supplementaries:ash", 3),
      CreateItem.of("supplementaries:ash", 0.6),
    ],
    "minecraft:charcoal",
  );

  // Remove base void steel recipe
  event.remove({ id: "createutilities:mixing/void_steel_ingot" });
  // not needed; farmers delight stuff is often placable
  event.remove({ input: "cluttered:pastry_plate" });

  // make tinted glass cheaper, add recipe for tinted glass panes
  event.remove({ id: "minecraft:tinted_glass" });
  event.shapeless(Item.of("minecraft:tinted_glass", 2), [
    Ingredient.of("#c:glass_blocks/colorless"),
    "minecraft:amethyst_shard",
  ]);

  event.shaped(
    Item.of("immersive_weathering:tinted_glass_pane", 16),
    ["TTT", "TTT", "   "],
    { T: "minecraft:tinted_glass" },
  );

  // - Remove duplicate recipes
  //scaffolding
  event.remove({ id: "farmersdelight:scaffolding_from_canvas" });
  event.remove({ id: "minecraft:scaffolding" });
  //lever
  event.remove({ id: "minecraft:lever" });

  // crafting recipe for feathers cause string is kinda ez to automate with flax
  event.shaped(Item.of("minecraft:feather", 3), ["  S", " W ", "V  "], {
    S: "minecraft:string",
    W: "minecraft:white_wool",
    V: "minecraft:stick",
  });

  // - Increase cost of echo ingot
  //FIXME: doesnt work
  event.replaceInput(
    { id: "create_deep_dark:create/sequenced_assembly_echo_ingot" },
    "minecraft:netherite_ingot",
    "createutilities:void_steel_ingot",
  );

  // - Remove duplicate seed oils
  event.remove({ output: Fluid.of("electroenergetics:plant_oil") });
  event.remove({ output: Fluid.of("createdieselgenerators:plant_oil") });

  // Recipe for l-shaped gearbox -> normal gearbox
  event.shaped(Item.of("create:gearbox"), [" C ", "CG ", "   "], {
    G: "createutilities:lshaped_gearbox",
    C: "create:cogwheel",
  });

  event.shaped(Item.of("create:gearbox"), ["GC ", "C  ", "   "], {
    G: "createutilities:lshaped_gearbox",
    C: "create:cogwheel",
  });

  // - make brass gearboxes a bit cheaper
  event.replaceInput(
    { id: "create_connected:crafting/kinetics/brass_gearbox" },
    "create:rotation_speed_controller",
    "create:precision_mechanism",
  );

  // - Allow fan dying of white dye into any coloring
  // FIXME: may need to be done in datapack form
  Color.DYE.forEach((color) => {
    event.custom({
      type: "create_dragons_plus:coloring",
      color: `create_dragons_plus:${color}_dye`,
      ingredients: [{ item: "minecraft:white_dye" }],
      results: [{ id: `minecraft:${color}_dye` }],
    });
  });

  // - Bone Block Changes
  event.recipes
    .createCompacting(
      [
        Item.of("minecraft:bone_block", 1),
        CreateItem.of("minecraft:bone_meal", 0.6),
      ],
      [
        Item.of("create_aquatic_ambitions:calcium_rich_powder", 8),
        Fluid.of("minecraft:water", 250),
      ],
    )
    .heated();
  event.remove({ id: "minecraft:bone_meal_from_bone_block" });
  event.recipes.createMilling(
    [
      Item.of("minecraft:bone_meal", 4),
      CreateItem.of("2x minecraft:bone_meal", 0.225),
    ],
    "minecraft:bone_block",
  );

  // - Cotton milling -> brings in line with flax, prob slightly better
  event.recipes.createMilling(
    [
      Item.of("minecraft:string"),
      CreateItem.of("minecraft:string", 0.4),
      CreateItem.of("rusticdelight:cotton_Seeds", 0.2),
    ],
    Item.of("rusticdelight:cotton_ball"),
  );

  // - Additional shapeless recipe for flanged cogwheels; no costs changed
  event.shapeless("bits_n_bobs:small_flanged_cogwheel", [
    "create:shaft",
    Ingredient.of("#minecraft:planks"),
    "minecraft:iron_nugget",
  ]);
  event.shapeless("bits_n_bobs:large_flanged_cogwheel", [
    "create:shaft",
    Ingredient.of("#minecraft:planks"),
    Ingredient.of("#minecraft:planks"),
    "minecraft:iron_nugget",
  ]);
  event.shapeless("bits_n_bobs:large_flanged_cogwheel", [
    "bits_n_bobs:small_flanged_cogwheel",
    Ingredient.of("#minecraft:planks"),
  ]);
  event.shapeless("bits_n_bobs:large_flanged_cogwheel", [
    "create:cogwheel",
    Ingredient.of("#minecraft:planks"),
    "minecraft:iron_nugget",
  ]);
});
