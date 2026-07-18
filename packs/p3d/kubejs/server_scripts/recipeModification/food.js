ServerEvents.tags("item", (event) => {
  event.add(
    "c:salt",
    "ratatouille:salt",
    "expandeddelight:salt",
    //"moresnifferflowers:salty_spice",
  );
});
// - salt modifications
ServerEvents.recipes((event) => {
  event.remove({ output: "expandeddelight:salt" });
  event.recipes.createCrushing(
    [Item.of("ratatouille:salt", 3), CreateItem.of("ratatouille:salt", 0.4)],
    "expandeddelight:salt_rock",
  );
  event.replaceInput(
    { input: "expandeddelight:salt" },
    "expandeddelight:salt",
    Ingredient.of("#c:salt"),
  );
  event.replaceInput(
    { input: "ratatouille:salt" },
    "ratatouille:salt",
    "#c:salt",
  );
  event.replaceInput(
    { id: "cluttered:salt_pepper_shakers" },
    "minecraft:sugar",
    "#c:salt",
  );

  //replaces removed cinnamon recipe eith expanded delight
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

  // add in create cake bases
  event.recipes.createCompacting(
    [
      Item.of("create_enchantment_industry:experience_cake_base", 2),
      CreateItem.of("create_enchantment_industry:experience_cake_base", 0.6),
      CreateItem.of("create_enchantment_industry:experience_cake_base", 0.2),
    ],

    ["ratatouille:cake_base", "2x minecraft:lapis_lazuli"],
  );
  // blaze cake
  event.recipes.createCompacting(
    [
      Item.of("create:blaze_cake_base", 2),
      CreateItem.of("create:blaze_cake_base", 0.6),
      CreateItem.of("create:blaze_cake_base", 0.2),
    ],
    ["ratatouille:cake_base", "2x create:cinder_flour"],
  );
  // echo cake
  event.recipes
    .createCompacting(
      [
        Item.of("create_deep_dark:echo_cake_base", 2),
        CreateItem.of("create_deep_dark:echo_cake_base", 0.6),
        CreateItem.of("create_deep_dark:echo_cake_base", 0.2),
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

  //FIXME: was removing all ways to craft chcocolate
  //- Remove any recipes for chocolate that dont use the mold
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
});
