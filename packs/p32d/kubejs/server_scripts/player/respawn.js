// Grace period after respawning.

PlayerEvents.respawned((event) => {
  const player = event.player;

  // 20 sec of Resistance V
  player.potionEffects.add("minecraft:resistance", 400, 5, false, true);

  player.tell(
    "§aYou have been given resistance for 20 seconds, /back while you can!",
  );
});
