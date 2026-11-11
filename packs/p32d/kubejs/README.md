# Kubejs

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
