// Botany Pots 21.1.x (MC 1.21.1) has no KubeJS recipe schema anymore;
// so recipes are plain JSON registered with event.custom().

// DISCLAIMER: This was claude-assisted due to the mass scale modification done

const path = (id) => id.replace(":", "/");

// Nylium (incl. Nether Descent's) or any nether soil, same as vanilla fungi.
const NETHER = {
  type: "bookshelf:either",
  ingredients: [
    { type: "bookshelf:block_tag", tag: "minecraft:nylium" },
    { tag: "botanypots:soil/nether" },
  ],
};

// [sapling, soil override (optional)]
const SAPLINGS = [
  ["minecraft:poplar_sapling"],
  ["minecraft:pale_oak_sapling"],
  ["cluttered:willow_sapling"],
  ["cluttered:poplar_sapling"],
  ["cluttered:crabapple_sapling"],
  ["cluttered:sycamore_sapling"],
  ["cluttered:fluorescent_maple_sapling"],
  ["expandeddelight:cinnamon_sapling"],

  ["netherdescent:arisian_sapling", NETHER],
  ["netherdescent:sythian_fungus", NETHER],
  ["netherdescent:wailing_fungus", NETHER],
  ["netherdescent:embur_wart", NETHER], // grows Embur Pedu

  ["ratatouille_fried_delights:cola_sapling"],
];

