{
  onResidual(pokemon) {
    if (this.field.isWeather(['sunnyday', 'desolateland', 'snow', 'hail'])) {
      this.heal(pokemon.baseMaxhp / 10, pokemon, pokemon);
      this.add('-ability', pokemon, 'Thermal Bloom');
    }
  },
  onModifyAtkPriority: 5,
  onModifyAtk(atk, attacker, defender, move) {
    const isSun = this.field.isWeather(['sunnyday', 'desolateland']);
    const isSnow = this.field.isWeather(['snow', 'hail']);
    if ((move.type === 'Fire' && isSnow) || (move.type === 'Ice' && isSun)) {
      this.debug('Thermal Bloom inverse boost (Atk)');
      return this.chainModify([1.25]);
    }
  },
  onModifySpAPriority: 5,
  onModifySpA(spa, attacker, defender, move) {
    const isSun = this.field.isWeather(['sunnyday', 'desolateland']);
    const isSnow = this.field.isWeather(['snow', 'hail']);
    if ((move.type === 'Fire' && isSnow) || (move.type === 'Ice' && isSun)) {
      this.debug('Thermal Bloom inverse boost (SpA)');
      return this.chainModify([1.25]);
    }
  },
  flags: {},
  name: "Thermal Bloom",
  rating: 4,
  num: 220501
}
