global.removals = (event) => {
  // - Removing duplicate cinnamon bark
  event.remove({ output: "creategarnished:cinnamon_bark" });
  event.remove({ output: "creategarnished:cinnamon_stick" });
  event.remove({ id: "creategarnished:crafting/gingerbread_flour" });

  // - Removing all pasta recipes but garnished
  event.remove({
    not: { type: "ratatouille:squeezing" },
    output: "farmersdelight:raw_pasta",
  });

  // - Remove any recipes for chocolate that dont use the mold
  event.remove({
    not: { type: "ratatouille:demolding" },
    output: "create:bar_of_chocolate",
  });
  // no longer has ANY purpose so can be removed
  event.remove({ output: "createdieselgenerators:mold" });

  // - Remove recipies for cakes that do not use the cake base from ratatouille
  event.remove({ output: "createaddition:cake_base" });
  event.remove({ input: "createaddition:cake_base" });
  event.remove({ input: "createaddition:cake_base_baked" });
  //evil....... :)
  event.remove({ output: "create_deep_dark:echo_cake_base" });
  event.remove({ output: "create:blaze_cake_base" });
  event.remove({ output: "create_enchantment_industry:experience_cake_base" });
};
