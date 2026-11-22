// Decorative blocks & furniture.

ServerEvents.recipes((event) => {
  // --- Industrially Plated: Create filling with liquid dyes ---
  event.remove({
    not: { type: "minecraft:stonecutting" },
    mod: "industrially_plated",
  });
  [
    ["blank_hazard_sign", "yellow"],
    ["blank_prohibition_sign", "white"],
    ["blank_safety_sign", "green"],
    ["blank_instruction_sign", "blue"],
    ["blank_fire_safety_sign", "red"],
  ].forEach(([sign, color]) => {
    event.recipes.create.filling(`4x industrially_plated:${sign}`, [
      "create:iron_sheet",
      Fluid.of(`create_dragons_plus:${color}_dye`, 250),
    ]);
  });
  event.recipes.create.filling("industrially_plated:hazard_stripe_block", [
    "minecraft:black_concrete",
    Fluid.of("create_dragons_plus:yellow_dye", 250),
  ]);
  event.recipes.create.filling(
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

  // --- Tinted glass: cheaper ---
  event.remove({ id: "minecraft:tinted_glass" });
  event.shapeless("2x minecraft:tinted_glass", [
    "#c:glass_blocks/colorless",
    "minecraft:amethyst_shard",
  ]);
  // return framed tinted glass to normal tinted glass
  event.stonecutting("minecraft:tinted_glass", "#createframed:tinted/glass");

  // --- Train light blocks: simpler & cheaper ---
  event.remove({ id: "ctl:ilb_block" });
  event.shaped("ctl:ilb_block", ["DG", " A"], {
    D: "minecraft:glowstone_dust",
    A: "minecraft:amethyst_shard",
    G: "#c:glass_blocks/colorless",
  });
  event.remove({ id: "ctl:htlb_block" });
  event.shaped("ctl:htlb_block", ["DG", "IA"], {
    D: "minecraft:glowstone_dust",
    A: "minecraft:amethyst_shard",
    G: "#c:glass_blocks/colorless",
    I: "minecraft:redstone",
  });

  // --- Create Interiors: re-dye recipes use nonexistent c:{color}_dyes tags ---
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

  // --- Cluttered ---
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
  // not needed; farmers delight stuff is often placeable
  event.remove({ input: "cluttered:pastry_plate" });

  // --- Duplicate / hanging recipes ---
  // scaffolding
  event.remove({ id: "farmersdelight:scaffolding_from_canvas" });
  event.remove({ id: "minecraft:scaffolding" });
  // random hanging recipes
  event.remove({ mod: "create_vibrant_vaults" });
  // FIXME: doesn't work
  event.remove({
    output: "minecraft:suspicious_sand",
    input: "minecraft:paper",
  });
});
