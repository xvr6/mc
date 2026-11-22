// Property changes to items from other mods.
// (StartupEvents.modifyItem crashed on launch; ItemEvents.modification is the 1.21.1 event.)

ItemEvents.modification((event) => {
  // Peat is not a fuel
  event.modify("biomeswevegone:peat", (item) => {
    item.burnTime = 0;
  });
});
