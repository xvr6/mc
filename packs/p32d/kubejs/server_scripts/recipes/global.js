// Pack-wide recipe rules: tag-driven removals and ingredient unification
// that spans many mods. Theme-specific changes live in the subfolders.

ServerEvents.recipes((event) => {
  // --- Tag-driven removals (see tags/items.js) ---
  event.remove({ output: "#poinky:removed" });
  event.remove({
    output: "#poinky:non_hand_craftable",
    type: "minecraft:crafting_shaped",
  });

  // --- Salt: every salt is #c:salt ---
  event.recipes.create.milling(
    ["2x ratatouille:salt", CreateItem.of("ratatouille:salt", 0.4)],
    "expandeddelight:salt_rock",
  );
  event.recipes.create.milling(
    ["3x ratatouille:salt", CreateItem.of("ratatouille:salt", 0.6)],
    "galosphere:pink_salt_shard",
  );
  event.replaceInput(
    { input: "expandeddelight:salt" },
    "expandeddelight:salt",
    "#c:salt",
  );
  event.replaceInput(
    { input: "ratatouille:salt" },
    "ratatouille:salt",
    "#c:salt",
  );

  // --- Sausages & hotdogs: ratatouille sausage, My Nether's Delight hotdog ---
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

  // --- Any pump works where a mechanical pump is needed ---
  event.replaceInput("*", "create:mechanical_pump", "#poinky:mechanical_pumps");

  // --- Item silo usable wherever an item vault is ---
  event.replaceInput(
    // keys in one object are AND'd, arrays are OR'd (KubeJS has no `and` key)
    {
      type: "minecraft:crafting_shaped",
      input: "create:item_vault",
      not: [
        { output: "create_connected:item_silo" },
        { mod: "dndecor" },
        { mod: "createdeco" },
      ],
    },
    "create:item_vault",
    "#c:vaults",
  );

  // --- Replacements for removed items (#poinky:removed) ---
  event.replaceInput(
    { input: "electroenergetics:magnet" },
    "electroenergetics:magnet",
    "simulated:redstone_magnet",
  );
  event.replaceInput(
    { input: "createfactorycontroller:cut_amethyst" },
    "createfactorycontroller:cut_amethyst",
    "createutilities:polished_amethyst",
  );
  event.replaceInput(
    { input: "createmetallurgy:refractory_mortar" },
    "createmetallurgy:refractory_mortar",
    "minecraft:clay",
  );
});
