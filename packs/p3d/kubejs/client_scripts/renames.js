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
      `${capitalizeFirstLetter(color)} Raised Chair`,
    );

    event.renameItem(
      `interiors:${color}_chair`,
      `${capitalizeFirstLetter(color)} Styled Floor Chair`,
    );
  });
});

function capitalizeFirstLetter(str) {
  if (!str) return str; // Handle empty strings, null, or undefined
  return str.charAt(0).toUpperCase() + str.slice(1);
}
