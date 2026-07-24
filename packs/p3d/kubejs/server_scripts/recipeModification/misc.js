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
  event.recipes.createPressing(
    ["etched:blank_music_disc"],
    "createmetallurgy:graphite_blank_mold",
  );

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
      Item.of("supplementaries:ash", 4),
      CreateItem.of("2x supplementaries:ash", 0.6),
    ],
    "minecraft:charcoal",
  );
  // TODO: - Mob griefing being off means snow is difficult to farm

  // - Modofications to liquid fuels
  //event.remove({ output: Fluid.of("createaddition:bioethanol") });
  //event.remove({ output: Fluid.of("createaddition:seed_oil") });
  //event.remove({ output: Fluid.of("createdieselgenerators:plant_oil") });
  //event.replaceOutput(
  //  { id: "createdieselgenerators:mixing/biodiesel" },
  //  Fluid.of("createdieselgenerators:biodiesel"),
  //  Fluid.of("createaddition:bioethanol"),
  //);

  // Remove base void steel recipe
  event.remove({ id: "createutilities:mixing/void_steel_ingot" });
  // removed bugged items
  event.remove({ output: "petrolsparts:hydraulic_transmission" });
  event.remove({ output: "petrolsparts:pneumatic_tube" });
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
  event.shaped(Item.of("minecraft:feather", 3), ["  S", " W ", "s  "], {
    S: "minecraft:string",
    W: "minecraft:white_wool",
    s: "minecraft:stick",
  });
  //make void steel
  event.replaceInput(
    { id: "create_deep_dark:create/sequenced_assembly_echo_ingot" },
    "minecraft:netherite_ingot",
    "createutilities:void_steel_ingot",
  );
});
