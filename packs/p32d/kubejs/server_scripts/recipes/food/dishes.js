// Food & ingredient tweaks: dedupes between food mods and routing through
// ratatouille / garnished processing. (Hotdog/sausage + salt: recipes/global.js)

ServerEvents.recipes((event) => {
  // --- Cinnamon: Expanded Delight over Garnished ---
  // removals done via tags
  event.remove({ id: "creategarnished:crafting/gingerbread_flour" });
  event.shapeless("2x creategarnished:gingerbread_flour", [
    "creategarnished:ginger_root",
    "creategarnished:pine_nut_flour",
    "2x expandeddelight:cinnamon",
  ]);

  // --- Pasta: only ratatouille squeezing ---
  event.remove({
    not: { type: "ratatouille:squeezing" },
    output: "farmersdelight:raw_pasta",
  });

  // --- Chocolate bars: only from ratatouille molds ---
  event.remove({
    not: { input: "ratatouille:chocolate_mold_solid" },
    output: "create:bar_of_chocolate",
  });

  // --- Butter from garnished cream ---
  event.remove({ output: "ratatouille_fried_delights:butter" });
  event.recipes.create.compacting(
    ["ratatouille_fried_delights:butter"],
    ["creategarnished:cream_block", Fluid.of("minecraft:milk", 250)],
  );

  // --- Pie crust ---
  event.remove({ output: "farmersdelight:pie_crust" });
  event.recipes.create.compacting(
    ["farmersdelight:pie_crust"],
    ["3x #c:flours", Fluid.of("minecraft:milk", 250)],
  );

  // --- Pancakes ---
  // Rustic Delight pancake stacks must start from a ratatouille_fried_delights pancake
  event.remove({
    output: "rusticdelight:pumpkin_pancakes",
    not: { input: "rusticdelight:pumpkin_pancake" },
  });
  event.shapeless("rusticdelight:pumpkin_pancake", [
    "ratatouille_fried_delights:pancake",
    "farmersdelight:pumpkin_slice",
  ]);

  event.remove({
    output: "rusticdelight:vegetable_pancakes",
    not: { input: "rusticdelight:vegetable_pancake" },
  });
  event.shapeless("rusticdelight:vegetable_pancake", [
    "ratatouille_fried_delights:pancake",
    "#c:foods/vegetable",
  ]);

  event.remove({
    output: "rusticdelight:cherry_blossom_pancakes",
    not: { input: "rusticdelight:cherry_blossom_pancake" },
  });
  event.shapeless("rusticdelight:cherry_blossom_pancake", [
    "ratatouille_fried_delights:pancake",
    "#rusticdelight:cherry_blossom_ingredients",
  ]);

  event.remove({
    output: "rusticdelight:chocolate_pancakes",
    not: { input: "rusticdelight:chocolate_pancake" },
  });
  event.recipes.create.filling("rusticdelight:chocolate_pancake", [
    "ratatouille_fried_delights:pancake",
    Fluid.of("create:chocolate", 250),
  ]);

  // --- Fried Delights ---
  event.replaceInput(
    { output: "ratatouille_fried_delights:breaded_onion_rings" },
    "farmersdelight:onion",
    "someassemblyrequired:sliced_onion",
  );

  // --- Frozen treats: Dragons+ freezing instead of ratatouille's frozen block ---
  event.remove({ id: "ratatouille:crafting/frozen_block" });
  event.remove({ id: "create:freezing/melon_popsicle_mold_filled" });
  event.remove({ id: "create:freezing/chocolate_mold_filled" });
  processing(
    event,
    "create_dragons_plus:freezing",
    "ratatouille:melon_popsicle_mold_filled",
    [{ id: "ratatouille:melon_popsicle_mold_solid" }],
  );
  processing(
    event,
    "create_dragons_plus:freezing",
    "ratatouille:chocolate_mold_filled",
    [{ id: "ratatouille:chocolate_mold_solid" }],
  );
});
