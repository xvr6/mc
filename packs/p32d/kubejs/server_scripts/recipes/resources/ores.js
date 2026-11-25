// Ores, raw materials, gems and crystals.

ServerEvents.recipes((event) => {
  // --- Uranium: asurine -> autunite -> crushed uranium ---
  enriching(event, "create:asurine", [
    { id: "createnuclear:autunite", chance: 0.25 },
  ]);
  event.recipes.create.crushing(
    [
      "create:crushed_raw_uranium",
      CreateItem.of("create:crushed_raw_uranium", 0.25),
      CreateItem.of("createnuclear:thorium_dust", 0.1),
    ],
    "createnuclear:autunite",
  );

  // --- Tungsten from scorchia (see stone.js) ---
  event.recipes.create.crushing(
    [
      CreateItem.of("createmetallurgy:crushed_raw_tungsten", 0.65),
      CreateItem.of("createmetallurgy:dirty_tungsten_dust", 0.25),
    ],
    "create:scorchia",
  );

  // --- Missing raw ore block crushing ---
  event.recipes.create.crushing(
    [
      "9x create:crushed_raw_uranium",
      CreateItem.of("9x create:experience_nugget", 0.75),
    ],
    "createnuclear:raw_uranium_block",
  );
  event.recipes.create.crushing(
    [
      "9x create:crushed_raw_lead",
      CreateItem.of("9x create:experience_nugget", 0.75),
    ],
    "createnuclear:raw_lead_block",
  );

  // --- Platinum ---
  event.remove({ id: "createpropulsion:crushing/raw_platinum_block" });
  event.remove({ id: "create:crushing/raw_platinum_block" });
  event.remove({ id: "create:crushing/platinum_ore" });
  event.recipes.create.crushing(
    [
      "9x create:crushed_raw_platinum",
      CreateItem.of("9x create_sa:heap_of_experience", 0.75),
    ],
    "createpropulsion:raw_platinum_block",
  );
  event.replaceOutput(
    { id: "create:crushing/raw_platinum" },
    "create:experience_nugget",
    "create_sa:heap_of_experience",
  );

  // --- Soul sand washing: less quartz, slightly more gold ---
  event.remove({ id: "create:splashing/soul_sand" });
  event.recipes.create.splashing(
    [
      CreateItem.of("minecraft:quartz", 0.15),
      CreateItem.of("minecraft:gold_nugget", 0.05),
    ],
    "minecraft:soul_sand",
  );

  // --- Diamonds (automation but evil) & coal from enriched yellowcake ---
  event.recipes.create
    .compacting(
      [
        CreateItem.of("minecraft:diamond", 0.175),
        CreateItem.of("createnuclear:yellowcake", 0.9),
      ],
      ["createnuclear:enriched_yellowcake", "4x minecraft:coal_block"],
    )
    .superheated();
  event.recipes.create
    .compacting(
      [
        "3x minecraft:coal",
        CreateItem.of("2x minecraft:coal", 0.25),
        "createnuclear:yellowcake",
      ],
      ["createnuclear:enriched_yellowcake", "quark:charcoal_block"],
    )
    .heated();

  // --- Obsidian powder: Create and Refined Obsidian are interchangeable ---
  event.shapeless("si_refined_obsidian:obsidian_dust", [
    "create:powdered_obsidian",
  ]);
  event.shapeless("create:powdered_obsidian", [
    "si_refined_obsidian:obsidian_dust",
  ]);
  event.remove({ id: "create:crushing/obsidian" });
  event.remove({
    id: "si_refined_obsidian:obsidian_dust_from_obsidian_stonecutting",
  });
  event.recipes.create.crushing(
    [
      "4x create:powdered_obsidian",
      CreateItem.of("si_refined_obsidian:cobbled_obsidian", 0.85),
    ],
    "minecraft:obsidian",
  );

  // --- Amethyst (mainly cosmetic in this pack; easier to farm) ---
  enriching(event, "minecraft:amethyst_block", [
    { id: "minecraft:budding_amethyst" },
  ]);
  event.recipes.create.crushing(
    [
      CreateItem.of("minecraft:amethyst_block", 0.8),
      "galosphere:glinted_amethyst_cluster",
    ],
    "minecraft:budding_amethyst",
  );
  event.recipes.create.milling(
    [
      "4x minecraft:amethyst_shard",
      CreateItem.of("2x minecraft:glowstone_dust", 0.75),
    ],
    "galosphere:glinted_amethyst_cluster",
  );

  // --- Citrine ---
  enriching(event, "unusualend:citrine_block", [
    { id: "unusualend:budding_citrine" },
  ]);

  // --- Enriched soul soil ---
  enriching(event, "minecraft:soul_soil", [
    { id: "createnuclear:enriched_soul_soil", chance: 0.15 },
  ]);

  // --- Cinder flour: should become the only way to automate netherrack (balance) ---
  enriching(event, "#c:flours", [{ id: "create:cinder_flour", chance: 0.35 }]);
});
