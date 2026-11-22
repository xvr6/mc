// Custom fluids.

StartupEvents.registry("fluid", (event) => {
  // --- Cake batters (see server_scripts/recipes/food/cakes.js) ---
  CAKES.forEach((cake) => {
    event
      .create(`${cake}_cake_batter`)
      .noBlock()
      .displayName(`${titleCase(cake)} Cake Batter`)
      .renderType("solid")
      .flowingTexture(`kubejs:fluid/${cake}_cake_batter_flow`)
      .stillTexture(`kubejs:fluid/${cake}_cake_batter_still`);
  });
});
