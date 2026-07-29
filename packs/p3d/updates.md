# Update Changelogs!

## Update: v3.1.3-beta1/2

### Neoforge update

> Updating with packwiz will cause your game to still load with the old version and crash. Restart again and it'll be fixed :)

- 21.1.233 -> 21.1.244
- may cause some random bugs here and there, please bring to my attention if so

### Recipes

- Adjustments to Cooking Oil
  - Boilstone heating converts 500mb of seed oil into 125mb Food Grade Seed Oil (rename of ratatouille_dried_delights:sunflower_oil)
    - With intend of this replacing all inputs for rusticdelight:cooking oil.
    - CURRENTLY INCOMPLETE; mass replacement of inputs with kjs not working, shapeless 1:1 converstion between food grade oil and cooking oil
- Eggs are now much more obtainable, and thus should be nerfed a bit.
  - Eggshells are no longer 1to1 with ratatouille compost, now 4to1

- Seed oils no longer overlap
  - only seed oil from crafts and aditions possible.

- Change Brass Gearbox recipe to be _slightly_ cheaper.
  - requires preciison mechanism instead of a full rotaional speed controller (technically cheaper by one brass but its more QoL)

- Recipes for cinnabar and sulfur blocks
  - Since they're cosmetic, it is just 128mb dye filling of Calcite

### Mod tweaks

- Updates to Industrially Plated
  - New type of sign: fire safety signs, modified to be crafted the same way as the others!
    - Filling of iron plate with red dye -> blank sign
    - Stonecutter blank sign -> all red variants
  - Recipes added for this pack added for hazard and radiation hazard stripe blocks
    - Yellow dye filling of black and pink concrete respectively
- Aeronautics air pressure cutoff removed (thanks chloe!)
  - Previously, when u reached Y=320 your plane would just... fall out of the sky.
  - New maximum height is set to Y=500 and it gradually decreases in air pressure until then!
- Coop block (for egg production) has been changed:
  - Now it has a flat ~30sec cooldown between each egg it generated
  - Cooldown fluctuates by ~3sec just for pure randomization sake and for coops not producing in lock step
  - One seed is consumed by the belt/depo infront of it and an egg is produced each time.
  - mainly done as a lag optimization thing; no longer a need for chicken farms if all you care about is eggs.
    - Note that feathers are also craftable with nothing but some string and a stick
- Origins is, for now, completely gone
  - Current version we were using was really buggy and caused lots of assumed lag

### Misc

- WIP: player size adjutment with essences
  - you'll notice on the cobblemon size essences there are now descriptions.
    I'm working on a way to make them edible and allow the player to grow/shrink in size with pehkui.
- A relatively 'decent' jei default config was added to aleviate some transition pains from EMI

## Update: v3.1.2

- Mostly mod updates, but of note:
  - Create parallel pipes
  - Create storage compat
  - Create stuff n additions aeronautics compat
  - Full switch to JEI over EMI for compatability
  - Petrol Parts was removed; was causing too many issues
- Bundle with 2 of each farm animal.
  - bandaid fix to mobs refusing to spawn on survival server.

- Feather crating recipe; 1 stick, 1 wool, 1 string -> 3 feather

- Fixed overlapping cake batter and pie crust recipe
  - pie crust now made with press
- Attempting to fix the bucket issues
  - many buckets not in `c:buckets`
  - a few buckets dont have draining recipies, meaning fluids are completely stuck in their bucket form if picked up

## Update: v3.1.1

### Mod changes

- Just one addition: a stonecutter mod that allows you to search!
- Tectonic / Road Weaver are now optional
  - DO NOTE HOWEVER: the p3d server will still require road weaver to connect and must be enabled to join.
  - These two mods cause loading of singleplayer worlds to take FOREVER, so disabling them makes local play more possible!

### Recipe changes

#### Overlaps and fixes

- For some brick types, when being smelted there were multiple outputs. Now some are craftable via stonecutter
- overlapping recipe removals for scaffolding and lever
- tinted glass pane from immersive weathering now craftable
  - Also, tinted glass is cheaper to make now!
- shapeless crafting of 2x ash and 2x bone block

#### Food Changes

- replaced ratatouille freezing with fan freezing instead
- Hotdog from ratatouille fried delights removed; replaced all crafting with my nethers delight as output
- Pancake recipies all changed to require fried delights (meaning molding process) as base
  - honey pancakes removed

#### Netherrack automation

- made 80% chance, but uses 750mb instead
- meant to make full automation of superheated fuel more expensive and requires much larger setup

#### Renewable snow w/o golem

- Bulk freezing a bucket of water -> powder snow
- Shapeless powder snow -> bucket back and snow block

## Update: v3.1.0!

> Finally.... the update I've been hinting at for a bit.
> This involves a lot of new recipes, and rebalances as a result. Please read everything carefully, specifically the recipe changes.

### Mods:

List of all notable changes to mods (meaning, not everything is listed :p)

#### Additions

- Added CC addons:
  - Create CC total Logistics
  - CC Terminals
  - CC Bridge
  - CC Redstone Link
