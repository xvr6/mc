ItemEvents.modification((event) => {
  event.modify("cobblemonsizevariation:huge_essence", (item) => {
    item.foodProperties = (food) => {
      food.fastToEat(true);
      food.alwaysEdible(true);
    };
  });
  event.modify("cobblemonsizevariation:growth_essence", (item) => {
    item.foodProperties = (food) => {
      food.fastToEat(true);
      food.alwaysEdible(true);
    };
  });
  event.modify("cobblemonsizevariation:normal_essence", (item) => {
    item.foodProperties = (food) => {
      food.fastToEat(true);
      food.alwaysEdible(true);
    };
  });
  event.modify("cobblemonsizevariation:shrink_essence", (item) => {
    item.foodProperties = (food) => {
      food.fastToEat(true);
      food.alwaysEdible(true);
    };
  });
  event.modify("cobblemonsizevariation:tiny_essence", (item) => {
    item.foodProperties = (food) => {
      food.fastToEat(true);
      food.alwaysEdible(true);
    };
  });
});

ItemEvents.modifyTooltips((event) => {
  event.add(
    "cobblemonsizevariation:huge_essence",
    { shift: false },
    Text.gray("WIP: Eat to become CHONKY"),
  );
  event.add(
    "cobblemonsizevariation:growth_essence",
    { shift: false },
    Text.gray("WIP: Eat to become larger"),
  );
  event.add(
    "cobblemonsizevariation:normal_essence",
    { shift: false },
    Text.gray("WIP: Eat to return to normal size"),
  );
  event.add(
    "cobblemonsizevariation:shrink_essence",
    { shift: false },
    Text.gray("WIP: Eat to become smaller"),
  );
  event.add(
    "cobblemonsizevariation:tiny_essence",
    { shift: false },
    Text.gray("WIP: Eat to become MINISCULE"),
  );
});
