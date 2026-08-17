ServerEvents.tags("item", (event) => {
  event.remove("ratatouille_fried_delights:compostable_items_1to1");
  event.add("dndecor:industrial_cogwheels", "dndecor:industrial_cogwheel");
  event.add(
    "poinky:non_hand_craftable",
    "#cobblemon:tier_2_poke_balls",
    "#cobblemon:tier_3_poke_balls",
    "#cobblemon:tier_4_poke_balls",
    "cobblemon:master_ball",
  );

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
    "poinky:removed",
    "#dndecor:containers_decor",
    "#createdeco:shipping_containers", // block tag, not item tag; must be removed by hand
    "create_connected:item_silo",
  );
  Color.DYE.forEach((color) => {
    event.add("poinky:removed", `createdeco:${color}_shipping_container`);
  });
});

ServerEvents.recipes((event) => {
  // - salt modifications
  event.remove({ output: "expandeddelight:salt" });
  event.recipes.createMilling(
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
  // - remove things lsited as non hand craftable
  event.remove({
    output: "#poinky:non_hand_craftable",
    type: "minecraft:crafting_shaped",
  });
  // - change crafting to use tag instead
  event.replaceInput("*", "create:mechanical_pump", "#create:mechanical_pumps");

  // - Disasble crafting of all dndecor and create deco containers; vibrant vaults is preferred.
  event.remove({ output: Ingredient.of("#poinky:removed") });
});
