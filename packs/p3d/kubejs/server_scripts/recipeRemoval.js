ServerEvents.recipes((event) => {
  //removing duplicate cinnamon bark
  event.remove({ output: "creategarnished:cinnamon_bark" });
  event.remove({ id: "creategarnished:crafting/gingerbread_flour" });
//todo: work on changing recipies for pancakes, cakes to use ratatouille cake bases instead. 
});
