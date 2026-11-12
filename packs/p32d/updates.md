# Update Changelogs

## Update v3.2.5b - literally just loconautics

> Yeah, that's it (and misc mod bugfixes) :3

### THIS MOD IS VERY VERY BETA, EXPECT SOME THINGS TO BE NON-FUNCTIONAL.

- Watch ponders carefully, read the mod page and good luck!
  - Ofc, if any resource loss occurs on our survival server they can be cheated back in by an admin.
- Report issues directly to the loconautics devs on their [github](https://github.com/Lyccoriis/Create-Loconautics/issues)
- Due to the mod being inaccessable via CFs api, it is downloaded from [here](https://www.curseforge.com/minecraft/mc-mods/createloconautics)
  and redistributed here with packwiz as a raw file instead of a the usual download link.
  Once mod is accepted onto modrinth, it will be downloaded through there!

## Update v3.2.5a

> Filling in Botany Pot support for the rest of the pack

### Recipes

#### New Botany Pot Inputs (Nether Descent)

> All of these grow on any nylium or nether soil (netherrack, soul soil, etc)

- Arisian sapling
- Sythian fungus
- Wailing fungus
- Embur wart
- Arisian sprouts
- Tall arisian sprouts
- Arisian tangle roots
- Embur roots
- Tall embur roots
- Embur sprouts
- Embur gel vines
- Embur hanging moss
- Embur cave moss
- Fungal bulbs
- Sythian roots
- Hanging sythian roots
- Sythian sprouts
- Sythian stalk
- Tall crimson fungi
- Tall crimson roots
- Thorn sprout
- Wailing bulb blossom
- Wailing gills
- Wailing grass
- Wailing vines
- Crimson berries

#### New Botany Pot Inputs (Everything Else)

- Cola sapling
- Cranberries
- Wild asparagus, chili pepper, peanuts, sweet potato
- Wild corn
- Cave carrots
- Wild cave carrots
- Gossypium
- Powder cannon (grows bullet peppers; soul sand)
- Crimson & warped fungus colonies (nylium / nether soils)
- Amberveil, Chorusflame, Ethereal saffron, Voidpepper (end stone)
- Nether Expansion (nylium / nether soils):
  - Sorroweed
  - Soul torchflower
  - Cerebrage kale
  - Twisting & weeping ivy
  - Crimson sprouts
  - Warped wart (soul sand)
  - Crimson & warped sporeshrooms
  - Nether wart & warped wart beards
- Lichen cordyceps, Lichen roots, Bowl lichen (lichen moss)
- Unusual End (end stone):
  - Chorus cane
  - Chorus roots
  - Endstone sprouts
  - Warped sprouts
  - Gloopilon seeds
  - Gloopy bush
  - Gloopy tendrils
  - Warped bush
  - Small warped algae
  - Small warped squash (yields warped squash wedges)
  - Purpur grass
- Chorus weeds (end stone)
- Frost lily (snow)
- Prickly peach cactus (yields prickly peaches; sand)
- Prickly vines (sand)
- Poison ivy, Skyris vine, Spirit roots
- Willow vines, Small bush

#### New Botany Pot Soils

- Lichen moss
- Embur nylium
- Sythian nylium
- Wailing nylium
- Crimson blackstone nylium
- Sythian soil
- Embur moss block
- Arisian moss block
- Blue Netherrack

## Update v3.2.5

> This is majorly a modification to crafting recipes with some other
> minor things here and there.

### Mod Changes

- Added: [Create: Bionics](https://modrinth.com/mod/create-bionics/version/2.5.0)
  - Pinned to v2.5.0 due to the newer version crashing server on boot. Will unpin once fixed!
- Many more mods updated, none of which being of major note

### Recipes

#### New Botany Pot Inputs

- Poplar sapling
- Pale oak sapling
- Cactus flower
- Closed eyeblossom
- Wildflowers
- Vines
- Hanging roots
- Soul fruit
- Pale pumpkin
- Blue, Green, Red, Yellow glowcane shoot(s)
- Glow shroom
- Buttercup
- Swamp daisy
- Chorus fungus
- Flowering chorus grass
- Shiny spirea
- Crystal flower
- Arisian blossom
- Tall arisian dandelions
- Arisian dandelions
- Embur lily
- Willow sapling
- Poplar sapling
- Crabapple sapling
- Sycamore sapling
- Fluorescent maple sapling
- Maize:
- Cinnamon sapling
- Asparagus
- Sweet potato
- Chili pepper
- Peanuts

#### New recipes for previously-non-renewable resources

- Borealis Ice (Channeling ice)
- Soul Slate (Blasting Soul Soil)
- White Dacite (Blasting Calcite)
- Quicksand production
  - `fluid:quicksand_fluid`; mixing sand + water
  - `fluid:quicksand`; Compacting `quicksand_fluid`
  - `fluid:quicksand`; shapeless conversion to `biomeswevegone:quicksand`
  - `biomeswevegone:red_quicksand`; Standard 8:1 dye recipe
- Red Rock; 2x Red Sand + 2x Cobblestone pressing for 8x Red Rock
- Cracked (red) Sand; Smoking (red) Sand
- Peat; 2x Mud + 2x Dirt for 4x peat
- Lush dirt; 2x Peat + 2x Dirt for 4x lush dirt
  - More additons may be made for all variant grass types (overgorwn, podzoil, etc),
    though it seems redundant as the blocks can just spread

#### Misc

- Removed create metalurgy Refactory mortar; repalcing all crafting recipes with
  normal clay
  - kinda pointless as half of this mods content is disabled (ladles; completely useless with fluid)
- Replaced `createfactorycontroller:cut_amethyst` with
  `createutilities:polished_amethyst` in all recipes
- Adjusted crushing output for scorchia, providing more tungsten
- Adjusted tungsten wire spool to use a wire spool item like electro energetics
  for consistency
- Removed peat having a burn time
  - EDIT: currently still a fuel; kubejs appearts to not be able to modify this
    value anymore
- Made Packed black ice craftable with normal packed ice and black dye
  - Parody of normal ice -> black ice
- Removed custom washing recipe for powder snowsnowsnow
  - This was done as create:fluid already adds in a way to do
    mob-griefing-less large scale snow automation
- Crushing Budding Amethyst
  - 80% chance for an Amethyst block
  - 100% chance for Glinted Amethyst Clusters
- Crushing Glinted Amethyst Clusters
  - 100% chance for 4 Amethyst shards
  - 75% chance for 2 glowstone dust
- Removed bugged cbc spring wire recipe
- Fixed Create Interiors chair re-dyeing recipes

### Respawning

- Changed from regen -> resist; same duration (20sec) and strength (4)

### Name changes

- Jadens nether expansion (thin) Black Ice -> renamed to (thin) Shade Ice

## Update v3.2.4

### Mod Additions

- [Contraption Lights](https://modrinth.com/mod/contraption-lights)
  - Lighting effects from sable and create contraptions
- [Bits 'n' Tracks](https://modrinth.com/mod/bits-n-tracks-ce)
  - tank treads and the like!
- [Create More Girder](https://modrinth.com/mod/create-more-girder/gallery)
  - more girder types
- [Create Prismatic Shine](https://www.curseforge.com/minecraft/mc-mods/create-prismatic-shine)

### Mod Fixes/Removals

- Create mixed casings removed, it was breaking creates integration with ultimine. Replaced with Create Casings which is effectively the same but better
- TT20 was causing weird ticking chunk errors and thus has been removed
- Supplementaries awnings were re-enabled

## Update v3.2.3

### Mod Additions

- [Tool Trims](https://modrinth.com/datapack/tool-trims)
  - Fixed! Now added as a datapack instead of a mod and that fixes it.
  - Items do not show up in emi
- Roller Coasters and more fun building/create things!
  - [Create: Coasters Simulated](https://modrinth.com/mod/create-coasters-simulated)
  - [Coasters: Engineered](https://modrinth.com/mod/coasters-engineered)
- [Vista](https://modrinth.com/mod/vista_tv) added
  - Note: this mod MAY not work in all cases, and is
    known to cause major lag and/or visual bugs with shaders on.
- [Create: Factory Controller](https://modrinth.com/mod/create-factory-controller)
- [Paving the way](https://modrinth.com/mod/paving-the-way/gallery); more path variants
  - These work with via romana!
- [Create: Colored Packages](https://modrinth.com/mod/create-colored-packages)
  - dye packagers for cosmetic colored package outputs.
  - WARN: does NOT work with Create: Fluid can fillers, logistics
    junctions; any non-base create packaging block
- Pottery
- Create mixed casings
- Natures Compass (wayfinders just doesnt work reliably)

### Mod Adjustments

- `/back /home /spawn` cooldowns reduced (30 -> 15 sec)
- Re-enable of accidentaly disabled quark runes
  - Enchantment glint color changing
- Sterling Engines now give 6144 SU instead of 4096
- Attempted fix for biblically accurate emi tags
  - Its a known issue with emi and jei running at the same time; there is a pr
    to fix it not merged into emi yet
- Removed meta logistics chunk loader; power loaders is preferred
- Removal of Meta Logistics, simulated gauges & extra gauges
  - Compatability issues with other logistics-enhancing mods; most commonly used
    extra gauges features are generally un-needed with factory controller
- Create fluid blocks are now dyeable again with bits'n'Bobs
- Disable of fancy rendering for building wands as it is currently bugged. Now
  you will only see a wireframe and no block preview

### Recipe adjustment

- Soul Sand Washing (Quartz major nerf, gold minor buff)
  - Im adjusting the washing recipe of soul sand to be
    slightly better for gold output (~3 nuggets per stack instead of ~1.5)
    and worse for quartz (\~9 per stack instead of \~30)
    since it gives so much quartz by default
- Flint block haunting to blackstone
- Dacite automation by blasting Gabbro
- Electro energetics:
  - Pole crafting recipe converted to clayworks concrete blocks
  - Magnet removed in favor of simulated magnet
  - Resistive heater recipe adjusted to make more sense
  - Changed transformer core lamination to use iron trapdoors instead of sheets
- Adjustment to crushing recipe of Autunite since there is now ways to automate
  lead in base create nuclear
- Adjustments to Crimsite and Asurine recipe buff (~3x output probability, more
  slag as compensation nerf)
- Aeronautics hot air burner changed to use charcoal
- Purify wither rose with channeling
- Missing raw ore block crushing recipes for uranium and lead
  - some others are missing, though they are unable to be added until
    custom crushed ore items are added
- Adjusted platinum ore crushing Recipes
  - changed 4x output to just be an exp heap.
  - modified crushing recipe for single raw ore inline with block
- Fixes to obsidian powders; making them convertable instead of
  bulk replacing one powder with the other as this broke recipes.
- Removal of worse 6 way gearboxes from create connected

### Regen on respawn

There are currently a few issues known where you
can just get softlocked and unable to /back to get your
stuff. As a QoL and fix (but will be kept indefinitely)
you now respawn with regen for 20sec.

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
  - Bugged recipes removed that previously allowed for cheaper creation of frogports
  - Where it makes sense, reicpes that previously required item vaults now also
    accept item silos
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
