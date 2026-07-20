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

  // - Void steel recipes + rebalance
  //remove base recipe
  event.remove({ id: "createutilities:mixing/void_steel_ingot" });

  event.remove({ output: "petrolsparts:hydraulic_transmission" });
  event.remove({ output: "petrolsparts:pneumatic_tube" });
  //add back in recipe
  //FIXME: unsure how this recipe is formatted.
  // https://github.com/Lucreeper74/Create-Metallurgy/blob/mc1.21.1/dev/src/generated/resources/data/createmetallurgy/recipe/casting_in_table/void_steel/ingot.json
  // for now, done with datapack
  /*  event.custom({
    type: "createmetallurgy:casting_in_table",
    ingredients: [
      Fluid.of("createmetallurgy:molten_void_steel", 180),
      { item: "createmetallurgy:graphite_ingot_mold" },
    ],
    result: [
      { id: "createutilities:void_steel_ingot" },
      {
        "createmetalurgy:casting_output":
          "createmetallurgy:graphite_ingot_mold",
      },
    ],
  }); */
});
