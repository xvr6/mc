global.additions = (event) => {
  //replaces removed cinnamon recipe eith expanded delight
  event.shapeless(
    Item.of("creategarnished:gingerbread_flour", 2), //output
    [
      "creategarnished:ginger_root",
      "creategarnished:pine_nut_flour",
      "2x expandeddelight:cinnamon",
    ],
  );

  // - Readd cake recipes
  event.recipes.createFilling("createaddition:chocolate_cake", [
    "ratatouille:cake_base",
    Fluid.of("create:chocolate", 500),
  ]);
  // add in cake bases
  event.recipes.createCompacting(
    Item.of("create_enchantment_industry:experience_cake_base", 4),
    "ratatouille:cake_base",
    "minecraft:lapis_lazuli",
  );
  event.recipes.createCompacting(
    Item.of("create:blaze_cake_base", 4),
    "ratatouille:cake_base",
    "create:cinder_flour",
  );
  event.recipes
    .createCompacting(
      Item.of("create_deep_dark:echo_cake_base", 4),
      "ratatouille:cake_base",
      "create_deep_dark:sculk_flour",
    )
    .heated();
};