// [block, output item, seed item (when not the block's own item)]
const PLANTS = [
  ["minecraft:cactus_flower", "minecraft:cactus_flower"],
  ["minecraft:closed_eyeblossom", "minecraft:closed_eyeblossom"],
  ["minecraft:wildflowers", "minecraft:wildflowers"],
  ["minecraft:vine", "minecraft:vine"],
  ["minecraft:hanging_roots", "minecraft:hanging_roots"],

  // No seed: the fruit is planted directly and drops more of itself.
  [
    "biomeswevegone:soul_fruit",
    "biomeswevegone:soul_fruit",
    "biomeswevegone:soul_fruit",
  ],
  [
    "biomeswevegone:pale_pumpkin_stem",
    "biomeswevegone:pale_pumpkin",
    "biomeswevegone:pale_pumpkin_seeds",
  ],
  [
    "biomeswevegone:blue_glowcane",
    "biomeswevegone:blue_glowcane_shoot",
    "biomeswevegone:blue_glowcane_shoot",
  ],
  [
    "biomeswevegone:green_glowcane",
    "biomeswevegone:green_glowcane_shoot",
    "biomeswevegone:green_glowcane_shoot",
  ],
  [
    "biomeswevegone:red_glowcane",
    "biomeswevegone:red_glowcane_shoot",
    "biomeswevegone:red_glowcane_shoot",
  ],
  [
    "biomeswevegone:yellow_glowcane",
    "biomeswevegone:yellow_glowcane_shoot",
    "biomeswevegone:yellow_glowcane_shoot",
  ],

  ["quark:glow_shroom", "quark:glow_shroom"],
  ["friendsandfoes:buttercup", "friendsandfoes:buttercup"],
  ["ribbits:swamp_daisy", "ribbits:swamp_daisy"],

  ["unusualend:chorus_fungus", "unusualend:chorus_fungus"],
  ["unusualend:flowering_purpur_grass", "unusualend:flowering_purpur_grass"], // "Flowering Chorus Grass"
  ["unusualend:shiny_spirea", "unusualend:shiny_spirea"],
  ["unusualend:crystal_flower", "unusualend:crystal_flower"],

  ["netherdescent:arisian_blossom", "netherdescent:arisian_blossom"],
  [
    "netherdescent:tall_arisian_dandelions",
    "netherdescent:tall_arisian_dandelions",
  ],
  ["netherdescent:arisian_dandelions", "netherdescent:arisian_dandelions"],
  ["netherdescent:embur_lily", "netherdescent:embur_lily"],
  ["netherdescent:arisian_sprouts", "netherdescent:arisian_sprouts"],
  ["netherdescent:tall_arisian_sprouts", "netherdescent:tall_arisian_sprouts"],
  ["netherdescent:arisian_tangle_roots", "netherdescent:arisian_tangle_roots"],
  ["netherdescent:embur_roots", "netherdescent:embur_roots"],
  ["netherdescent:tall_embur_roots", "netherdescent:tall_embur_roots"],
  ["netherdescent:embur_sprouts", "netherdescent:embur_sprouts"],
  ["netherdescent:embur_gel_vines", "netherdescent:embur_gel_vines"],
  ["netherdescent:embur_hanging_moss", "netherdescent:embur_hanging_moss"],
  ["netherdescent:embur_cave_moss", "netherdescent:embur_cave_moss"],
  ["netherdescent:fungal_bulbs", "netherdescent:fungal_bulbs"],
  ["netherdescent:sythian_roots", "netherdescent:sythian_roots"],
  [
    "netherdescent:hanging_sythian_roots",
    "netherdescent:hanging_sythian_roots",
  ],
  ["netherdescent:sythian_sprouts", "netherdescent:sythian_sprouts"],
  ["netherdescent:sythian_stalk", "netherdescent:sythian_stalk"],
  ["netherdescent:tall_crimson_fungi", "netherdescent:tall_crimson_fungi"],
  ["netherdescent:tall_crimson_roots", "netherdescent:tall_crimson_roots"],
  ["netherdescent:thorn_sprout", "netherdescent:thorn_sprout"],
  ["netherdescent:wailing_bulb_blossom", "netherdescent:wailing_bulb_blossom"],
  ["netherdescent:wailing_gills", "netherdescent:wailing_gills"],
  ["netherdescent:wailing_grass", "netherdescent:wailing_grass"],
  ["netherdescent:wailing_vines", "netherdescent:wailing_vines"],
  [
    "netherdescent:crimson_berry_bush",
    "netherdescent:crimson_berries",
    "netherdescent:crimson_berries",
  ],

  ["corn_delight:corn_crop", "corn_delight:corn", "corn_delight:corn_seeds"],

  [
    "expandeddelight:asparagus_crop",
    "expandeddelight:asparagus",
    "expandeddelight:asparagus_seeds",
  ],
  [
    "expandeddelight:sweet_potato_crop",
    "expandeddelight:sweet_potato",
    "expandeddelight:sweet_potato",
  ],
  [
    "expandeddelight:chili_pepper_crop",
    "expandeddelight:chili_pepper",
    "expandeddelight:chili_pepper_seeds",
  ],
  [
    "expandeddelight:peanut_crop",
    "expandeddelight:peanut",
    "expandeddelight:peanut",
  ],
  [
    "expandeddelight:cranberry_plant",
    "expandeddelight:cranberries",
    "expandeddelight:cranberries",
  ],

  // Wild crops: the wild plant itself is the seed, yields the produce.
  ["expandeddelight:wild_asparagus", "expandeddelight:asparagus"],
  ["expandeddelight:wild_chili_pepper", "expandeddelight:chili_pepper"],
  ["expandeddelight:wild_peanuts", "expandeddelight:peanut"],
  ["expandeddelight:wild_sweet_potato", "expandeddelight:sweet_potato"],
  ["corn_delight:wild_corn", "corn_delight:corn"],
  ["minersdelight:wild_cave_carrots", "minersdelight:cave_carrot"],

  // Miner's Delight
  [
    "minersdelight:cave_carrots",
    "minersdelight:cave_carrot",
    "minersdelight:cave_carrot",
  ],
  ["minersdelight:gossypium", "minersdelight:gossypium"],

  // My Nether's Delight
  [
    "mynethersdelight:powdery_cannon",
    "mynethersdelight:bullet_pepper",
    "mynethersdelight:powder_cannon",
  ],
  ["mynethersdelight:crimson_fungus_colony", "minecraft:crimson_fungus"],
  ["mynethersdelight:warped_fungus_colony", "minecraft:warped_fungus"],

  // Ender's Delight
  [
    "endersdelight:amberveil_mushroom",
    "endersdelight:amberveil",
    "endersdelight:amberveil",
  ],
  [
    "endersdelight:chorusflame_bush",
    "endersdelight:chorusflame",
    "endersdelight:chorusflame",
  ],
  [
    "endersdelight:ethereal_saffron_bush",
    "endersdelight:ethereal_saffron",
    "endersdelight:ethereal_saffron",
  ],
  [
    "endersdelight:voidpepper_bush",
    "endersdelight:voidpepper",
    "endersdelight:voidpepper",
  ],

  // Jaden's Nether Expansion
  ["netherexp:sorroweed", "netherexp:sorroweed"],
  ["netherexp:soul_torchflower", "netherexp:soul_torchflower"],
  ["netherexp:cerebrage_kale", "netherexp:cerebrage_kale"],
  ["netherexp:twisting_ivy", "netherexp:twisting_ivy"],
  ["netherexp:weeping_ivy", "netherexp:weeping_ivy"],
  ["netherexp:crimson_sprouts", "netherexp:crimson_sprouts"],
  ["netherexp:warped_wart", "netherexp:warped_wart"],
  ["netherexp:crimson_sporeshroom", "netherexp:crimson_sporeshroom"],
  ["netherexp:warped_sporeshroom", "netherexp:warped_sporeshroom"],
  ["netherexp:nether_wart_beard", "netherexp:nether_wart_beard"],
  ["netherexp:warped_wart_beard", "netherexp:warped_wart_beard"],

  // Galosphere
  ["galosphere:lichen_cordyceps", "galosphere:lichen_cordyceps"],
  ["galosphere:lichen_roots", "galosphere:lichen_roots"],
  ["galosphere:bowl_lichen", "galosphere:bowl_lichen"],

  // Unusual End
  ["unusualend:chorus_cane", "unusualend:chorus_cane"],
  ["unusualend:chorus_roots", "unusualend:chorus_roots"],
  ["unusualend:endstone_sprouts", "unusualend:endstone_sprouts"],
  ["unusualend:warped_sprouts", "unusualend:warped_sprouts"],
  [
    "unusualend:gloopilon_stem",
    "unusualend:gloopilon_slice",
    "unusualend:gloopilon_seeds",
  ],
  ["unusualend:gloopy_bush", "unusualend:gloopy_bush"],
  ["unusualend:gloopy_tendrils", "unusualend:gloopy_tendrils"],
  ["unusualend:warped_bush", "unusualend:warped_bush"],
  ["unusualend:small_warped_algae", "unusualend:small_warped_algae"],
  ["unusualend:small_warped_squash", "unusualend:warped_squash_wedge"],
  ["unusualend:purpur_grass", "unusualend:purpur_grass"],
  ["quark:chorus_weeds", "quark:chorus_weeds"],

  // YUNG's Cave Biomes
  ["yungscavebiomes:frost_lily", "yungscavebiomes:frost_lily"],
  ["yungscavebiomes:prickly_peach_cactus", "yungscavebiomes:prickly_peach"],
  ["yungscavebiomes:prickly_vines", "yungscavebiomes:prickly_vines"],

  // Misc vines / bushes
  ["biomeswevegone:poison_ivy", "biomeswevegone:poison_ivy"],
  ["biomeswevegone:skyris_vine", "biomeswevegone:skyris_vine"],
  ["biomeswevegone:spirit_roots", "biomeswevegone:spirit_roots"],
  ["cluttered:willow_vines", "cluttered:willow_vines"],
  ["cluttered:small_bush", "cluttered:small_bush"],
];

