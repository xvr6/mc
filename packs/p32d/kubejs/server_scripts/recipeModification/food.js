ServerEvents.recipes((event) => {
  // - replaces removed cinnamon recipe with expanded delight
  event.shapeless(
    Item.of("creategarnished:gingerbread_flour", 2), //output
    [
      "creategarnished:ginger_root",
      "creategarnished:pine_nut_flour",
      "2x expandeddelight:cinnamon",
    ],
  );

  // - Removing duplicate cinnamon bark
  event.remove({ output: "creategarnished:cinnamon_bark" });
  event.remove({ output: "creategarnished:cinnamon_stick" });
  event.remove({ id: "creategarnished:crafting/gingerbread_flour" });

  // - Removing all pasta recipes but garnished
  event.remove({
    not: { type: "ratatouille:squeezing" },
    output: "farmersdelight:raw_pasta",
  });

  event.remove({
    not: { input: "ratatouille:chocolate_mold_solid" },
    output: "create:bar_of_chocolate",
  });

  // - Hotdog Adjustments
  event.replaceInput(
    { id: "mynethersdelight:crafting/hotdog" },
    "mynethersdelight:roasted_sausage",
    "ratatouille:sausage",
  );
  event.replaceOutput(
    { output: "ratatouille_fried_delights:hot_dog" },
    "ratatouille_fried_delights:hot_dog",
    "mynethersdelight:hotdog",
  );
  event.remove({ output: "mynethersdelight:hoglin_sausage" });
  event.remove({ output: "mynethersdelight:roasted_sausage" });

  // - Butter + cream compat
  event.remove({ output: "ratatouille_fried_delights:butter" });
  event.recipes.createCompacting(
    ["ratatouille_fried_delights:butter"],
    ["creategarnished:cream_block", Fluid.of("minecraft:milk", 250)],
  );

  // - Pancake Adjustments
  // Modify all pancake recipies from rustic delight to require ratatouille_fried_delights pancake first
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
  event.recipes.createFilling("rusticdelight:chocolate_pancake", [
    "ratatouille_fried_delights:pancake",
    Fluid.of("create:chocolate", 250),
  ]);
  event.remove({ output: "farmersdelight:pie_crust" });
  event.recipes.createCompacting(
    ["farmersdelight:pie_crust"],
    [Ingredient.of("#c:flours", 3), Fluid.of("minecraft:milk", 250)],
  );

  // - Fried Delights adjustments/priority/compat;
  event.replaceInput(
    { output: "ratatouille_fried_delights:breaded_onion_rings" },
    "farmersdelight:onion",
    "someassemblyrequired:sliced_onion",
  );
  // change cooking oils; done in combination with language changes in client
  event.replaceInput(
    { input: "rusticdelight:cooking_oil" },
    "rusticdelight:cooking_oil",
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  );
  // FIXME: NONE of the above work
  // bandaid fix:
  event.shapeless("rusticdelight:cooking_oil", [
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  ]);

  event.remove({ output: "rusticdelight:cooking_oil" });

  event.remove({ id: "ratatouille_fried_delights:compacting/sunflower_oil" });
  event.recipes
    .createMixing(
      [
        Fluid.of("ratatouille_fried_delights:sunflower_oil", 125),
        "ratatouille:boil_stone",
      ],
      ["ratatouille:boil_stone", Fluid.of(`createaddition:seed_oil`, 500)],
    )
    .heated();

  event.recipes.createEmptying(
    [
      "minecraft:glass_bottle",
      Fluid.of("ratatouille_fried_delights:sunflower_oil", 125),
    ],
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  );

  // - Since chipped mushrooms, pumpkins, spawn naturally, add in shapeless crafting for turning them into normal variants for inventory relief
  event.shapeless("minecraft:brown_mushroom", [
    Ingredient.of("#chipped:brown_mushroom"),
  ]);
  event.shapeless("minecraft:red_mushroom", [
    Ingredient.of("#chipped:red_mushroom"),
  ]);
  event.shapeless("minecraft:warped_fungus", [
    Ingredient.of("#chipped:warped_fungus"),
  ]);
  event.shapeless("minecraft:crimson_fungus", [
    Ingredient.of("#chipped:crimson_fungus"),
  ]);
  event.shapeless("minecraft:crimson_roots", [
    Ingredient.of("#chipped:crimson_roots"),
  ]);
  event.shapeless("minecraft:warped_roots", [
    Ingredient.of("#chipped:warped_roots"),
  ]);
  event.shapeless("minecraft:pumpkin", [Ingredient.of("#chipped:pumpkin")]);
});
