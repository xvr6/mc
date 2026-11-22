// Cooking oils: create addition seed oil -> food grade seed oil
// (ratatouille_fried_delights sunflower oil, renamed in client_scripts/lang.js).

ServerEvents.recipes((event) => {
  // --- Duplicate plant oils (buckets in #poinky:removed) ---
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

  // Rustic Delight / FD fried foods take #rusticdelight:cooking_oil (a tag, not the item),
  // so the seed oil bottle is added to that tag in tags/items.js instead of replaceInput.
  // rusticdelight:cooking_oil itself is in #poinky:removed.
});
