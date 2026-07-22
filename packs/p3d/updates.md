# Update Changelogs!

## Update: v3.1.1

### Mod changes

- Just one addition: a stonecutter mod that allows you to search!
- Tectonic / Road Weaver are now optional
  - DO NOTE HOWEVER: the p3d server will still require road weaver to connect and must be enabled to join.
  - These two mods cause loading of singleplayer worlds to take FOREVER, so disabling them makes local play more possible!

### Recipe changes

#### Overlaps and fixes

- For some brick types, when being smepted there were multiple outputs. Now some are craftable via stonecutter
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
