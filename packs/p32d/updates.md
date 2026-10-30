# Update Changelogs

## Update v3.2.2c

### Mod Adjustments

- [Paving the way](https://modrinth.com/mod/paving-the-way/gallery); more path variants
  - These work with via romana!
- Removed tool trims (added in previous update); bugged out all trim applications
- Removal of Meta Logistics, simulated gauges & extra gauges
  - Compatability issues with other logistics-enhancing mods; most commonly used
    extra gauges features are generally un-needed with factory controller

### Recipe fixes

- Missing raw ore block crushing recipes for uranium and lead
  - some others are missing, though they are unable to be added until
    custom crushed ore items are added
- Adjusted platinum ore crushing Recipes
  - changed 4x output to just be an exp heap.
  - modified crushing recipe for single raw ore inline with block
- fixes to obsidian poweders; making them convertable instead of replacing one
  powder with the other as this broke other recipes.

## Update v3.2.2b

### Recipe adjustment

- Soul Sand Washing (Quartz major nerf, gold minor buff)
  - Im adjusting the washing recipe of soul sand to be
    slightly better for gold output (~3 nuggets per stack instead of ~1.5)
    and worse for quartz (\~9 per stack instead of \~30)
    since it gives so much quartz by default
- Flint block haunting to blackstone
  - way to get rid of excess flint waste as a useful stone builders use!
- Dacite automation by blasting Gabbro
  - preciously un-automatable stone type

### Regen on respawn

There are currently a few issues known where you
can just get softlocked and unable to /back to get your
stuff. As a QoL and fix (but will be kept indefinitely)
you now respawn with regen for 20sec.

### Mod Additions

- Create Colorful Packages
- Pottery
- Create mixed casings

### Mod Fixes

- Create fluid blocks are now dyeable again with bits'n'Bobs
- Disable of fancy rendering for building wands as it is currently bugged. now you will only see a wireframe and no block preview

## Update v3.2.2a

- Roller Coasters and more fun building/create things!
  - [Create: Coasters Simulated](https://modrinth.com/mod/create-coasters-simulated)
  - [Coasters: Engineered](https://modrinth.com/mod/coasters-engineered)
- Removed meta logistics chunk loader; power loaders is preferred
- [Vista](https://modrinth.com/mod/vista_tv) added
  - Note: this mod MAY not work in all cases, and is
    known to cause major lag and/or visual bugs with shaders on.
- [Create: Factory Controller](https://modrinth.com/mod/create-factory-controller)

## Update: v3.2.2

### Adjusted default resourcepacks

- removed bugged CSSS pack
- re-added poinky lang to default pack

### Recipes

- Copycat blocks now use andesite alloy
  - Now, they will be accessable in mass quantities earlier on to the players,
    allowing for more fun early game building projects :D
  - _Why should something meant for building be so... hard to obtain early game
    when ur building the most?_
- Vault recipe fixes:
  - Bugged recipes removed, allowing for cheaper creation of frogports
  - Where it makes sense, reicpes that previously required item vaults now also
    accept item silos
    - **_SOME BUGS MAY OCCUR_** as this was done with broad tags. If issues are
      found contact me
- Pumpkins
  - Since chipped pumpkins can be naturally found in the overworld, they can now
    be shapeless converted in any crafting interface to the normal minecraft
    version for easier crafting

### New Items and Blocks

> First custom items and blocks added to the pack; textures modified by cobalt
> (all can be seen by searching for `@poinky` in emi)

- Blaze Cakes
  - Recipes have not changed much in cost, instead there are now custom
    intermediary items for all blaze cake types
- Seed/Crop bags
  - Addition of several seed bags (9 seeds compressed into one block)
  - Addition of berry bags (same thing)

## Update: v3.2.1

> Note: I didnt keep track of every individual change between this pack and the
> original p3d. This is not an exhaustive changelog, but it contains most of the
> important things to note since the p32d server came online!

### Notable Changes

- Re-added Bumblezone cause funny
- Nether Portals can be goofy shapes
- Pets **_should_** teleport when using Via Romana warps, /home, /back, /spawn, etc.
- Create Nuclear... PLEASE read the [wiki](https://wiki.createnuclear.net/)
  - Uranium is dangerous; proper PPE must be used.
  - you can ACTUALLY BLOW UP if you dont build reactors right!
  - As a result of this mod updating, new ores were added. Leave the currently
    loaded chunks (visible on [bluemap](https://map.prectriv.cc) to find the new resources (just leave spawn "continent" to be safe)
- Create Colorful Pipes & Vibrant vaults replaced with Bits 'n' Dyes
  - BnD is a lot more feature complete, allowing for a lot more things to be dyed.
  - The mod does _not_ add in the items to emi (they are not crafted), instead
    you dye them by just applying dye physically to it in the world once placed down.
- Bits 'n' Bobs
  - Chains can be modified once placed, keeping their rotation
  - Cogwheel Chain Carriage :)
  - Chairs got patched and are re-enabled!
    - Check Misc for relevant information about chair renames

- Petrol Parts re-added
  - Hydraulic transmission is disabled
- Create: Fluids
  - For more info, check the [mod page](https://www.curseforge.com/minecraft/mc-mods/create-fluid) (its a bit complex!)
  - TL;DR - Fluid Logistics network integration; More fluid based functional blocks

### Recipe Adjustments

- Shearpin/shaft half recipe conflict
- Bamboo Block can be broken back down into 9 bamboo
- Obsidian adjusted:
  - Powdered obsidian is now easier to obtain (4 per crushing cycle instead of just 1).
    Outputs cobbled obsidian with lower rate (85% chance).
    - This was done to make obsidian farms a bit more difficult to make, but stronger once setup!
- Train Head-Tail lights were simplified a lot
  - Previous: sequenced assembly
  - Now: Shaped crafting (same components)
- All Fueling Tank tiers cheapend and adjusted
  - Small Fueling Tank: 2 Sturdy Sheet, one Small _Filling_ Tank
  - Medium Fueling Tank: 2 Sturdy Sheet, one Medium _Filling_ Tank
  - Large Fueling Tank: 2 Sturdy Sheet, one Large _Filling_ Tank
- ... and lots of other minor changes!

### Misc

- New fresh animations addons
- New create-styled sophisticated storage/backpacks resource packs
- Rename of ALL Create + Addon chairs.
  - Interiors Chair -> Raised Chair
  - Interiors Floor Chair -> < no change >
  - Bits 'n' Bobs Chair -> Styled Floor Chair
    - (also it was reenabled now that its bugfixed :D)
- Renamed `chipped:cobbled_obsidian`&`chipped:cobbled_crying_obsidian` to Cracked (Crying) ObsidianCracked (Crying) Obsidian
