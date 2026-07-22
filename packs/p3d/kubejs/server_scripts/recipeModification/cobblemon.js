ServerEvents.recipes((event) => {
  // huge -> growth
  event.shapeless(
    Item.of("cobblemonsizevariation:growth_essence", 4), //output
    "cobblemonsizevariation:huge_essence",
  );
  //growth -> huge
  event.shapeless(
    "cobblemonsizevariation:huge_essence",
    "4x cobblemonsizevariation:growth_essence",
  );
  // tiny -> shrink
  event.shapeless(
    "4x cobblemonsizevariation:shrink_essence", //output
    "cobblemonsizevariation:tiny_essence",
  );
  //shrink -> tiny
  event.shapeless(
    "cobblemonsizevariation:tiny_essence",
    "4x cobblemonsizevariation:shrink_essence",
  );
  // normal -> growth
  event.shapeless("cobblemonsizevariation:growth_essence", [
    "cobblemonsizevariation:normal_essence",
    Ingredient.of("#chipped:warped_fungus"),
  ]);
  // normal -> shrink
  event.shapeless("cobblemonsizevariation:shrink_essence", [
    "cobblemonsizevariation:normal_essence",
    Ingredient.of("#chipped:crimson_fungus"),
  ]);
  // normal essence filling
  event.recipes.createFilling("cobblemonsizevariation:normal_essence", [
    "minecraft:prismarine_shard",
    Fluid.of("create_enchantment_industry:experience", 90),
  ]);

  // - Exp Candy Automation must be done with create now
  event.remove({
    output: "cobblemon:exp_candy_xs",
    not: { type: "create:mixing" },
  });
  event.recipes
    .createMixing("cobblemon:exp_candy_xs", [
      Fluid.of("create_enchantment_industry:experience", 125),
      "minecraft:honeycomb",
    ])
    .heated();

  //replace all dye fluids from cobblemon_industries with dragons plus.
  //fluids from cobblemon_industries follow pattern id:{color}_fluid; from create_dragons_plus:{color}_dye
  //  inputs must also be 1/4d compared to current; dye is 250mb per solid dye, not 1000mb like it is in cobblemon_industries
  //  remove all recipes with outputs to cobblemon_industries (only dye buckets and liquid)
  //replace liquid -> dye recipe to use boil stone

  // this recipe for some reason uses white dye to dye apricorns yellow
  event.replaceInput(
    { id: "cobblemon_industries:filling/apricorn/yellow_apricorn" },
    Fluid.of(`cobblemon_industries:white_fluid`),
    Fluid.of(`cobblemon_industries:yellow_fluid`),
  );

  Color.DYE.forEach((color) => {
    event.remove({ id: `cobblemon_industries:mixing/dyes/${color}_fluid` });
    event.remove({ input: `cobblemon_industries:${color}_fluid_bucket` });
    // FIXME: these below dont get removed
    event.remove({ id: `bucket_filling:cobblemon_industries/${color}_fluid` });
    event.remove({
      id: `create:fill_minecraft_bucket_with_cobblemon_industries_${color}_fluid`,
    });
  });

  //replace recipes
  Color.DYE.forEach((color) => {
    event.replaceInput(
      "*",
      Fluid.of(`cobblemon_industries:${color}_fluid`, 1000),
      Fluid.of(`create_dragons_plus:${color}_dye`, 250),
      //FIXME: this does not actually repalce fluid quantities values.....
    );
  });

  //modify dye recipes to require boil stone to convert back to dye
  Color.DYE.forEach((color) => {
    event.remove({ id: `create_dragons_plus:mixing/${color}_dye_from_fluid` });
    event.remove({ id: `create_dragons_plus:mixing/${color}_dye_from_item` });
    event.recipes.createMixing(
      [Fluid.of(`create_dragons_plus:${color}_dye`)],
      [`minecraft:${color}_dye`, Fluid.of("minecraft:water", 1000)],
    );
    event.recipes
      .createMixing(
        [`minecraft:${color}_dye`, "ratatouille:boil_stone"],
        [
          "ratatouille:boil_stone",
          Fluid.of(`create_dragons_plus:${color}_dye`, 1000),
        ],
      )
      .heated();
  });

  // - Adjust cost of cobblemon:ancient_origin_ball
  event.replaceInput(
    { output: "cobblemon:ancient_origin_ball" },
    "minecraft:netherite_ingot",
    "cobblemon:black_tumblestone",
  );
  event.replaceInput(
    { output: "cobblemon:ancient_origin_ball" },
    "minecraft:redstone_block",
    "minecraft:redstone",
  );
});
