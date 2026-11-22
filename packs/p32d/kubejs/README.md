# Kubejs

Written against the [KubeJS 1.21.1 wiki](https://kubejs-wiki.tysontheember.dev/1.21.1/).

## Script layout

All files of one script type share one top-level scope, so a top-level `const` name
can only be used once per folder. Shared helpers live in the `_helpers.js` / `_init.js` files (`// priority: 100`).

- `startup_scripts/`: registration (`items`, `blocks`, `fluids`) and `item_modification`
- `client_scripts/lang.js`: renames
- `server_scripts/`
  - `_helpers.js`: `idPath()`, `processing()` (single-input `event.custom` recipes)
  - `tags/`: item and block tags (`#poinky:removed` etc.)
  - `player/`: starter kit, respawn grace
  - `tooltips.js`
  - `recipes/global.js`: tag-driven removals and pack-wide ingredient unification
  - `recipes/{food,farming,resources,tech,decor}/`: recipes grouped by theme, not by mod or recipe type

Conventions: `event.recipes.create.<type>()`, `"2x id"` / `"#tag"` strings, `CreateItem.of(id, chance)`,
one `ServerEvents.recipes` per file, `// --- Section ---` dividers.

## Basic kit

- notes

## Custom Items

- custom poinky namespace `poinky:*`
- Main goal is to connect mods together via recipes.
  - If one create add on adds a new recipe type (enriching, fermenting, squeezing, etc.), I am attempting to also use those same recipe types for other mods
  - In places where it makes sense, default recipes are often entirely disabled for this, changing the entire normal progression and crafting flow!

- Cake Bases
  - Modified versions of base [Ratatouille textures](https://github.com/TeamStarfruit/Ratatouille/tree/1.21.1-create0.6/src/main/resources/assets/ratatouille/textures/item)

- Crop bag/crop Modified versions of [Farmers Delight Blocks/Textures](https://github.com/vectorwing/FarmersDelight/tree/1.21/src/main/resources/assets/farmersdelight)

## recipe adjustments

- lots of em...

### Botanypots

> CLAUDE DISCLAIMER:
> Due to the repetitive nature, inital recipes and lootables were made by hand
> then passed to claude with a list of further modifications to make in the same style.
> All code vetted, and verified running.

- There was a massive gap in actual crops in the pack, and crops we could put into botany pot.
- Loot tables are stored in data/kubejs/botanypots, having been generated from a template
