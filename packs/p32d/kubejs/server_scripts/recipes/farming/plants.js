// Plants, flowers, soils and farm byproducts (bone meal, string).

ServerEvents.recipes((event) => {
  // --- Chipped variants -> vanilla (they spawn naturally; inventory relief) ---
  event.shapeless("minecraft:brown_mushroom", ["#chipped:brown_mushroom"]);
  event.shapeless("minecraft:red_mushroom", ["#chipped:red_mushroom"]);
  event.shapeless("minecraft:warped_fungus", ["#chipped:warped_fungus"]);
  event.shapeless("minecraft:crimson_fungus", ["#chipped:crimson_fungus"]);
  event.shapeless("minecraft:crimson_roots", ["#chipped:crimson_roots"]);
  event.shapeless("minecraft:warped_roots", ["#chipped:warped_roots"]);
  event.shapeless("minecraft:pumpkin", ["#chipped:pumpkin"]);

  // --- Wither roses: enrich flowers, purify back with channeling ---
  enriching(event, "#minecraft:small_flowers", [
    { id: "minecraft:wither_rose", chance: 0.4 },
  ]);
  enriching(event, "#minecraft:tall_flowers", [
    { id: "minecraft:wither_rose", chance: 0.6 },
    { id: "minecraft:wither_rose", chance: 0.4 },
  ]);
  processing(
    event,
    "create_aquatic_ambitions:channeling",
    "minecraft:wither_rose",
    [{ id: "biomeswevegone:rose", chance: 0.2 }],
  );

  // --- Rice: saw cutting yields straw too (matches the FD cutting board) ---
  event.remove({ type: "create:cutting", input: "farmersdelight:rice_panicle" });
  event.recipes.create.cutting(
    ["farmersdelight:rice", "farmersdelight:straw"],
    "farmersdelight:rice_panicle",
  );

  // --- Bamboo block uncrafting ---
  event.shapeless("9x minecraft:bamboo", ["minecraft:bamboo_block"]);

  // --- Bone meal: calcium powder -> bone block -> bone meal ---
  event.remove({ id: "minecraft:bone_meal_from_bone_block" });
  event.recipes.create.compacting(
    ["minecraft:bone_block", CreateItem.of("2x minecraft:bone_meal", 0.6)],
    ["8x create_aquatic_ambitions:calcium_rich_powder"],
  );
  event.recipes.create.milling(
    ["4x minecraft:bone_meal", CreateItem.of("2x minecraft:bone_meal", 0.225)],
    "minecraft:bone_block",
  );

  // --- Cotton milling: in line with flax, prob slightly better ---
  event.recipes.create.milling(
    [
      "minecraft:string",
      CreateItem.of("minecraft:string", 0.67),
      CreateItem.of("rusticdelight:cotton_seeds", 0.4),
    ],
    "rusticdelight:cotton_boll",
  );

  // --- Soils ---
  event.shaped("4x biomeswevegone:peat", ["DM", "MD"], {
    M: "minecraft:mud",
    D: "minecraft:dirt",
  });
  event.shaped("4x biomeswevegone:lush_dirt", ["DP", "PD"], {
    P: "biomeswevegone:peat",
    D: "minecraft:dirt",
  });
});
