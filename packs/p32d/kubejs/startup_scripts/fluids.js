StartupEvents.registry("fluid", (event) => {
  // New Cake Batters
  event
    .create("blaze_cake_batter")
    .displayName("Blaze Cake Batter")
    .type((type) =>
      type
        .renderType(0)
        .stillTexture("kubejs:fluid/blaze_cake_batter_still.png")
        .flowingTexture("kubejs:fluid/blaze_cake_batter_flow.png"),
    );

  event
    .create("echo_cake_batter")
    .displayName("Echo Cake Batter")
    .type((type) =>
      type
        .renderType(0)
        .stillTexture("kubejs:fluid/echo_cake_batter_still.png")
        .flowingTexture("kubejs:fluid/echo_cake_batter_flow.png"),
    );
  event
    .create("experience_cake_batter")
    .displayName("Experience Cake Batter")
    .type((type) =>
      type
        .renderType(0)
        .stillTexture("kubejs:fluid/experience_cake_batter_still.png")
        .flowingTexture("kubejs:fluid/experience_cake_batter_flow.png"),
    );
});
