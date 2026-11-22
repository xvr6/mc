// Item tags. Pack-specific tags use the `poinky:` namespace:
//   #poinky:removed            every recipe producing these is removed (recipes/global.js) + tooltip
//   **not used**: #poinky:non_hand_craftable shaped crafting recipes producing these are removed
//   #poinky:mechanical_pumps   any pump; replaces create:mechanical_pump in all recipes

ServerEvents.tags("item", (event) => {
  // --- Removed content ---
  event.add(
    "poinky:removed",

    //Duplicate cinamon recipes
    "creategarnished:cinnamon_bark",
    "creategarnished:cinnamon_stick",

    // cake bases that don't use ratatouille's cake base
    "createaddition:cake_base",
    "createaddition:cake_base_baked",

    // unused sausages (replaced by ratatouille:sausage)
    "mynethersdelight:hoglin_sausage",
    "mynethersdelight:roasted_sausage",

    // idk seems useless?
    "create_sa:vault_component",

    // unused salt (#c:salt)
    "expandeddelight:salt",

    // replaced by food grade seed oil (#rusticdelight:cooking_oil, below)
    "rusticdelight:cooking_oil",

    // unused pancakes
    "rusticdelight:pancake",
    "rusticdelight:pancakes",
    "rusticdelight:honey_pancake",
    "rusticdelight:honey_pancakes",
    "supplementaries:pancake",
    "creategarnished:pancakes",

    // replaced by simulated:redstone_magnet in all recipes
    "electroenergetics:magnet",

    // worse 6 way gearbox
    "create_connected:six_way_gearbox",
    "create_connected:vertical_six_way_gearbox",

    // replaced with createutilities:polished_amethyst
    "createfactorycontroller:cut_amethyst",

    // refractory is mostly used for metallurgy's logistics system, which we don't need.
    // Recipes that require refractory mortar use normal clay instead.
    "createmetallurgy:refractory_mortar",
    "createmetallurgy:refractory_mortar_ball",
    "createmetallurgy:ladle_filter",
    "#createmetallurgy:ladle",
    "createmetallurgy:labeling_station",

    // non-functional station
    "create_aeronautics_automated_logistics:train_station",

    // duplicate plates
    "createaddition:zinc_sheet",
    "createcasing:zinc_sheet",
    "createcasing:andesite_sheet",
    "createdeco:industurial_iron_sheet",

    // duplicate light bulbs; electroenergetics:bulb has priority
    "#createmetallurgy:light_bulb",

    // duplicate plant oils (fluid recipes removed in recipes/food/cooking_oil.js)
    "electroenergetics:plant_oil_bucket",
    "createdieselgenerators:plant_oil_bucket",

    // pastry plate not needed (FD foods are placeable), along with its dishes
    "cluttered:pastry_plate",
    "cluttered:blueberry_muffin",
    "cluttered:cinnamon_bun",
    "cluttered:croissant",
    "cluttered:ham_sandwich",
    "cluttered:pancake_stack",
  );

  event.add("poinky:non_hand_craftable", "");

  // --- Unification ---
  event.add(
    "c:salt",
    "ratatouille:salt",
    "expandeddelight:salt", // should be no longer obtainable
    "moresnifferflowers:salty_spice",
  );
  event.add("c:vaults", "create:item_vault", "create_connected:item_silo");
  event.add("c:seeds", "ratatouille_fried_delights:sunflower_seeds");
  // fried foods (Rustic Delight, FD fried rice) use this tag
  event.add(
    "rusticdelight:cooking_oil",
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  );
  event.add(
    "poinky:mechanical_pumps",
    "create:mechanical_pump",
    "fluid:centrifugal_pump",
  );
  event.add("dndecor:industrial_cogwheels", "dndecor:industrial_cogwheel");

  // --- Composting ---
  event.remove(
    "ratatouille:compostable_items_1to1",
    "farmersdelight:tree_bark",
  );
  event.add(
    "ratatouille:compostable_items_4to1",
    "farmersdelight:tree_bark",
    "corn_delight:corncob",
  );

  // --- Botany pots ---
  event.add("botanypots:soil/nether", "netherdescent:blue_netherrack");

  // --- Buckets missing from c:buckets ---
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
});
