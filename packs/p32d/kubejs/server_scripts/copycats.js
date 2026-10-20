ServerEvents.recipes((event) => {
  // decrease cost of copycat blocks from copycats+
  event.replaceInput(
    {
      or: [
        { type: "minecraft:stonecutting", mod: "copycats" },
        { output: "create:copycat_panel" },
        { output: "create:copycat_step" },
      ],
    },
    "create:zinc_ingot",
    "create:andesite_alloy",
  );

  event.shapeless("create:andesite_alloy", "copycats:copycat_block");
});