- Other Added Mods:
  - Aero Cam Sync (optional, heavily recomended)
  - Comforts (sleeping bag + hammock)
  - Etched (mp3/soundcloud disks in mc!)
  - Industrially Plated (decoration mod; check recipes section)
  - lever drugster (changes most analog levers to work just like aeronautics)
  - Starcatcher + its delight addon (FISHING!!!!!!!!!!!!!!!!)

#### Notable Updates:

- Create Train Parts ([changelog](https://modrinth.com/mod/create-train-parts/version/0.5.0))

#### Removals

- Removed better days (sleeping mod)
  - FOR NOW, will be added back later once kubejs script made (see note about cobblemon PP regen)
- Removed create food,
  - It bloated the list of foods we could produce by... just too much. Also had some very weird recipes
- create lazy tick, entity culling
  - both are optomization mods, CLT causing errors with create contraptions, EC effectively a duplicate of sodiums own culling and causes crashes with it.

### Recipe Changes

> Key: `input -> output (percentage chance / count)`
> There were a TON of balance changes made here, not all of them in favor of the player and a lot involve create

#### Void Steel (bluetooth create rotation/fluids/ etc.)

- Base way of creation has been removed.
- Now it _must_ be created through create metallurgy

#### Cooking / Food changes (AND BLAZE CAKES)

- Requirement of ratatouille cake molding to make ALL cake types.
  - this is also a buff / more efficient recipe but it is more complex for blaze cakes.
  - required for normal minecraft cakes as well
- Requirement of ratatouille chocolate molding to make chcolate. All other recipes removed.
- Replacement of create garnished cinnamon with expanded delight
- replaced all salt with ratatouille
  - salt from expanded delight still works; `#c:salt` created (`ratatouille:salt`, `expandeddelight:salt`,`moresnifferflowers:salty_spice`)

#### Cobblemon

- `@cobblemonsizevariation` essences are now all craftable, allowing players to change their mons sizes!
  - as a note, incompatable with synchro for now. Issue is on their side, hopefully to be fixed at some point
- Removed all hand craftable recipes to craft pokeballs with the exception of tier one balls
- New tag `#poinky:non_hand_craftable` to see exactly what ones are uncraftable with normal methods now. Tag likely to expand with other items as well as content gets removed
- must now be done with create sequenced assembly (ignoring ancient origin ball)
- Ancient origin ball is cheaper (no more netherite)
  - its cosmetic...? so why does it need 2 more netherite.
  - uses 4 balck tumblestone instead
  - 4 redstone dust instead of 4 redstone blocks

#### Enriching

> New crafting type added by create: nuclear that i wanted to expand a bit!

- Tuff -> Autunite 15%
- `#small_flowers` -> Wither Rose 40%
- `#tall_flowers` -> Wither Rose & Wither Rose 20%
- Amethyst + Citrine -> Their Budding versions
- Soul Soil -> Enriched Soul Soil 15%
- `#flours` -> Cinder Flour 35%

#### Other Stones and Diamonds

- Crushing Autunite -> Uranium Powder 35%
  - this makes uranium renewable!
- Compacting Coal Blocks x9, Enriched Yellowcake -> Yellowcake & **Diamond 5%**
- Compacting Charcoal Block, Enriched Yellowcake -> Yellowcake & Coal x3 & Coal 60%
- Heated Mixing of Tuff and Veridium -> Asurine & Molten Slag 90mb
- Heated Mixing of Tuff and Netherrack -> Crimsite & Molten Slag 90mb
- `#terracotta` filled with lava -> dripstone blocks
- Crushing dripstone blocks -> dripstone

#### Misc

- Heated Mixing of Boil Stone + any liquid dye -> solid dye
- Industrially Plated recipes:
  - Iron Sheet + Liquid Dye 250mb -> ...
    - yellow dye -> blank hazard sign x4
    - white dye -> blank prohibition sign x4
    - green dye -> blank safety sign x4
    - blue dye -> blank instruction sign x4
  - All other blocks from IP are currently unaccesable. This can be changed on request, but this mod was mainly added for its signage
- Stonecutting of blank instruction sign to fire diamond as other recipe is unaccessable
- Heated Pressing -> Etched blank music disk
- Washing of charcoal -> ash x4, ash x2 60%

### Misc fixes

- Cobblemon PP regen being unpredictable
  - this was due to better days accelerating nights too much for cobblemon to detect that the player is actually sleeping. A simple kubejs script can be added but its a TODO for now, not major importance.
- Server performance improvements
- Fix to synchro (respawning as mons enabled; u respawn as a mon if ur a mon before u die)
- Fixes to origins
  - Removal of nerf from coblespawn (able to wear all armor types now)
  - Nautilil is still bugged out but some more fixes were attempted

#### Issue tracking

A thread will be created when this is posted - please keep discussion of issues in THIS VERSION of the pack to the thread. When next version comes out, another thread will be made and this one closed.

- NOTE: all issues reported in previous thread im considering closed as many changes and fixes not noted here were done. If any of the issues that had previously been reported still occur, repost into the active thread!
