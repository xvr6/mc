{
  num: 22053,
  accuracy: 100,
  basePower: 70,
  category: "Physical",
  name: "Venomous Embrace",
  pp: 10,
  priority: 0,
  type: "Fairy",
  flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
  onHit(target, source, move) {
    if (target.runStatusImmunity('psn')) target.setStatus('psn');
    target.addVolatile('trapped', source, move, 'trapper');
  },
  secondary: null,
  target: "normal"
}