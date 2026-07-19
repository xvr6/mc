ServerEvents.tags("item", (event) => {
  event.add(
    "poinky:non_hand_craftable",
    "#cobblemon:tier_2_poke_balls",
    "#cobblemon:tier_3_poke_balls",
    "#cobblemon:tier_4_poke_balls",
    "#cobblemon:tier_5_poke_balls",
  );
  event.add(
    "c:salt",
    "ratatouille:salt",
    "expandeddelight:salt",
    "moresnifferflowers:salty_spice",
  );
});

ServerEvents.recipes((event) => {
  event.remove({
    output: "#poinky:non_hand_craftable",
    type: "minecraft:crafting_shaped",
  });
});
