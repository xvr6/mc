{
  onDamagingHit(damage, target, source, move) {
    if (move && move.category === 'Special') {
      this.add('-ability', target, 'Prism Capacitor');
      this.effectState.charged = true;
    }
  },
  onModifyAtkPriority: 5,
  onModifyAtk(atk, attacker, defender, move) {
    if (this.effectState.charged && move && move.type === 'Psychic') {
      this.debug('Prism Capacitor boost (Atk)');
      return this.chainModify([1.5]);
    }
  },
  onModifySpAPriority: 5,
  onModifySpA(spa, attacker, defender, move) {
    if (this.effectState.charged && move && move.type === 'Psychic') {
      this.debug('Prism Capacitor boost (SpA)');
      return this.chainModify([1.5]);
    }
  },
  onAfterMoveSecondarySelf(pokemon, target, move) {
    if (this.effectState.charged && move && move.type === 'Psychic') {
      this.effectState.charged = false;
      this.add('-end', pokemon, 'Prism Capacitor');
    }
  },
  flags: {},
  name: "Prism Capacitor",
  rating: 4,
  num: 220502
}
