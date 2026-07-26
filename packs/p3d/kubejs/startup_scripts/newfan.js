const $ParticleTypes = Java.loadClass(
  "net.minecraft.core.particles.ParticleTypes",
);

CreateMoreFansEvents.registry((event) => {
  event
    .create(`poinky:roosting`)
    .setCatalystBlockTag(`poinky:roosting_catalyst`)
    .displayName("Bulk Roosting")
    .setJeiCategoryDisplayItem(`create_integrated_farming:chicken_roost`)
    .setJeiAttachedBlock(`create_integrated_farming:chicken_roost`);
});
