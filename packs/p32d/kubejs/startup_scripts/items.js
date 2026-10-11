StartupEvents.init((event) => {
  Platform.mods.kubejs.name = "Poinky";
});

StartupEvents.registry("item", (event) => {
  // Filled cake mold bases
  event
    .create("blaze_cake_mold_filled")
    .texture("poinky:item/blaze_cake_mold_filled.png");
  event
    .create("echo_cake_mold_filled")
    .texture("poinky:item/echo_cake_mold_filled.png");
  event
    .create("experience_cake_mold_filled")
    .texture("poinky:item/experience_cake_mold_filled.png");

  // Cooked cake mold bases
  event
    .create("blaze_cake_mold_baked")
    .texture("poinky:item/blaze_cake_mold_baked.png");
  event
    .create("echo_cake_mold_baked")
    .texture("poinky:item/echo_cake_mold_baked.png");
  event
    .create("experience_cake_mold_baked")
    .texture("poinky:item/experience_cake_mold_baked.png");
});
