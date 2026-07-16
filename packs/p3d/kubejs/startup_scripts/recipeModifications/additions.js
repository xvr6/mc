global.additions = (event) => {
  global.stones(event);
  global.miscAdditions(event);
  global.enriching(event);
  global.cobblemonAdditions(event);
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
};
