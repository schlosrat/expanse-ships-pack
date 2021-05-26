(() => {
  // your existing code here
  let adventureName = 'Expanse Ships Pack';
  let moduleName = 'expanse-ships-pack';

  /**
   * welcomeJournal (if set) will automatically be imported and opened after the first activation of a scene imported from the module compendium.
   * Set to something like the following example to enable:
   *   const welcomeJournal = 'A1. Adventure Introduction';
   * Set to the following to disable:
   *   const welcomeJournal = '';
   */
  const welcomeJournal = '';
  /**
   * additionalJournals will automatically be imported.
   * Set to something like the following example to enable:
   *   const additionalJournals = ['A2. Adventure Overview'];
   * Set to the following to disable:
   *   const additionalJournals = [];
   */
  const additionalJournals = [];
  /**
   * creaturePacks is a list of compendium packs to look in for Actors by name (in prioritised order).
   * The first entry here assumes that you have an Actor pack in your module with the "name" of "actors".
   * const creaturePacks = [`${moduleName}.actors`, 'dnd5e.monsters'];
   * Set to the following to disable:
   *   const creaturePacks = [];
   */
  const creaturePacks = [`${moduleName}.ships`];
  /**
   * journalPacks is a list of compendium packs to look in for Journals by name (in prioritised order).
   * The first entry here assumes that you have a Journal pack in your module with the "name" of "journals".
   * const journalPacks = [`${moduleName}.journals`];
   * Set to the following to disable:
   *   const journalPacks = [];
   */
  const journalPacks = [`${moduleName}.ship-notes`];
  /**
   * macroPacks is a list of compendium packs to look in for Macros by name (in prioritised order).
   * The first entry here assumes that you have a Macro pack in your module with the "name" of "macros".
   * const macroPacks = [`${moduleName}.macros`];
   * Set to the following to disable:
   *   const macroPacks = [];
   */
  const macroPacks = [];

  Hooks.once('scenePackerReady', ScenePacker => {
    // Initialise the Scene Packer with your adventure name and module name
    let packer = ScenePacker.Initialise({
      adventureName,
      moduleName,
      creaturePacks,
      journalPacks,
      macroPacks,
      welcomeJournal,
      additionalJournals,
      allowImportPrompts: true, // Set to false if you don't want the popup
    });
  });
})()