// Soil overrides for PLANTS (everything else grows on dirt).
const END_STONE = { item: "minecraft:end_stone" };
const NETHERRACK = { item: "minecraft:netherrack" };
const SOUL_SAND = { tag: "botanypots:soil/soul_sand" };
const SAND = { tag: "botanypots:soil/sand" };
const SNOW = { tag: "botanypots:soil/snow" };
const LICHEN_MOSS = { item: "galosphere:lichen_moss" };
const PLANT_SOILS = {
  // The End
  "unusualend:chorus_fungus": END_STONE,
  "unusualend:flowering_purpur_grass": END_STONE,
  "unusualend:shiny_spirea": END_STONE,
  "unusualend:crystal_flower": END_STONE,
  "unusualend:chorus_cane": END_STONE,
  "unusualend:chorus_roots": END_STONE,
  "unusualend:endstone_sprouts": END_STONE,
  "unusualend:warped_sprouts": END_STONE,
  "unusualend:gloopilon_stem": END_STONE,
  "unusualend:gloopy_bush": END_STONE,
  "unusualend:gloopy_tendrils": END_STONE,
  "unusualend:warped_bush": END_STONE,
  "unusualend:small_warped_algae": END_STONE,
  "unusualend:small_warped_squash": END_STONE,
  "unusualend:purpur_grass": END_STONE,
  "quark:chorus_weeds": END_STONE,
  "endersdelight:amberveil_mushroom": END_STONE,
  "endersdelight:chorusflame_bush": END_STONE,
  "endersdelight:ethereal_saffron_b.ush": END_STONE,
  "endersdelight:voidpepper_bush": END_STONE,
  // Caves
  "galosphere:lichen_cordyceps": LICHEN_MOSS,
  "galosphere:lichen_roots": LICHEN_MOSS,
  "galosphere:bowl_lichen": LICHEN_MOSS,
  "yungscavebiomes:frost_lily": SNOW,
  "yungscavebiomes:prickly_peach_cactus": SAND,
  "yungscavebiomes:prickly_vines": SAND,
  // The Nether
  "mynethersdelight:powdery_cannon": SOUL_SAND,
  "mynethersdelight:crimson_fungus_colony": NETHER,
  "mynethersdelight:warped_fungus_colony": NETHER,
  "netherexp:warped_wart": SOUL_SAND,
  "netherexp:soul_torchflower": NETHER,
  "netherexp:blightwart": NETHER,
  "netherexp:sorroweed": NETHER,
  "netherexp:cerebrage_kale": NETHER,
  "netherexp:twisting_ivy": NETHER,
  "netherexp:weeping_ivy": NETHER,
  "netherexp:crimson_sprouts": NETHER,
  "netherexp:crimson_sporeshroom": NETHER,
  "netherexp:warped_sporeshroom": NETHER,
  "netherexp:nether_wart_beard": NETHER,
  "netherexp:warped_wart_beard": NETHER,
  // The Nether
  "biomeswevegone:soul_fruit": NETHERRACK, // Wailing Garth
  "netherdescent:arisian_blossom": NETHERRACK,
  "netherdescent:tall_arisian_dandelions": NETHERRACK,
  "netherdescent:arisian_dandelions": NETHERRACK,
  "netherdescent:embur_lily": NETHERRACK,
  "netherdescent:arisian_sprouts": NETHER,
  "netherdescent:tall_arisian_sprouts": NETHER,
  "netherdescent:arisian_tangle_roots": NETHER,
  "netherdescent:embur_roots": NETHER,
  "netherdescent:tall_embur_roots": NETHER,
  "netherdescent:embur_sprouts": NETHER,
  "netherdescent:embur_gel_vines": NETHER,
  "netherdescent:embur_hanging_moss": NETHER,
  "netherdescent:embur_cave_moss": NETHER,
  "netherdescent:fungal_bulbs": NETHER,
  "netherdescent:sythian_roots": NETHER,
  "netherdescent:hanging_sythian_roots": NETHER,
  "netherdescent:sythian_sprouts": NETHER,
  "netherdescent:sythian_stalk": NETHER,
  "netherdescent:tall_crimson_fungi": NETHER,
  "netherdescent:tall_crimson_roots": NETHER,
  "netherdescent:thorn_sprout": NETHER,
  "netherdescent:wailing_bulb_blossom": NETHER,
  "netherdescent:wailing_gills": NETHER,
  "netherdescent:wailing_grass": NETHER,
  "netherdescent:wailing_vines": NETHER,
  "netherdescent:crimson_berry_bush": NETHER,
};

