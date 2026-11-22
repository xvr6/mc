// Cooking oils: create addition seed oil -> food grade seed oil
// (ratatouille_fried_delights sunflower oil, renamed in client_scripts/lang.js).

ServerEvents.recipes((event) => {
  // --- Duplicate plant oils ---
  event.remove({ output: Fluid.of("electroenergetics:plant_oil") });
  event.remove({ output: Fluid.of("createdieselgenerators:plant_oil") });

  // --- Food grade seed oil ---
  event.remove({ id: "ratatouille_fried_delights:compacting/sunflower_oil" });
  event.recipes.create
    .mixing(
      [
        Fluid.of("ratatouille_fried_delights:sunflower_oil", 125),
        "ratatouille:boil_stone",
      ],
      ["ratatouille:boil_stone", Fluid.of("createaddition:seed_oil", 500)],
    )
    .heated();
  event.recipes.create.emptying(
    [
      "minecraft:glass_bottle",
      Fluid.of("ratatouille_fried_delights:sunflower_oil", 125),
    ],
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  );

  // --- Rustic Delight cooking oil -> food grade seed oil ---
  event.replaceInput(
    { input: "rusticdelight:cooking_oil" },
    "rusticdelight:cooking_oil",
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  );
  // FIXME: the replaceInput above doesn't work
  // bandaid fix (see tooltips.js):
  event.shapeless("rusticdelight:cooking_oil", [
    "ratatouille_fried_delights:sunflower_seed_oil_bottle",
  ]);
  event.remove({ output: "rusticdelight:cooking_oil" });
});
