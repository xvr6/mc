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

  // - Void steel recipes + rebalance
  //remove base recipe
  event.remove({ id: "createutilities:mixing/void_steel_ingot" });
  //add back in recipe
  event.custom({
    type: "createmetallurgy:casting_in_table",
    ingredients: [
      Fluid.of("createmetallurgy:molten_void_steel", 180),
      { item: "createmetallurgy:graphite_ingot_mold" },
    ],
    result: [
      { id: "createutilities:void_steel_ingot" },
      { id: "createmetallurgy:graphite_ingot_mold" },
    ],
  });
});
