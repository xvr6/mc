{
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(2, 10)) {
					source.trySetStatus('tox', target);
				}
			}
		},
		flags: {},
		name: "Toxic Ribbons",
		rating: 2.5,
		num: 220506,
	}