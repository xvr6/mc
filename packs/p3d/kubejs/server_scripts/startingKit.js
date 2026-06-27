const startingKit = [ // Define starting kit here! Entries are: [item:id, count]
    ["minecraft:wooden_sword", 1],
    ["minecraft:wooden_pickaxe", 1],
    ["minecraft:wooden_axe", 1],
    ["create:wrench", 1],
    ["railways:handcar", 1],
    // ["cobblemon_synchro_machine:synchro_machine", 1],
    ["cobblemon:poke_ball", 16],
    ["createfood:apple_jam_sandwich", 16]
];

//the actual event
PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has("kit_given")) {
        event.player.stages.add("kit_given")
        const entity = event.entity.username
        for (const item in startingKit) {
            let element = startingKit[item];
            event.server.runCommandSilent(`give ${entity} ${element[0]} ${element[1]}`)
        }
    }
});