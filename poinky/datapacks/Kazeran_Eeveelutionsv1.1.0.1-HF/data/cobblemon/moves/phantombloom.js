{
  num: 22051,
  accuracy: 100,
  basePower: 60,
  category: "Special",
  name: "Phantom Bloom",
  pp: 10,
  priority: 0,
  flags: { protect: 1, mirror: 1, metronome: 1 },
  secondary: {
    chance: 100,
    onHit(target, source, move) {
      if (target.hasType('Ghost')) return false;
      target.addVolatile('curse');
    }
  },
  target: "normal",
  type: "Grass",
  onEffectiveness(typeMod, target, type) {
    if (type === 'Ghost') return 1;
  },
  recoil: [25, 100]
}