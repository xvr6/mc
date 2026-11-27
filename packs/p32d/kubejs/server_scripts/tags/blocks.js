// Block tags.

ServerEvents.tags("block", (event) => {
  // --- Semaphore pole materials ---
  event.add(
    "railways:semaphore_poles",
    "#createmoregirder:girder",
    "electroenergetics:concrete_pole",
    "create_train_parts:pole",
    "create_train_parts:crossing",
  );

  // --- Bits 'n' Bobs cogwheel chains: exclude Petrol's Parts assemblages ---
  // Chain behaviour attaching to AssemblageBlockEntity crashes the client renderer
  // (ClassCastException in CogwheelChainBehaviourRenderer).
  event.add(
    "bits_n_bobs:forbidden_cogwheel_chain_component",
    "petrolsparts:single_shaft_assemblage",
    "petrolsparts:separate_shaft_halves_assemblage",
    "petrolsparts:andesite_encased_single_shaft_assemblage",
    "petrolsparts:andesite_encased_separate_shaft_halves_assemblage",
    "petrolsparts:brass_encased_single_shaft_assemblage",
    "petrolsparts:brass_encased_separate_shaft_halves_assemblage",
  );
});
