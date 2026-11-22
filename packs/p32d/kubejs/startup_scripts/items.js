// Custom items.

StartupEvents.registry("item", (event) => {
  // --- Cake molds (see server_scripts/recipes/food/cakes.js) ---
  CAKES.forEach((cake) => event.create(`${cake}_cake_mold_filled`));
  CAKES.forEach((cake) => event.create(`${cake}_cake_mold_baked`));
});
