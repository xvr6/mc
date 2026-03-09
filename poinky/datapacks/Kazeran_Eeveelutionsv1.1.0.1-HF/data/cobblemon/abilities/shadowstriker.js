{
  onModifyMove(move) {
    if (move.type === 'Dark') {
      move.secondaries = move.secondaries || [];
      move.secondaries.push({ chance: 25, volatileStatus: 'flinch' });
    }
  },
  flags: {},
  name: "Shadow Striker",
  rating: 3.5,
  num: 220507
}
