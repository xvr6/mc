// Dyes: Create Dragons+ liquid dyes and fan coloring.

ServerEvents.recipes((event) => {
  Color.DYE.forEach((color) => {
    const dyeItem = `minecraft:${color}_dye`;
    const dyeFluid = `create_dragons_plus:${color}_dye`;

    // --- Fan coloring: white dye -> any color ---
    // `color` is a Dragons+ dye *variant* id (vanilla: "minecraft:<color>"), not the fluid id
    event.custom({
      type: "create_dragons_plus:coloring",
      color: `minecraft:${color}`,
      ingredients: [{ item: "minecraft:white_dye" }],
      results: [{ id: dyeItem }],
    });

    // --- Liquid dye -> dye item requires a boil stone ---
    // Dye -> liquid dye is left as the Dragons+ default (1 dye + 250 mB water -> 250 mB)
    event.remove({ id: `create_dragons_plus:mixing/${color}_dye_from_fluid` });
    event.recipes.create
      .mixing(
        [dyeItem, "ratatouille:boil_stone"],
        ["ratatouille:boil_stone", Fluid.of(dyeFluid, 250)],
      )
      .heated();
  });
});
