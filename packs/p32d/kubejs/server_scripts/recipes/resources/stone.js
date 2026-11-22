// Renewable / automatable stone, sand, dirt and ice.

ServerEvents.recipes((event) => {
  const channeling = (input, results) =>
    processing(event, "create_aquatic_ambitions:channeling", input, results);

  // --- Create stone types ---
  // Asurine
  event.recipes.create
    .mixing(
      [
        "2x create:asurine",
        CreateItem.of("2x create:asurine", 0.6),
        Fluid.of("createmetallurgy:molten_slag", 180),
      ],
      ["minecraft:tuff", "create:veridium"],
    )
    .heated();
  // Crimsite
  event.recipes.create
    .mixing(
      [
        "2x create:crimsite",
        CreateItem.of("2x create:crimsite", 0.6),
        Fluid.of("createmetallurgy:molten_slag", 180),
      ],
      ["minecraft:tuff", "minecraft:netherrack"],
    )
    .heated();
  // Ochrum
  channeling("minecraft:tuff", [{ id: "create:ochrum", chance: 0.8 }]);
  // Scorchia: increased cost (crushes into tungsten, see ores.js)
  event.remove({ id: "create:crafting/palettes/scorchia" });
  event.recipes.create.haunting(
    [CreateItem.of("create:scorchia", 0.8)],
    ["create:scoria"],
  );

  // --- Netherrack & lava ---
  // Less efficient than the default; only viable when mass-automated (with enriching)
  event.remove({ output: "minecraft:netherrack", type: "create:mixing" });
  event.recipes.create
    .mixing(
      [CreateItem.of("minecraft:netherrack", 0.8)],
      [
        "#c:cobblestones",
        "create:cinder_flour",
        Fluid.of("minecraft:lava", 750),
      ],
    )
    .heated();
  // Slight buff to superheated lava mixing
  event.remove({ id: "create:mixing/lava_from_cobble" });
  event.recipes.create
    .mixing([Fluid.of("minecraft:lava", 75)], "#c:cobblestones")
    .superheated();

  // --- Dripstone ---
  event.recipes.create.filling("minecraft:dripstone_block", [
    "#minecraft:terracotta",
    Fluid.of("minecraft:lava", 250),
  ]);
  event.replaceOutput(
    { id: "create:milling/dripstone_block" },
    "minecraft:clay_ball",
    "minecraft:pointed_dripstone",
  );

  // --- Prismarine (alt) ---
  channeling("supplementaries:flint_block", [{ id: "minecraft:prismarine" }]);

  // --- Sulfur caves ---
  event.recipes.create.filling("minecraft:cinnabar", [
    Fluid.of("create_dragons_plus:red_dye", 128),
    "minecraft:calcite",
  ]);
  event.recipes.create.filling("minecraft:sulfur", [
    Fluid.of("create_dragons_plus:yellow_dye", 128),
    "minecraft:calcite",
  ]);

  // --- Blasted stones ---
  event.blasting("biomeswevegone:dacite", "dndecor:gabbro");
  event.blasting("biomeswevegone:white_dacite", "minecraft:calcite");
  event.blasting("netherexp:soul_slate", "minecraft:soul_soil");

  // --- Flint -> blackstone (useful way to remove excess flint; bandaid for now) ---
  event.recipes.create.haunting(
    [CreateItem.of("minecraft:blackstone", 0.1)],
    "supplementaries:flint_block",
  );

  // --- No infested blocks from haunting ---
  // Haunting stone into infested stone + drilling it was an endless silverfish (exp) farm
  // and a huge lag source. Infested blocks now only come from worldgen.
  event.remove({ id: /^create:haunting\/infested_/ });

  // --- Ballast stones ---
  event.remove({ id: "ballastmod:ballast_stones" });
  event.custom({
    type: "ratatouille:threshing",
    ingredients: [{ tag: "c:cobblestones" }],
    results: [{ id: "ballastmod:ballast_stones" }],
  });

  // --- Red rock: 2x red sand + 2x cobblestone -> 8x ---
  event.recipes.create.compacting(
    ["8x biomeswevegone:red_rock"],
    ["2x minecraft:red_sand", "2x minecraft:cobblestone"],
  );

  // --- Sand ---
  event.smoking("minecraft:sand", "biomeswevegone:cracked_sand");
  event.smoking("minecraft:red_sand", "biomeswevegone:cracked_red_sand");

  // Quicksand: sand + water -> quicksand fluid -> compacted -> BWG quicksand
  event.recipes.create.mixing(Fluid.of("fluid:quicksand_fluid", 1000), [
    Fluid.of("minecraft:water", 500),
    "2x minecraft:sand",
  ]);
  event.recipes.create.compacting(
    ["2x fluid:quicksand", CreateItem.of("2x fluid:quicksand", 0.4)],
    [Fluid.of("fluid:quicksand_fluid", 1000)],
  );
  event.shapeless("fluid:quicksand", ["biomeswevegone:quicksand"]);
  event.shapeless("biomeswevegone:quicksand", ["fluid:quicksand"]);
  event.shaped("8x biomeswevegone:red_quicksand", ["QQQ", "QDQ", "QQQ"], {
    Q: "biomeswevegone:quicksand",
    D: "minecraft:red_dye",
  });

  // --- Dirt ---
  event.recipes.create.milling(["minecraft:dirt"], "minecraft:coarse_dirt");
  event.recipes.create.compacting(
    ["2x minecraft:coarse_dirt"],
    ["minecraft:dirt", "minecraft:gravel"],
  );

  // --- Ice & snow ---
  // Renewable powder snow w/o mob griefing
  processing(event, "create_dragons_plus:freezing", "minecraft:water_bucket", [
    { id: "minecraft:powder_snow_bucket" },
  ]);
  event.remove({ id: "create:freezing/packed_ice" });
  channeling("minecraft:ice", [
    { id: "biomeswevegone:borealis_ice", chance: 0.8 },
  ]);
});
