ClientEvents.lang("en_us", (event) => {
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
  Color.DYE.forEach((color) => {
    event.renameItem(
      `interiors:${color}_chair`,
      `${snakeToTitleCase(color)} Raised Chair`,
    );

    event.renameItem(
      `bits_n_bobs:${color}_chair`,
      `${snakeToTitleCase(color)} Styled Floor Chair`,
    );
  });
  event.renameItem("chipped:cobbled_obsidian", "Chipped Obsidian");
  event.renameItem(
    "chipped:cobbled_crying_obsidian",
    "Chipped Crying Obsidian",
  );

  event.renameItem("netherexp:black_ice", "Shade Ice");
  event.renameItem("netherexp:thin_black_ice", "Thin Shade Ice");
});

// "light_blue" -> "Light Blue"
function snakeToTitleCase(str) {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
