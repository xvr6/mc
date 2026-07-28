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
