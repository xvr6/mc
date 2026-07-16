global.stones = (event) => {
  //replaces removed cinnamon recipe eith expanded delight
  event.shapeless(
    Item.of("cobblemonsizevariation:growth_essence", 4), //output
    "cobblemonsizevariation:huge_essence",
  );

  event.shapeless(
    "4x cobblemonsizevariation:shrink_essence", //output
    "cobblemonsizevariation:tiny_essence",
  );

  event.shapeless("cobblemonsizevariation:growth_essence", [
    "cobblemonsizevariation:normal_essence",
    Ingredient.of("#chipped:warped_fungus"),
  ]);

  event.shapeless("cobblemonsizevariation:shrink_essence", [
    "cobblemonsizevariation:normal_essence",
    Ingredient.of("#chipped:crimson_fungus"),
  ]);

  event.recipes.createFilling("cobblemonsizevariation:normal_essence", [
    Fluid.of("create_enchantment_industry:experience", 250),
    "minecraft:prismarine_shard",
  ]);
};