// Extra blocks usable as pot soil.
const SOILS = [
  "galosphere:lichen_moss",
  "netherdescent:embur_nylium",
  "netherdescent:sythian_nylium",
  "netherdescent:wailing_nylium",
  "netherdescent:crimson_blackstone_nylium",
  "netherdescent:sythian_soil",
  "netherdescent:embur_moss_block",
  "netherdescent:arisian_moss_block",
];

ServerEvents.recipes((event) => {
  SOILS.forEach((block) => {
    event
      .custom({ type: "botanypots:block_derived_soil", block: block })
      .id(`kubejs:botanypots/soil/${path(block)}`);
  });

  SAPLINGS.forEach(([sapling, soil]) => {
    const recipe = {
      type: "botanypots:block_derived_crop",
      block: sapling,
      grow_time: 2400,
      drops: [
        {
          type: "botanypots:loot_table",
          table_id: `kubejs:botanypots/tree/${path(sapling)}`,
        },
      ],
    };
    if (soil) recipe.soil = soil;
    event.custom(recipe).id(`kubejs:botanypots/crop/${path(sapling)}`);
  });

  PLANTS.forEach(([block, output, seed]) => {
    const recipe = {
      type: "botanypots:block_derived_crop",
      block: block,
      soil: PLANT_SOILS[block] || { tag: "botanypots:soil/dirt" },
      drops: [
        {
          type: "botanypots:loot_table",
          table_id: `kubejs:botanypots/plant/${path(output)}`,
        },
      ],
    };
    if (seed) recipe.input = { item: seed };
    event.custom(recipe).id(`kubejs:botanypots/crop/${path(block)}`);
  });
});
