{
  onModifyAtkPriority: 5,
  onModifyAtk(atk, attacker, defender, move) {
    if (move.flags && move.flags.sound) {
      return this.chainModify([1.25]);
    }
  },
  onModifySpAPriority: 5,
  onModifySpA(spa, attacker, defender, move) {
    if (move.flags && move.flags.sound) {
      return this.chainModify([1.25]);
    }
  },
  onModifyMove(move) {
    if (move.flags && move.flags.sound) {
      move.secondaries = move.secondaries || [];
      move.secondaries.push({ chance: 30, boosts: { spe: -1 } });
    }
  },
  flags: {},
  name: 'Sonic Resonance',
  rating: 3.5,
  num: 220508
}
