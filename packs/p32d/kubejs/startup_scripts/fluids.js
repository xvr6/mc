StartupEvents.registry("fluid", (event) => {
  // New Cake Batters
  event
    .create("blaze_cake_batter")
    .displayName("Blaze Cake Batter")
    .renderType(0)
    .flowingTexture("kubejs:fluid/blaze_cake_batter_flow.png")
    .stillTexture("kubejs:fluid/blaze_cake_batter_still.png");
  event
    .create("echo_cake_batter")
    .renderType(0)
    .flowingTexture("kubejs:fluid/echo_cake_batter_flow.png")
    .stillTexture("kubejs:fluid/echo_cake_batter_still.png")
    .displayName("Echo Cake Batter");
  event
    .create("experience_cake_batter")
    .displayName("Experience Cake Batter")
    .renderType(0)
    .flowingTexture("kubejs:fluid/experience_cake_batter_flow.png")
    .stillTexture("kubejs:fluid/experience_cake_batter_still.png");
});
