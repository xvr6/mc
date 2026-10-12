StartupEvents.registry("fluid", (event) => {
  // New Cake Batters
  event
    .create("blaze_cake_batter")
    .displayName("Blaze Cake Batter")
    .renderType("solid")
    .flowingTexture("kubejs:fluid/blaze_cake_batter_flow")
    .stillTexture("kubejs:fluid/blaze_cake_batter_still");
  event
    .create("echo_cake_batter")
    .renderType("solid")
    .flowingTexture("kubejs:fluid/echo_cake_batter_flow")
    .stillTexture("kubejs:fluid/echo_cake_batter_still")
    .displayName("Echo Cake Batter");
  event
    .create("experience_cake_batter")
    .displayName("Experience Cake Batter")
    .renderType("solid")
    .flowingTexture("kubejs:fluid/experience_cake_batter_flow")
    .stillTexture("kubejs:fluid/experience_cake_batter_still");
});
