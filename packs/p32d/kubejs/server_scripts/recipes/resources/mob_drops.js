// Alternative sources for mob drops and other hard-to-automate items.

ServerEvents.recipes((event) => {
  // --- Magma cream <-> slime ---
  event.remove({ id: "createdieselgenerators:basin_fermenting/magma_cream" });
  event.remove({ id: "create_sa:magma_cream_recipe" });
  event.recipes.create.splashing(
    [CreateItem.of("minecraft:slime_ball", 0.6)],
    "minecraft:magma_cream",
  );
  event.recipes.create
    .compacting(["minecraft:magma_cream"], ["2x minecraft:slime_ball"])
    .heated();

  // --- Feathers: string is kinda ez to automate with flax ---
  event.shaped("3x minecraft:feather", ["  S", " W ", "V  "], {
    S: "minecraft:string",
    W: "minecraft:white_wool",
    V: "minecraft:stick",
  });

  // --- Ash: firetick may be disabled, which is the best way to make it ---
  event.recipes.create.splashing(
    ["3x supplementaries:ash", CreateItem.of("supplementaries:ash", 0.6)],
    "minecraft:charcoal",
  );

  // --- Nether star: enriching a heart of the sea (rare) ---
  enriching(event, "minecraft:heart_of_the_sea", [
    { id: "minecraft:nether_star", chance: 0.25 },
  ]);
});
