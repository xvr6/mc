ServerEvents.recipes((event) => {
  event.shapeless(
    "kubejs:asparagus_seed_bag",
    Item.of("expandeddelight:asparagus_seeds", 9),
  );
  event.shapeless(
    Item.of("expandeddelight:asparagus_seeds", 9),
    "kubejs:asparagus_seed_bag",
  );

  event.shapeless(
    "kubejs:beetroot_seed_bag",
    Item.of("minecraft:beetroot_seeds", 9),
  );
  event.shapeless(
    Item.of("minecraft:beetroot_seeds", 9),
    "kubejs:beetroot_seed_bag",
  );

  event.shapeless(
    "kubejs:blueberry_bag",
    Item.of("biomeswevegone:blueberries", 9),
  );
  event.shapeless(
    Item.of("biomeswevegone:blueberries"),
    "kubejs:blueberry_bag",
  );

  event.shapeless(
    "kubejs:cabbage_seed_bag",
    Item.of("farmersdelight:cabbage_seeds", 9),
  );
  event.shapeless(
    Item.of("farmersdelight:cabbage_seeds", 9),
    "kubejs:cabbage_seed_bag",
  );

  event.shapeless(
    "kubejs:chili_pepper_seed_bag",
    Item.of("expandeddelight:chili_pepper_seeds", 9),
  );
  event.shapeless(
    Item.of("expandeddelight:chili_pepper_seeds", 9),
    "kubejs:chili_pepper_seed_bag",
  );

  event.shapeless(
    "kubejs:crimson_berry_bag",
    Item.of("netherdescent:crimson_berries", 9),
  );
  event.shapeless(
    Item.of("netherdescent:crimson_berries", 9),
    "kubejs:crimson_berry_bag",
  );

  event.shapeless(
    "kubejs:elven_sweet_berry_bag",
    Item.of("creategarnished:elven_sweet_berries", 9),
  );
  event.shapeless(
    Item.of("creategarnished:elven_sweet_berries", 9),
    "kubejs:elven_sweet_berry_bag",
  );

  event.shapeless(
    "kubejs:flax_seed_bag",
    Item.of("supplementaries:flax_seeds", 9),
  );
  event.shapeless(
    Item.of("supplementaries:flax_seeds", 9),
    "kubejs:flax_seed_bag",
  );

  event.shapeless("kubejs:melon_seed_bag", Item.of("minecraft:melon_seeds", 9));
  event.shapeless(Item.of("minecraft:melon_seeds", 9), "kubejs:melon_seed_bag");

  event.shapeless(
    "kubejs:pumpkin_seed_bag",
    Item.of("minecraft:pumpkin_seeds", 9),
  );
  event.shapeless(
    Item.of("minecraft:pumpkin_seeds", 9),
    "kubejs:pumpkin_seed_bag",
  );

  event.shapeless(
    "kubejs:tomato_seed_bag",
    Item.of("farmersdelight:tomato_seeds", 9),
  );
  event.shapeless(
    Item.of("farmersdelight:tomato_seeds", 9),
    "kubejs:tomato_seed_bag",
  );

  event.shapeless("kubejs:wheat_seed_bag", Item.of("minecraft:wheat_seeds", 9));
  event.shapeless(Item.of("minecraft:wheat_seeds", 9), "kubejs:wheat_seed_bag");
});
