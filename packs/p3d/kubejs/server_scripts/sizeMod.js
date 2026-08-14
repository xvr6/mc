//const changeMon = (player, amount) => {
//const pNbt = player.getNbt();
//const activeSlot = pNbt.get("SynchroSavedTeam").getInt("active");
//console.log(activeSlot);
//const currentSize = pNbt
//  .get("SynchroSavedTeam")
//  .get(`slot_${activeSlot}`)
//  .getFloat("ScaleModifier");
//console.log(currentSize);
//pNbt["SynchroSavedTeam"][`slot_${activeSlot}`]["ScaleModifier"] =
//  currentSize + amount;
//player.server.runCommandSilent(
//  `/synchro slot activate ${activeSlot + 1} ${player.getUsername()}`,
//);
//console.log("scaled mon");
//};

ItemEvents.modifyTooltips((event) => {
  event.add(
    "rusticdelight:cooking_oil",
    { shift: false },
    Text.gray(
      "WIP: bandaid fix. Food Grade Oil is the intended input here. Shapeless 1:1 crafting is possible for now",
    ),
  );

  event.add(
    Ingredient.of("#poinky:removed"),
    { shift: false },
    Text.orange("Removed from survival!"),
  );

  event.add(
    "cobblemonsizevariation:huge_essence",
    { shift: false },
    Text.gray("WIP: Eat to become CHONKY"),
  );
  event.add(
    "cobblemonsizevariation:growth_essence",
    { shift: false },
    Text.gray("WIP: Eat to become larger"),
  );
  event.add(
    "cobblemonsizevariation:normal_essence",
    { shift: false },
    Text.gray("WIP: Eat to return to normal size"),
  );
  event.add(
    "cobblemonsizevariation:shrink_essence",
    { shift: false },
    Text.gray("WIP: Eat to become smaller"),
  );
  event.add(
    "cobblemonsizevariation:tiny_essence",
    { shift: false },
    Text.gray("WIP: Eat to become MINISCULE"),
  );
});
