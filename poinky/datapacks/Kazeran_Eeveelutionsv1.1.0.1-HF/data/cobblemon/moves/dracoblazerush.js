{
  num: 22057,
  accuracy: 95,
  basePower: 100,
  category: "Physical",
  name: "Dracoblaze Rush",
  pp: 10,
  priority: 0,
  type: "Fire",
  flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
  recoil: [1, 4],
  onEffectiveness(typeMod, target, type) {
    return typeMod + this.dex.getEffectiveness('Dragon', type);
  },
  onAfterMoveSecondarySelf(source, target, move) {
    if (!source || source.fainted) return;
    if (this.field.isWeather(['sunnyday', 'desolateland'])) {
      this.boost({ spe: 1 }, source, source, move);
    }
  },
  secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
  target: "normal"
}