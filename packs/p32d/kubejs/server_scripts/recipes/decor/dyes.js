// Dyes: Create Dragons+ liquid dyes and fan coloring.

ServerEvents.recipes((event) => {
  Color.DYE.forEach((color) => {
    const dyeItem = `minecraft:${color}_dye`;
    const dyeFluid = `create_dragons_plus:${color}_dye`;

    // --- Fan coloring: white dye -> any color ---
    // FIXME: may need to be done in datapack form
    event.custom({
      type: "create_dragons_plus:coloring",
      color: dyeFluid,
      ingredients: [{ item: "minecraft:white_dye" }],
      results: [{ id: dyeItem }],
    });

    // --- Liquid dye: converting back to an item requires a boil stone ---
    event.remove({ id: `create_dragons_plus:mixing/${color}_dye_from_fluid` });
    event.remove({ id: `create_dragons_plus:mixing/${color}_dye_from_item` });
    // values increased to 1000 as bandaid fix to previous replacement not working.
    event.recipes.create.mixing(
      [Fluid.of(dyeFluid)],
      [dyeItem, Fluid.of("minecraft:water", 1000)],
    );
    event.recipes.create
      .mixing(
        [dyeItem, "ratatouille:boil_stone"],
        ["ratatouille:boil_stone", Fluid.of(dyeFluid, 1000)],
      )
      .heated();
  });
});
