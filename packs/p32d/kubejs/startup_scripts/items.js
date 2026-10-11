StartupEvents.init((event) => {
  Platform.mods.kubejs.name = "Poinky";
});

StartupEvents.registry("item", (event) => {
  // Filled cake mold bases
  event
    .create("blaze_cake_mold_filled")
    .texture("kubejs:item/blaze_cake_mold_filled.png");
  event
    .create("echo_cake_mold_filled")
    .texture("kubejs:item/echo_cake_mold_filled.png");
  event
    .create("experience_cake_mold_filled")
    .texture("kubejs:item/experience_cake_mold_filled.png");

  // Cooked cake mold bases
  event
    .create("blaze_cake_mold_baked")
    .texture("kubejs:item/blaze_cake_mold_baked.png");
  event
    .create("echo_cake_mold_baked")
    .texture("kubejs:item/echo_cake_mold_baked.png");
  event
    .create("experience_cake_mold_baked")
    .texture("kubejs:item/experience_cake_mold_baked.png");
});
