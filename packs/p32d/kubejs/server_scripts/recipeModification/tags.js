ServerEvents.tags("item", (event) => {
  event.remove(
    "ratatouille:compostable_items_1to1",
    "farmersdelight:tree_bark",
  );
  event.add(
    "ratatouile:compostable_items_4to1",
    "farmersdelight:tree_bark",
    "corn_delight:corncob",
  );
  event.add("dndecor:industrial_cogwheels", "dndecor:industrial_cogwheel");
  event.add("poinky:non_hand_craftable", ""); // removes all crafting grid recipes

  event.add(
    "c:salt",
    "ratatouille:salt",
    "expandeddelight:salt", //should be no longer obtainable
    "moresnifferflowers:salty_spice",
  );
  event.add(
    "c:buckets",
    "quark:slime_in_a_bucket",
    "creategarnished:peanut_butter_bucket",
    "creategarnished:birch_syrup_bucket",
    "creategarnished:almond_extract_bucket",
    "creategarnished:royal_cinder_bucket",
    "creategarnished:beetroot_juice_bucket",
    "creategarnished:mushroom_slop_bucket",
    "createnuclear:uranium_bucket",
    "createbigcannons:molten_cast_iron_bucket",
    "createbigcannons:molten_bronze_bucket",
    "createbigcannons:molten_steel_bucket",
    "createbigcannons:molten_nethersteel_bucket",
    "aeronautics:levitite_blend_bucket",
    "createpropulsion:turpentine_bucket",
    "createpropulsion:coral_bucket",
    "createpropulsion:oxidizer_bucket",
    "createmetallurgy:molten_iron_bucket",
    "createmetallurgy:molten_gold_bucket",
    "createmetallurgy:molten_copper_bucket",
    "createmetallurgy:molten_zinc_bucket",
    "createmetallurgy:molten_brass_bucket",
    "createmetallurgy:molten_tungsten_bucket",
    "createmetallurgy:molten_void_steel_bucket",
    "createmetallurgy:molten_steel_bucket",
    "createmetallurgy:molten_netherite_bucket",
    "createmetallurgy:molten_lead_bucket",
    "createmetallurgy:molten_obscurium_bucket",
    "createmetallurgy:molten_electrum_bucket",
    "createmetallurgy:molten_bronze_bucket",
    "createmetallurgy:molten_slag_bucket",
    "ratatouille:cocoa_liquor_bucket",
    "ratatouille:cake_batter_bucket",
    "ratatouille:mince_meat_bucket",
    "ratatouille:egg_yolk_bucket",
    "ratatouille:compost_tea_bucket",
    "ratatouille:bio_gas_bucket",
    "ratatouille:compost_residue_fluid_bucket",
    "ratatouille:melon_juice_fluid_bucket",
    "ratatouille_fried_delights:cola_syrup_bucket",
    "ratatouille_fried_delights:sunflower_oil_bucket",
    "ratatouille_fried_delights:mayonnaise_bucket",
  );

  event.add(
    // Remove all recipes within this tag
    "poinky:removed",

    // - Remove recipies for cakes that do not use the cake base from ratatouille
    "createaddition:cake_base",
    "createaddition:cake_base",
    "createaddition:cake_base_baked",

    // - unused sausages
    "mynethersdelight:hoglin_sausage",
    "mynethersdelight:roasted_sausage",

    // - idk seems useless?
    "create_sa:vault_component",
    // - unused salt
    "expandeddelight:salt",

    // unused pancakes
    "rusticdelight:pancake",
    "rusticdelight:pancakes",
    "rusticdelight:honey_pancake",
    "rusticdelight:honey_pancakes",
    "supplementaries:pancake",
    "creategarnished:pancakes",
  );
});

ServerEvents.recipes((event) => {
  // - Disasble ALL crafting of anything in removed tag.
  event.remove({ output: Ingredient.of("#poinky:removed") });

  // - salt modifications
  event.recipes.createMilling(
    [Item.of("ratatouille:salt", 2), CreateItem.of("ratatouille:salt", 0.4)],
    "expandeddelight:salt_rock",
  );
  event.recipes.createMilling(
    [Item.of("ratatouille:salt", 3), CreateItem.of("ratatouille:salt", 0.6)],
    "galosphere:pink_salt_shard",
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
    { input: "mynethersdelight:roasted_sausage" },
    "mynethersdelight:roasted_sausage",
    "ratatouille:sausage",
  );
  event.replaceOutput(
    { output: "ratatouille_fried_delights:hot_dog" },
    "ratatouille_fried_delights:hot_dog",
    "mynethersdelight:hotdog",
  );

  // - change crafting to use tag instead
  event.replaceInput("*", "create:mechanical_pump", "#create:mechanical_pumps");

  // - remove things lsited as non hand craftable
  event.remove({
    output: "#poinky:non_hand_craftable",
    type: "minecraft:crafting_shaped",
  });
});
