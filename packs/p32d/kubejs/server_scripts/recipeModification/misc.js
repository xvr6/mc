ServerEvents.recipes((event) => {
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

  // - Remove duplicate recipes
  //scaffolding
  event.remove({ id: "farmersdelight:scaffolding_from_canvas" });
  event.remove({ id: "minecraft:scaffolding" });

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
  event.recipes.createCompacting(
    [
      Item.of("minecraft:bone_block", 1),
      CreateItem.of("2x minecraft:bone_meal", 0.6),
    ],
    [Item.of("create_aquatic_ambitions:calcium_rich_powder", 8)],
  );
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
      CreateItem.of("minecraft:string", 0.67),
      CreateItem.of("rusticdelight:cotton_seeds", 0.4),
    ],
    Item.of("rusticdelight:cotton_boll"),
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

  //modify dye recipes to require boil stone to convert back to dye
  Color.DYE.forEach((color) => {
    event.remove({ id: `create_dragons_plus:mixing/${color}_dye_from_fluid` });
    event.remove({ id: `create_dragons_plus:mixing/${color}_dye_from_item` });
    //readd, but with boil stone
    //       values increased to 1000 as bandaid fix to previous replacement not working.
    event.recipes.createMixing(
      [Fluid.of(`create_dragons_plus:${color}_dye`)],
      [`minecraft:${color}_dye`, Fluid.of("minecraft:water", 1000)],
    );
    event.recipes
      .createMixing(
        [`minecraft:${color}_dye`, "ratatouille:boil_stone"],
        [
          "ratatouille:boil_stone",
          Fluid.of(`create_dragons_plus:${color}_dye`, 1000),
        ],
      )
      .heated();
  });

  // - Adjustments to magma cream
  event.recipes.createSplashing(
    CreateItem.of("minecraft:slime_ball", 0.6),
    "minecraft:magma_cream",
  );

  event.remove({ id: "createdieselgenerators:basin_fermenting/magma_cream" });
  event.remove({ id: "create_sa:magma_cream_recipe" });

  event.recipes
    .createCompacting(
      [CreateItem.of("minecraft:magma_cream")],
      [Item.of("minecraft:slime_ball", 2)],
    )
    .heated();

  // - Fueling Tank
  // remove base recipes; replace with cheaper recipes
  event.remove({ id: "create_sa:small_fueling_tank_recipe" });
  event.remove({ id: "create_sa:medium_fueling_tank_recipe" });
  event.remove({ id: "create_sa:large_fueling_tank_recipe" });

  //cheaper recipes
  // filling --> Fueling conversions; 1 tank, 2 sheets.
  event.shaped(Item.of("create_sa:small_fueling_tank"), [" S ", " T ", " S "], {
    T: "create_sa:small_filling_tank",
    S: "create:sturdy_sheet",
  });
  event.shaped(
    Item.of("create_sa:medium_fueling_tank"),
    [" S ", " T ", " S "],
    {
      T: "create_sa:medium_filling_tank",
      S: "create:sturdy_sheet",
    },
  );
  event.shaped(Item.of("create_sa:large_fueling_tank"), [" S ", " T ", " S "], {
    T: "create_sa:large_filling_tank",
    S: "create:sturdy_sheet",
  });

  // - simplify and cheapen reicpe for train light blocks
  event.remove({ id: "ctl:ilb_block" });
  event.shaped(Item.of("ctl:ilb_block"), ["   ", "DG ", " A "], {
    D: "minecraft:glowstone_dust",
    A: "minecraft:amethyst_shard",
    G: Ingredient.of("#c:glass_blocks/colorless"),
  });

  event.remove({ id: "ctl:htlb_block" });
  event.shaped(Item.of("ctl:htlb_block"), ["   ", "DG ", "IA "], {
    D: "minecraft:glowstone_dust",
    A: "minecraft:amethyst_shard",
    G: Ingredient.of("#c:glass_blocks/colorless"),
    I: "minecraft:redstone",
  });

  event.shapeless(Item.of("minecraft:bamboo", 9), "minecraft:bamboo_block");

  // shaft recipe overlap
  event.remove({ id: "create:cutting/shaft" });
  event.shapeless("create_connected:shear_pin", "create:shaft");
  event.shapeless("create:shaft", "create_connected:shear_pin");
  event.remove({
    output: "minecraft:suspicious_sand",
    input: "minecraft:paper",
  }); // #FIXME: doesnt work

  // random hanging recipes
  event.remove({ mod: "create_vibrant_vaults" });
  //return to normal tinted glass
  event.stonecutting(
    "minecraft:tinted_glass",
    Ingredient.of("#createframed:tinted/glass"),
  );

  // electroenergetics pole to actual concrete
  event.replaceInput(
    { id: "electroenergetics:crafting/concrete_pole" },
    "minecraft:light_gray_concrete",
    "clayworks:concrete",
  );

  // replace electroenergetics magnet with simulated
  event.replaceInput(
    { input: "electroenergetics:magnet" },
    "electroenergetics:magnet",
    "simulated:redstone_magnet",
  );
  // coal block recipe replace with charcoal
  event.replaceInput(
    { id: "aeronautics:adjustable_burner" },
    "minecraft:coal_block",
    "quark:charcoal_block",
  );

  // resistive heater recipe change
  event.remove({ id: "electroenergetics:crafting/resistive_heater" });
  event.shaped(
    Item.of("electroenergetics:resistive_heater"),
    ["WKW", "CaC", "aia"],
    {
      K: "minecraft:dried_kelp",
      W: "electroenergetics:heavily_insulated_wire",
      C: "electroenergetics:connector",
      a: "create:andesite_alloy",
      i: "create:iron_sheet",
    },
  );

  // change recipe for transformer core lamination due to just how much things already use iron sheets.
  // Also to make transformers a bit more expensive as they should be.
  event.remove({
    id: "electroenergetics:stonecutting/transformer_core_lamination",
  });

  event.stonecutting(
    "2x electroenergetics:transformer_core_lamination",
    "minecraft:iron_trapdoor",
  );

  //bugged spring wire recipe
  event.remove({ id: "createbigcannons:cutting/spring_steel_wire" });

  // - Create Interiors re-dye recipes use nonexistent c:{color}_dyes tags
  Color.DYE.forEach((color) => {
    event.remove({
      id: `interiors:crafting/chair/${color}_chair_from_other_chair`,
    });
    event
      .shapeless(`interiors:${color}_chair`, [
        "#interiors:chairs",
        `#c:dyes/${color}`,
      ])
      .id(`interiors:crafting/chair/${color}_chair_from_other_chair`);

    event.remove({
      id: `interiors:crafting/floor_chair/${color}_floor_chair_from_other_floor_chair`,
    });
    event
      .shapeless(`interiors:${color}_floor_chair`, [
        "#interiors:floor_chairs",
        `#c:dyes/${color}`,
      ])
      .id(
        `interiors:crafting/floor_chair/${color}_floor_chair_from_other_floor_chair`,
      );
  });

  event.custom({
    type: "create_aquatic_ambitions:channeling",
    ingredients: [{ item: "minecraft:ice" }],
    results: [{ id: "biomeswevegone:borealis_ice", chance: 0.8 }],
  });

  /*
- Quicksand production
  - `fluid:quicksand_fluid`; mixing sand + water
  - `fluid:quicksand`; Compacting `quicksand_fluid`
  - `fluid:quicksand`; shapeless conversion to `biomeswevegone:quicksand`
  - `biomeswevegone:red_quicksand`; Standard 8:1 dye recipe
*/

  event.recipes.createMixing(Fluid.of("fluid:quicksand_fluid", 1000), [
    Fluid.of("minecraft:water", 500),
    Item.of("minecraft:sand", 2),
  ]);

  event.recipes.createCompacting(
    [Item.of("fluid:quicksand", 2), CreateItem.of("2x fluid:quicksand", 0.4)],
    Fluid.of("fluid:quicksand_fluid", 1000),
  );

  event.shapeless("fluid:quicksand", "biomeswevegone:quicksand");
  event.shapeless("biomeswevegone:quicksand", "fluid:quicksand");
  event.shaped(
    Item.of("biomeswevegone:red_quicksand", 8),
    ["QQQ", "QDQ", "QQQ"],
    {
      Q: "biomeswevegone:quicksand",
      D: "minecraft:red_dye",
    },
  );

  // - Red Rock; 2x Red Sand + 2x Cobblestone pressing for 8x Red Rock
  event.recipes.createCompacting(
    [Item.of("biomeswevegone:red_rock", 8)],
    [Item.of("minecraft:red_sand", 2), Item.of("minecraft:cobblestone", 2)],
  );

  // - Cracked Sand
  event.smoking("minecraft:sand", "biomeswevegone:cracked_sand");
  event.smoking("minecraft:red_sand", "biomeswevegone:cracked_red_sand");

  // - Peat
  event.shaped(Item.of("biomeswevegone:peat", 4), ["DM ", "MD ", "   "], {
    M: "minecraft:mud",
    D: "minecraft:dirt",
  });
  // - lush dirt

  event.shaped(Item.of("biomeswevegone:lush_dirt", 4), ["DP ", "PD ", "   "], {
    P: "biomeswevegone:peat",
    D: "minecraft:dirt",
  });

  // - Replace cut amethyst with polished amethyst
  event.replaceInput(
    { input: "createfactorycontroller:cut_amethyst" },
    "createfactorycontroller:cut_amethyst",
    "createutilities:polished_amethyst",
  );

  event.replaceInput(
    { input: "createmetallurgy:refractory_mortar" },
    "createmetallurgy:refractory_mortar",
    "minecraft:clay",
  );

  // - Industrial crucible: swap refractory mortar for clay
  // replaceInput doesn't reach into sequenced assembly steps, so remove and re-add
  event.remove({ id: "createmetallurgy:sequenced_assembly/industrial_crucible" });
  const crucible = { item: "createmetallurgy:incomplete_industrial_crucible" };
  const crucibleOut = [{ id: "createmetallurgy:incomplete_industrial_crucible" }];
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "minecraft:deepslate_bricks" },
      results: [{ id: "createmetallurgy:industrial_crucible" }],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [crucible, { item: "minecraft:clay" }],
          results: crucibleOut,
        },
        {
          type: "create:deploying",
          ingredients: [crucible, { tag: "c:plates/obdurium" }],
          results: crucibleOut,
        },
        {
          type: "createmetallurgy:grinding",
          ingredients: [crucible],
          processing_time: 80,
          results: crucibleOut,
        },
        {
          type: "create:filling",
          ingredients: [
            crucible,
            {
              type: "neoforge:single",
              amount: 30,
              fluid: "createmetallurgy:molten_tungsten",
            },
          ],
          results: crucibleOut,
        },
      ],
      transitional_item: { id: "createmetallurgy:incomplete_industrial_crucible" },
    })
    .id("kubejs:sequenced_assembly/industrial_crucible");
});
