// Botany Pots 21.1.x (MC 1.21.1) has no KubeJS recipe schema anymore;
// so recipes are plain JSON registered with event.custom().

const path = (id) => id.replace(":", "/");

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
];

// Soil overrides for PLANTS (everything else grows on dirt).
const END_STONE = { item: "minecraft:end_stone" };
const NETHERRACK = { item: "minecraft:netherrack" };
const PLANT_SOILS = {
  // The End
  "unusualend:chorus_fungus": END_STONE,
  "unusualend:flowering_purpur_grass": END_STONE,
  "unusualend:shiny_spirea": END_STONE,
  "unusualend:crystal_flower": END_STONE,
  // The Nether
  "biomeswevegone:soul_fruit": NETHERRACK, // Wailing Garth
  "netherdescent:arisian_blossom": NETHERRACK,
  "netherdescent:tall_arisian_dandelions": NETHERRACK,
  "netherdescent:arisian_dandelions": NETHERRACK,
  "netherdescent:embur_lily": NETHERRACK,
};

ServerEvents.recipes((event) => {
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
