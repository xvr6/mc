// priority: 100
// Pack-wide startup setup and shared constants for startup scripts.
// All startup script files share one top-level scope.

StartupEvents.init((event) => {
  Platform.mods.kubejs.name = "Poinky";
});

// Custom cake variants; each gets a batter fluid plus filled/baked mold items.
const CAKES = ["blaze", "echo", "experience"];

// "light_blue" -> "Light Blue"
function titleCase(str) {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
