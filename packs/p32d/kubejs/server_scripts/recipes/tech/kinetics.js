// Kinetics & building components: gearboxes, cogwheels, shafts, copycats, burners.

ServerEvents.recipes((event) => {
  // --- Gearboxes ---
  // L-shaped gearbox -> normal gearbox
  event.shaped("create:gearbox", [" C", "CG"], {
    G: "createutilities:lshaped_gearbox",
    C: "create:cogwheel",
  });
  event.shaped("create:gearbox", ["GC", "C "], {
    G: "createutilities:lshaped_gearbox",
    C: "create:cogwheel",
  });
  // brass gearboxes a bit cheaper
  event.replaceInput(
    { id: "create_connected:crafting/kinetics/brass_gearbox" },
    "create:rotation_speed_controller",
    "create:precision_mechanism",
  );

  // --- Flanged cogwheels: additional shapeless recipes; no costs changed ---
  event.shapeless("bits_n_bobs:small_flanged_cogwheel", [
    "create:shaft",
    "#minecraft:planks",
    "minecraft:iron_nugget",
  ]);
  event.shapeless("bits_n_bobs:large_flanged_cogwheel", [
    "create:shaft",
    "#minecraft:planks",
    "#minecraft:planks",
    "minecraft:iron_nugget",
  ]);
  event.shapeless("bits_n_bobs:large_flanged_cogwheel", [
    "bits_n_bobs:small_flanged_cogwheel",
    "#minecraft:planks",
  ]);
  event.shapeless("bits_n_bobs:large_flanged_cogwheel", [
    "create:cogwheel",
    "#minecraft:planks",
    "minecraft:iron_nugget",
  ]);

  // --- Shafts: shear pin overlap ---
  event.remove({ id: "create:cutting/shaft" });
  event.shapeless("create_connected:shear_pin", ["create:shaft"]);
  event.shapeless("create:shaft", ["create_connected:shear_pin"]);

  // --- Copycats: andesite alloy instead of zinc ---
  event.replaceInput(
    {
      or: [
        { type: "minecraft:stonecutting", mod: "copycats" },
        { type: "minecraft:stonecutting", mod: "createmoregirder" },
        { output: "create:copycat_panel" },
        { output: "create:copycat_step" },
      ],
    },
    "create:zinc_ingot",
    "create:andesite_alloy",
  );
  event.shapeless("create:andesite_alloy", ["copycats:copycat_block"]);

  // --- Aeronautics burner: charcoal block instead of coal block ---
  event.replaceInput(
    { id: "aeronautics:adjustable_burner" },
    "minecraft:coal_block",
    "quark:charcoal_block",
  );
});
