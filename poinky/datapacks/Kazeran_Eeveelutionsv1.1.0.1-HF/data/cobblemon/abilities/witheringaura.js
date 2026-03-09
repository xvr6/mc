{
	onDamagingHitOrder: 1,
	onDamagingHit(damage, target, source, move) {
		if (!source || source.fainted) return;
		if (this.checkMoveMakesContact(move, source, target, true)) {
			this.damage(source.baseMaxhp / 8, source, target);
			this.heal(target.baseMaxhp / 8, target, target);
			this.add('-ability', target, 'Withering Aura');
		}
	},
	flags: {},
	name: "Withering Aura",
	rating: 3.5,
	num: 220503
}
