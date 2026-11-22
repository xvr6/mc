// /tamable         -> clickable, alphabetical list of tamable mob names
// /tamable <mob>   -> how to tame that mob (tab-completes)
// "baby" = only babies can be tamed. Most food-tames are a random chance per feed.
// Entries whose entity isn't registered (mod removed) are skipped automatically.

// [entity id, display name, how to tame], alphabetical by name
const TAMEABLES = [
  ["crittersandcompanions:weevil", "Acorn Weevil", "acorn"],
  ["minecraft:allay", "Allay", "hand it an item (bonds)"],
  ["naturalist:bear", "Bear", "baby: salmon, honeycomb, sweet berries"],
  ["the_bumblezone:beehemoth", "Beehemoth", "honey / bee bread / royal jelly (friendship)"],
  ["naturalist:bird", "Bird", "drop seeds for it to eat"],
  ["naturalist:black_bear", "Black Bear", "baby: salmon, honeycomb, sweet berries"],
  ["naturalist:capybara", "Capybara", "melon slice"],
  ["minecraft:cat", "Cat", "raw fish"],
  ["naturalist:crab", "Crab", "tropical fish"],
  ["minecraft:donkey", "Donkey", "ride"],
  ["crittersandcompanions:dragonfly", "Dragonfly", "spider eye"],
  ["naturalist:duck", "Duck", "baby: raw fish"],
  ["naturalist:elephant", "Elephant", "baby: cake"],
  ["crittersandcompanions:ferret", "Ferret", "raw rabbit"],
  ["unusualend:ender_firefly", "Flampyr", "end blob"],
  ["minecraft:fox", "Fox", "breed two foxes; the baby trusts you"],
  ["quark:foxhound", "Foxhound", "coal"],
  ["naturalist:giraffe", "Giraffe", "baby: apple / hay bale"],
  ["friendsandfoes:glare", "Glare", "glow berries"],
  ["naturalist:hedgehog", "Hedgehog", "sweet / glow berries"],
  ["naturalist:hippo", "Hippo", "baby: melon (block)"],
  ["minecraft:horse", "Horse", "ride until it stops bucking"],
  ["crittersandcompanions:jumping_spider", "Jumping Spider", "dragonfly wing"],
  ["crittersandcompanions:ladybug", "Ladybug", "mushroom"],
  ["naturalist:lion", "Lion", "baby: meat"],
  ["naturalist:lizard", "Lizard", "spider eye"],
  ["minecraft:llama", "Llama", "ride"],
  ["naturalist:mammoth", "Mammoth", "baby: cake"],
  ["minecraft:mule", "Mule", "ride"],
  ["minecraft:nautilus", "Nautilus", "pufferfish / pufferfish bucket"],
  ["minecraft:ocelot", "Ocelot", "raw fish (trust only)"],
  ["naturalist:ostrich", "Ostrich", "baby: seeds"],
  ["minecraft:parrot", "Parrot", "seeds"],
  ["endermanoverhaul:pet_enderman", "Pet Enderman", "throw an ancient pearl (all pet variants)"],
  ["naturalist:rat", "Rat", "bread"],
  ["crittersandcompanions:red_panda", "Red Panda", "sweet berries"],
  ["crittersandcompanions:roly_poly", "Roly-Poly", "mushroom"],
  ["quark:shiba", "Shiba", "bone"],
  ["crittersandcompanions:shima_enaga", "Shima Enaga", "seeds"],
  ["minecraft:skeleton_horse", "Skeleton Horse", "pre-tamed (skeleton trap)"],
  ["crittersandcompanions:snail", "Snail", "leaves"],
  ["naturalist:snake", "Snake", "spider eye / rabbit"],
  ["creategarnished:squirrel", "Squirrel", "any food without effects"],
  ["crittersandcompanions:stag_beetle", "Stag Beetle", "berries"],
  ["crittersandcompanions:stick_bug", "Stick Bug", "leaves"],
  ["naturalist:tiger", "Tiger", "baby: meat"],
  ["naturalist:tortoise", "Tortoise", "bamboo, dandelion, brown mushroom, cactus"],
  ["minecraft:trader_llama", "Trader Llama", "ride"],
  ["wayfinder:wayfinder", "Wayfinder", "glow berries"],
  ["minecraft:wolf", "Wolf", "bone"],
  ["naturalist:zebra", "Zebra", "ride"],
  ["minecraft:zombie_horse", "Zombie Horse", "ride"],
  ["minecraft:zombie_nautilus", "Zombie Nautilus", "pufferfish / pufferfish bucket"],
];

const TAME_NAMES_PER_LINE = 6;

const $TameRegistries = Java.loadClass(
  "net.minecraft.core.registries.BuiltInRegistries",
);
const $TameRL = Java.loadClass("net.minecraft.resources.ResourceLocation");
const $TameStringArg = Java.loadClass(
  "com.mojang.brigadier.arguments.StringArgumentType",
);

// Entries whose mod is actually loaded; resolved lazily (registries are frozen by first use)
let tameablesLoaded = null;
function loadedTameables() {
  if (tameablesLoaded === null) {
    tameablesLoaded = TAMEABLES.filter(([id]) =>
      $TameRegistries.ENTITY_TYPE.containsKey($TameRL.parse(id)),
    );
  }
  return tameablesLoaded;
}

function tameSend(ctx, component) {
  const player = ctx.source.player;
  if (player) player.tell(component);
  else ctx.source.sendSystemMessage(component);
}

ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;
  event.register(
    Commands.literal("tamable")
      // No argument: names only, a few per line, each clickable for details
      .executes((ctx) => {
        const list = loadedTameables();
        tameSend(ctx, Text.of("§6§lTamable mobs §7- click one, or /tamable <mob>"));
        for (let i = 0; i < list.length; i += TAME_NAMES_PER_LINE) {
          let line = Text.of(" ");
          list.slice(i, i + TAME_NAMES_PER_LINE).forEach(([, name], j) => {
            if (j > 0) line.append(Text.of("§7, "));
            line.append(
              Text.of(name)
                .green()
                .clickRunCommand(`/tamable ${name}`)
                .hover(Text.of(`How to tame a ${name}`)),
            );
          });
          tameSend(ctx, line);
        }
        return 1;
      })
      .then(
        Commands.argument("mob", $TameStringArg.greedyString())
          .suggests((ctx, builder) => {
            const typed = builder.getRemainingLowerCase();
            loadedTameables().forEach(([, name]) => {
              if (name.toLowerCase().startsWith(typed)) builder.suggest(name);
            });
            return builder.buildFuture();
          })
          .executes((ctx) => {
            const query = String($TameStringArg.getString(ctx, "mob"))
              .trim()
              .toLowerCase();
            const entry = loadedTameables().find(
              ([id, name]) =>
                name.toLowerCase() === query || id.split(":")[1] === query,
            );
            if (!entry) {
              tameSend(ctx, Text.of(`§c"${query}" isn't tamable. §7Run /tamable for the list.`));
              return 0;
            }
            tameSend(ctx, Text.of(`§a${entry[1]}§7: ${entry[2]}`));
            return 1;
          }),
      ),
  );
});
