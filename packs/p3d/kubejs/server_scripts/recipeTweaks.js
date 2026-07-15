ServerEvents.recipes((event) => {
  global.removals(event);
  global.additions(event);
});
