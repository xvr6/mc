// Custom fluids.

StartupEvents.registry("fluid", (event) => {
  // --- Cake batters (see server_scripts/recipes/food/cakes.js) ---
  event
    .create("blaze_cake_batter")
    .noBlock()
    .displayName("Blaze Cake Batter")
    .renderType("solid")
    .flowingTexture("kubejs:fluid/blaze_cake_batter_flow")
    .stillTexture("kubejs:fluid/blaze_cake_batter_still");
  event
    .create("echo_cake_batter")
    .noBlock()
    .displayName("Echo Cake Batter")
    .renderType("solid")
    .flowingTexture("kubejs:fluid/echo_cake_batter_flow")
    .stillTexture("kubejs:fluid/echo_cake_batter_still");
  event
    .create("experience_cake_batter")
    .noBlock()
    .displayName("Experience Cake Batter")
    .renderType("solid")
    .flowingTexture("kubejs:fluid/experience_cake_batter_flow")
    .stillTexture("kubejs:fluid/experience_cake_batter_still");
});
