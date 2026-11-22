// Create: Nuclear processing chain. (Uranium ore sources: resources/ores.js)

ServerEvents.recipes((event) => {
  // --- Uranium fluid & yellowcake ---
  // TODO: replace with diesel generators bulk fermenting recipe; lots of uranium powder in,
  //       much less distilled out as yellowcake. Makes nuclear require massive setup, thus much harder!
  event.remove({ id: "createnuclear:mixing/uranium_fluid" });
  event.remove({ id: "createnuclear:compacting/uranium_fluid_to_yellowcake" });
  event.recipes.create.mixing(Fluid.of("createnuclear:uranium", 250), [
    "createnuclear:uranium_powder",
    Fluid.of("minecraft:water", 250),
  ]);
  event.recipes.create
    .mixing(
      [
        "createnuclear:yellowcake",
        CreateItem.of("createnuclear:yellowcake", 0.4),
        "ratatouille:boil_stone",
      ],
      ["ratatouille:boil_stone", Fluid.of("createnuclear:uranium", 1000)],
    )
    .heated();
});
