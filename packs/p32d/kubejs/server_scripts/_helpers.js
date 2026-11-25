// priority: 100
// Shared helpers for all server scripts. Loaded first (priority 100).
// All server script files share ONE top-level scope: don't redeclare these
// names (or any other top-level const) in another server script.

// "mod:some/path" -> "mod/some/path"; for building recipe / loot table ids.
const idPath = (id) => id.replace(":", "/");

// "#tag" -> { tag }, "mod:item" -> { item }; ingredient JSON for event.custom().
function ingredientJson(input) {
  return input.startsWith("#") ? { tag: input.substring(1) } : { item: input };
}

// Single-input Create-style custom recipe (`ingredients[]` + `results[]` JSON),
// used for addon recipe types with no KubeJS builder
// (createnuclear:enriched, create_aquatic_ambitions:channeling, ...).
//   input:   "mod:item" or "#tag"
//   results: [{ id, chance? }, ...]
function processing(event, type, input, results) {
  return event.custom({
    type: type,
    ingredients: [ingredientJson(input)],
    results: results,
  });
}

// Create: Nuclear enriching (fan + enriched fire). Same args as processing().
function enriching(event, input, results) {
  return processing(event, "createnuclear:enriched", input, results);
}
