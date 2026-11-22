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

  // Recipes below that reuse an existing id via .id() replace the original.

  // --- Tinted glass: cheaper ---
  event
    .shapeless("2x minecraft:tinted_glass", [
      "#c:glass_blocks/colorless",
      "minecraft:amethyst_shard",
    ])
    .id("minecraft:tinted_glass");
  // return framed tinted glass to normal tinted glass
  event.stonecutting("minecraft:tinted_glass", "#createframed:tinted/glass");

  // --- Train light blocks: simpler & cheaper ---
  event
    .shaped("ctl:ilb_block", ["DG", " A"], {
      D: "minecraft:glowstone_dust",
      A: "minecraft:amethyst_shard",
      G: "#c:glass_blocks/colorless",
    })
    .id("ctl:ilb_block");
  event
    .shaped("ctl:htlb_block", ["DG", "IA"], {
      D: "minecraft:glowstone_dust",
      A: "minecraft:amethyst_shard",
      G: "#c:glass_blocks/colorless",
      I: "minecraft:redstone",
    })
    .id("ctl:htlb_block");

  // --- Create Interiors: re-dye recipes use nonexistent c:{color}_dyes tags ---
  Color.DYE.forEach((color) => {
    event
      .shapeless(`interiors:${color}_chair`, [
        "#interiors:chairs",
        `#c:dyes/${color}`,
      ])
      .id(`interiors:crafting/chair/${color}_chair_from_other_chair`);
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
  // pastry plate + its dishes: removed via #poinky:removed
  // Reclaimed bricks: smoking instead of smelting, so it no longer overlaps with
  // createdeco's cracked bricks in the furnace (and works with Create bulk smoking)
  event
    .smoking("cluttered:antique_bricks", "minecraft:bricks")
    .xp(0.1)
    .id("cluttered:antique_bricks");

  // --- Duplicate / hanging recipes ---
  // scaffolding
  event.remove({ id: "farmersdelight:scaffolding_from_canvas" });
  event.remove({ id: "minecraft:scaffolding" });
  // random hanging recipes
  event.remove({ mod: "create_vibrant_vaults" });
  // Supplementaries "sus crafting" (sand + any item, e.g. paper -> suspicious sand).
  // Its only listed ingredient is sand, so it has to be removed by id.
  event.remove({ id: "supplementaries:sus_sand" });
});
