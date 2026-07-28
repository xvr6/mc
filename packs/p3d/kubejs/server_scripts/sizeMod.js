const changeMon = (player, amount) => {
  console.log("hai");
  const pNbt = player.getNbt();
  const activeSlot = pNbt.get("SynchroSavedTeam").getInt("active");
  console.log(activeSlot);
  const currentSize = pNbt
    .get("SynchroSavedTeam")
    .get(`slot_${activeSlot}`)
    .getFloat("ScaleModifier");
  console.log(currentSize);
  pNbt["SynchroSavedTeam"][`slot_${activeSlot}`]["ScaleModifier"] =
    currentSize + amount;
  player.server.runCommandSilent(
    `/synchro slot activate ${activeSlot + 1} ${player.getUsername()}`,
  );
  console.log("scaled mon");
};

ItemEvents.modifyTooltips((event) => {
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
