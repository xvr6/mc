{
  num: 22056,
  accuracy: 95,
  basePower: 75,
  category: "Special",
  name: "Siren's Song",
  pp: 10,
  priority: 0,
  type: "Water",
  flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1 },
  secondary: {
    chance: 100,
    volatileStatus: "yawn"
  },
	onTryHit(target) {
			if (target.status || !target.runStatusImmunity('slp')) {
				return false;
			}
		},
  onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Fairy', type);
	},
  target: "normal"
}