StartupEvents.init((event) => {
  Platform.mods.kubejs.name = "Poinky";
});

StartupEvents.registry("item", (event) => {
  // Filled cake mold bases
  event.create("blaze_cake_mold_filled");
  event.create("echo_cake_mold_filled");
  event.create("experience_cake_mold_filled");

  // Cooked cake mold bases
  event.create("blaze_cake_mold_baked");
  event.create("echo_cake_mold_baked");
  event.create("experience_cake_mold_baked");
});
