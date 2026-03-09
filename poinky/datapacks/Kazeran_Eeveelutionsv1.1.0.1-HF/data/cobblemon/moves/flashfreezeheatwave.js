{
  num: 22052,
  accuracy: 100,
  basePower: 90,
  category: "Special",
  name: "Flashfreeze Heatwave",
  pp: 10,
  priority: 0,
  type: "Ice",
  flags: { protect: 1, mirror: 1, metronome: 1, wind: 1 },
  secondary: {
    chance: 30,
    onHit(target, source, move) {
      if (this.randomChance(1, 2)) {
        if (!target.status && target.runStatusImmunity('brn')) target.setStatus('brn');
      } else {
        if (!target.status && target.runStatusImmunity('frz')) target.setStatus('frz');
      }
    }
  },
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Fire', type);
	},
  target: "normal"
}