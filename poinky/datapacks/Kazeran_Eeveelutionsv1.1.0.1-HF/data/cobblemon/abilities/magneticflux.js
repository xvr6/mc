{
  onModifyMove(move) {
    if (move.type === 'Electric') {
      move.secondaries = move.secondaries || [];
      move.secondaries.push({ chance: 50, boosts: { spe: -1 } });
    }
  },
  flags: {},
  name: "Magnetic Flux",
  rating: 3,
  num: 220505
}
