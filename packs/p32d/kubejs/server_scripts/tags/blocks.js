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
});
