ItemEvents.modifyTooltips((event) => {
  event.add(
    "rusticdelight:cooking_oil",
    { shift: false },
    Text.gray(
      "WIP: bandaid fix. Food Grade Oil is the intended input here. Shapeless 1:1 crafting is possible for now",
    ),
  );

  event.add(
    "createcobblestone:mechanical_generator",
    { shift: false },
    Text.white(
      "Can be set to: Cobblestone, Stone, Basalt, Limestone, and Scoria",
    ),
  );

  event.add(
    Ingredient.of("#poinky:removed"),
    { shift: false },
    Text.red("Recipe Removed"),
  );
});
