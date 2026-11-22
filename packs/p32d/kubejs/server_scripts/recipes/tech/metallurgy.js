// Metals & metalworking: Create Metallurgy, tungsten, void steel, echo.

ServerEvents.recipes((event) => {
  // --- Tungsten: ingot -> sheet -> wire -> spool ---
  // tungsten sheet actually has a use now
  event.remove({ output: "createmetallurgy:tungsten_sheet" });
  event.recipes.create.pressing(
    "createmetallurgy:tungsten_sheet",
    "createmetallurgy:tungsten_ingot",
  );
  event.recipes.create.cutting(
    ["2x createmetallurgy:tungsten_wire"],
    "createmetallurgy:tungsten_sheet",
  );
  event.replaceInput(
    { id: "createmetallurgy:crafting/materials/tungsten_wire" },
    "createmetallurgy:tungsten_ingot",
    "createmetallurgy:tungsten_sheet",
  );
  // tungsten wire spool uses an empty spool; parity with electroenergetics
  event.replaceInput(
    { id: "createmetallurgy:crafting/materials/tungsten_wire_spool" },
    "minecraft:stick",
    "electroenergetics:empty_spool",
  );

  // --- Industrial crucible: refractory mortar -> clay ---
  // replaceInput doesn't reach into sequenced assembly steps, so remove and re-add
  event.remove({
    id: "createmetallurgy:sequenced_assembly/industrial_crucible",
  });
  const crucible = { item: "createmetallurgy:incomplete_industrial_crucible" };
  const crucibleOut = [
    { id: "createmetallurgy:incomplete_industrial_crucible" },
  ];
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
      transitional_item: {
        id: "createmetallurgy:incomplete_industrial_crucible",
      },
    })
    .id("kubejs:sequenced_assembly/industrial_crucible");

  // --- Void steel: remove base recipe ---
  event.remove({ id: "createutilities:mixing/void_steel_ingot" });

  // --- Echo ingot: void steel instead of netherite ---
  // The original uses an old result format KubeJS can't parse, so replaceInput can't
  // reach it. Re-added under the same id (replaces it); steps match the original.
  const voidSteel = { item: "createutilities:void_steel_ingot" };
  const voidSteelOut = [{ id: "createutilities:void_steel_ingot" }];
  const fluid = (id, amount) => ({
    type: "neoforge:single",
    amount: amount,
    fluid: id,
  });
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: voidSteel,
      loops: 5,
      results: [{ id: "create_deep_dark:echo_ingot" }],
      sequence: [
        {
          type: "create:filling",
          ingredients: [voidSteel, fluid("minecraft:lava", 250)],
          results: voidSteelOut,
        },
        {
          type: "create:pressing",
          ingredients: [voidSteel],
          results: voidSteelOut,
        },
        {
          type: "create:filling",
          ingredients: [voidSteel, fluid("create_deep_dark:molten_echo", 50)],
          results: voidSteelOut,
        },
        {
          type: "create:deploying",
          ingredients: [voidSteel, { item: "minecraft:blaze_powder" }],
          results: voidSteelOut,
        },
        {
          type: "create:pressing",
          ingredients: [voidSteel],
          results: voidSteelOut,
        },
      ],
      transitional_item: { id: "createutilities:void_steel_ingot" },
    })
    .id("create_deep_dark:create/sequenced_assembly_echo_ingot");

  // --- Etched blank discs from graphite molds ---
  event.recipes.create
    .compacting(
      ["etched:blank_music_disc"],
      ["createmetallurgy:graphite_blank_mold"],
    )
    .heated();

  // --- Big Cannons: bugged spring wire recipe ---
  event.remove({ id: "createbigcannons:cutting/spring_steel_wire" });
});
