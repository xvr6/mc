{
  onModifyAtkPriority: 5,
  onModifyAtk(atk, attacker, defender, move) {
    if (move && move.type === 'Fire' && attacker.hp > attacker.maxhp / 2) {
      return this.chainModify([1.2]);
    }
    if (move && move.type === 'Dragon' && attacker.hp <= attacker.maxhp / 2) {
      return this.chainModify([1.2]);
    }
  },
  onModifySpAPriority: 5,
  onModifySpA(spa, attacker, defender, move) {
    if (move && move.type === 'Fire' && attacker.hp > attacker.maxhp / 2) {
      return this.chainModify([1.2]);
    }
    if (move && move.type === 'Dragon' && attacker.hp <= attacker.maxhp / 2) {
      return this.chainModify([1.2]);
    }
  },
  flags: {},
  name: "Dragon's Rage",
  rating: 4,
  num: 220504
}
