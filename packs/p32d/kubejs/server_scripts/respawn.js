PlayerEvents.respawned((event) => {
  const player = event.player;

  // 20sec
  player.potionEffects.add("minecraft:regeneration", 400, 4, false, true);

  player.tell(
    "§aYou have been given regen for 20 seconds, /back while you can!",
  );
});
