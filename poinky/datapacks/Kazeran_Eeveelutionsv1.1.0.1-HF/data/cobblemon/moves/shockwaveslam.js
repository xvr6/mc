{
  num: 22058,
  accuracy: 100,
  basePower: 90,
  category: "Special",
  name: "Shockwave Slam",
  pp: 10,
  priority: 0,
  type: "Electric",
  flags: { protect: 1, mirror: 1, metronome: 1, nonsky: 1},
  onEffectiveness(typeMod, target, type) {
    return typeMod + this.dex.getEffectiveness('Ground', type);
  },
  secondary: {
    chance: 100,
    boosts: { spe: -1 }
  },
  target: "allAdjacentFoes"
}