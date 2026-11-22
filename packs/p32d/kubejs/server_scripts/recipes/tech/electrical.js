// Electrical: Electro Energetics parts, light bulbs.

ServerEvents.recipes((event) => {
  // --- Light bulbs: remove duplicates; electroenergetics has priority ---
  event.remove({ output: "#createmetallurgy:light_bulb" });
  event.remove({ id: "electroenergetics:crafting/bulb" });
  // electroenergetics bulb uses tungsten wire
  event.shaped("electroenergetics:bulb", [" G ", " T ", "CAC"], {
    G: "minecraft:glass",
    T: "createmetallurgy:tungsten_wire",
    C: "electroenergetics:connector",
    A: "create:andesite_alloy",
  });
  // may just remove this bulb type entirely, but it has cool cosmetic applications iirc
  event.replaceInput(
    { id: "bits_n_bobs:crafting/lightbulb" },
    "minecraft:glowstone_dust",
    "createmetallurgy:tungsten_wire_spool",
  );

  // --- Resistive heater ---
  event.remove({ id: "electroenergetics:crafting/resistive_heater" });
  event.shaped("electroenergetics:resistive_heater", ["WKW", "CaC", "aia"], {
    K: "minecraft:dried_kelp",
    W: "electroenergetics:heavily_insulated_wire",
    C: "electroenergetics:connector",
    a: "create:andesite_alloy",
    i: "create:iron_sheet",
  });

  // --- Transformer core lamination ---
  // So much already uses iron sheets; also makes transformers a bit more expensive, as they should be.
  event.remove({
    id: "electroenergetics:stonecutting/transformer_core_lamination",
  });
  event.stonecutting(
    "2x electroenergetics:transformer_core_lamination",
    "minecraft:iron_trapdoor",
  );

  // --- Concrete pole uses actual concrete ---
  event.replaceInput(
    { id: "electroenergetics:crafting/concrete_pole" },
    "minecraft:light_gray_concrete",
    "clayworks:concrete",
  );
});
