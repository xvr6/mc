ServerEvents.tags("item", (event) => {
  event.add(
    "poinky:non_hand_craftable",
    "#cobblemon:tier_2_poke_balls",
    "#cobblemon:tier_3_poke_balls",
    "#cobblemon:tier_4_poke_balls",
    "cobblemon:master_ball",
  );
  event.add(
    "c:salt",
    "ratatouille:salt",
    "expandeddelight:salt",
    "moresnifferflowers:salty_spice",
  );
});

ServerEvents.recipes((event) => {
  // - salt modifications
  event.remove({ output: "expandeddelight:salt" });
  event.recipes.createMilling(
    [Item.of("ratatouille:salt", 3), CreateItem.of("ratatouille:salt", 0.4)],
    "expandeddelight:salt_rock",
  );
  event.replaceInput(
    { input: "expandeddelight:salt" },
    "expandeddelight:salt",
    Ingredient.of("#c:salt"),
  );
  event.replaceInput(
    { input: "ratatouille:salt" },
    "ratatouille:salt",
    "#c:salt",
  );

  event.replaceInput(
    { id: "mynethersdelight:crafting/hotdog" },
    "mynethersdelight:roasted_sausage",
    "ratatouille:sausage",
  );
  event.replaceOutput(
    { output: "ratatouille_fried_delights:hot_dog" },
    "ratatouille_fried_delights:hot_dog",
    "mynethersdelight:hotdog",
  );
  event.remove({ output: "mynethersdelight:hoglin_sausage" });
  event.remove({ output: "mynethersdelight:roasted_sausage" });
  // - remove things lsited as non hand craftable
  event.remove({
    output: "#poinky:non_hand_craftable",
    type: "minecraft:crafting_shaped",
  });
  // - change crafting to use tag instead
  event.replaceInput("*", "create:mechanical_pump", "#create:mechanical_pumps");
});
