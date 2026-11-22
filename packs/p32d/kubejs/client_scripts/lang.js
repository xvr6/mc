// Display-name overrides for items/blocks/entities from other mods.

ClientEvents.lang("en_us", (event) => {
  // --- Sunflower oil -> generic seed oil (pairs with recipes/food/cooking_oil.js) ---
  event.renameBlock(
    "ratatouille_fried_delights:sunflower_oil",
    "Food Grade Seed Oil",
  );
  event.renameItem(
    "ratatouille_fried_delights:sunflower_oil_bucket",
    "Food Grade Seed Oil Bucket",
  );
  event.renameItem(
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
    "Food Grade Seed Oil Bottle",
  );
  event.renameEntity(
    "ratatouille_fried_delights:sunflower_oil",
    "Food Grade Seed Oil",
  );
  event.renameEntity(
    "ratatouille_fried_delights:flowing_sunflower_oil",
    "Food Grade Seed Oil (Flowing)",
  );

  // --- Chairs: disambiguate Interiors vs Bits 'n' Bobs ---
  Color.DYE.forEach((color) => {
    event.renameItem(
      `interiors:${color}_chair`,
      `${titleCase(color)} Raised Chair`,
    );
    event.renameItem(
      `bits_n_bobs:${color}_chair`,
      `${titleCase(color)} Styled Floor Chair`,
    );
  });

  // --- Misc renames ---
  event.renameItem("chipped:cobbled_obsidian", "Chipped Obsidian");
  event.renameItem(
    "chipped:cobbled_crying_obsidian",
    "Chipped Crying Obsidian",
  );

  event.renameItem("netherexp:black_ice", "Shade Ice");
  event.renameItem("netherexp:thin_black_ice", "Thin Shade Ice");

  // Loconautics industrial iron -> hardened iron
  event.renameItem("loconautics:industrial_iron_sheet", "Hardened Iron Sheet");
  event.renameItem("loconautics:industrial_iron_rod", "Hardened Iron Rod");
});

// "light_blue" -> "Light Blue"
function titleCase(str) {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
