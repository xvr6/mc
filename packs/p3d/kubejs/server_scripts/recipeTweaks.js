import { removals } from "./recipes/removal.js";

ServerEvents.recipes((event) => {
  removals(event);
});
