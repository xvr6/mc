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

  // - Readd cake recipe no longer accessable
  event.recipes.createFilling("createaddition:chocolate_cake", [
    "ratatouille:cake_base",
    Fluid.of("create:chocolate", 500),
  ]);

  //remove all ways to make cake but select 2
  event.remove({
    not: { id: "farmersdelight:cake_from_slices" },
    not: { id: "ratatouille:filling/cake" },
    output: "minecraft:cake",
  });
  // add in create cake bases
  event.recipes.createCompacting(
    [
      Item.of("create_enchantment_industry:experience_cake_base", 2),
      CreateItem.of("create_enchantment_industry:experience_cake_base", 0.75),
    ],

    ["ratatouille:cake_base", "2x minecraft:lapis_lazuli"],
  );
  // blaze cake
  event.recipes.createCompacting(
    [
      Item.of("create:blaze_cake_base", 2),
      CreateItem.of("create:blaze_cake_base", 0.75),
    ],
    ["ratatouille:cake_base", "2x create:cinder_flour"],
  );
  // echo cake
  event.recipes
    .createCompacting(
      [
        Item.of("create_deep_dark:echo_cake_base", 2),
        CreateItem.of("create_deep_dark:echo_cake_base", 0.75),
      ],
      ["ratatouille:cake_base", "2x create_deep_dark:sculk_flour"],
    )
    .heated();

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

  // - Remove recipies for cakes that do not use the cake base from ratatouille
  event.remove({ output: "createaddition:cake_base" });
  event.remove({ input: "createaddition:cake_base" });
  event.remove({ input: "createaddition:cake_base_baked" });
  //evil....... :)
  event.remove({ output: "create_deep_dark:echo_cake_base" });
  event.remove({ output: "create:blaze_cake_base" });
  event.remove({ output: "create_enchantment_industry:experience_cake_base" });

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
  //unobtainable pancakes
  event.remove({ output: "rusticdelight:pancake" });
  event.remove({ output: "rusticdelight:pancakes" });
  event.remove({ output: "rusticdelight:honey_pancake" });
  event.remove({ output: "rusticdelight:honey_pancakes" });
  event.remove({ output: "supplementaries:pancake" });
  event.remove({ output: "creategarnished:pancakes" });

  event.remove({ output: "farmersdelight:pie_crust" });
  event.recipes.createCompacting(
    ["farmersdelight:pie_crust"],
    [Ingredient.of("#c:flours", 3), Fluid.of("minecraft:milk", 250)],
  );

  // - Fried Delights adjustments/priority/compat;
  event.replaceInput(
    { id: "ratatouille_fried_delights:coating/onion_coating" },
    "farmersdelight:onion",
    "someassemblyrequired:sliced_onion",
  );
  //change cooking oils; done in combination with language changes in client
  event.replaceInput(
    "*",
    "rusticdelight:cooking_oil",
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  );

  event.recipes.createEmptying(
    [
      "minecraft:glass_bottle",
      Fluid.of("ratatouille_fried_delights:sunflower_oil", 125),
    ],
    "ratatouille:melon_juice_fluid_bucket",
  );
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
});
