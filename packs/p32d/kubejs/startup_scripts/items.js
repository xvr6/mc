// Custom items.

StartupEvents.registry("item", (event) => {
  // --- Cake molds (see server_scripts/recipes/food/cakes.js) ---
  // filled
  event.create("blaze_cake_mold_filled");
  event.create("echo_cake_mold_filled");
  event.create("experience_cake_mold_filled");

  // baked
  event.create("blaze_cake_mold_baked");
  event.create("echo_cake_mold_baked");
  event.create("experience_cake_mold_baked");
});
