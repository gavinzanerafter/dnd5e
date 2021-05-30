import { Coins, Currency } from './coinage'
/*

# Tools

A tool helps you to do something you couldn't otherwise do, such as craft or repair an item, forge a document, or pick a lock. Your race, class, background, or feats give you proficiency with certain tools. Proficiency with a tool allows you to add your proficiency bonus to any ability check you make using that tool. Tool use is not tied to a single ability, since proficiency with a tool represents broader knowledge of its use. For example, the GM might ask you to make a Dexterity check to carve a fine detail with your woodcarver's tools, or a Strength check to make something out of particularly hard wood.

**Table- Tools**

| Item                      | Cost  | Weight |
|---------------------------|-------|--------|
| *Artisan's tools*         |       |        |
| ~ Alchemist's supplies    | 50 gp | 8 lb.  |
| ~ Brewer's supplies       | 20 gp | 9 lb.  |
| ~ Calligrapher's supplies | 10 gp | 5 lb.  |
| ~ Carpenter's tools       | 8 gp  | 6 lb.  |
| ~ Cartographer's tools    | 15 gp | 6 lb.  |
| ~ Cobbler's tools         | 5 gp  | 5 lb.  |
| ~ Cook's utensils         | 1 gp  | 8 lb.  |
| ~ Glassblower's tools     | 30 gp | 5 lb.  |
| ~ Jeweler's tools         | 25 gp | 2 lb.  |
| ~ Leatherworker's tools   | 5 gp  | 5 lb.  |
| ~ Mason's tools           | 10 gp | 8 lb.  |
| ~ Painter's supplies      | 10 gp | 5 lb.  |
| ~ Potter's tools          | 10 gp | 3 lb.  |
| ~ Smith's tools           | 20 gp | 8 lb.  |
| ~ Tinker's tools          | 50 gp | 10 lb. |
| ~ Weaver's tools          | 1 gp  | 5 lb.  |
| ~ Woodcarver's tools      | 1 gp  | 5 lb.  |
| Disguise kit              | 25 gp | 3 lb.  |
| Forgery kit               | 15 gp | 5 lb.  |
| *Gaming set*              |       |        |
| ~ Dice set                | 1 sp  | -      |
| ~ Playing card set        | 5 sp  | -      |
| ~ Herbalism kit           | 5 gp  | 3 lb.  |
| *Musical instrument*      |       |        |
| ~ Bagpipes                | 30 gp | 6 lb.  |
| ~ Drum                    | 6 gp  | 3 lb.  |
| ~ Dulcimer                | 25 gp | 10 lb. |
| ~ Flute                   | 2 gp  | 1 lb.  |
| ~ Lute                    | 35 gp | 2 lb.  |
| ~ Lyre                    | 30 gp | 2 lb.  |
| ~ Horn                    | 3 gp  | 2 lb.  |
| ~ Pan flute               | 12 gp | 2 lb.  |
| ~ Shawm                   | 2 gp  | 1 lb.  |
| ~ Viol                    | 30 gp | 1 lb.  |
| Navigator's tools         | 25 gp | 2 lb.  |
| Poisoner's kit            | 50 gp | 2 lb.  |
| Thieves' tools            | 25 gp | 1 lb.  |
| Vehicles (land or water)  | *     | *      |
|                           |       |        |

\* See the "Mounts and Vehicles" section.

***Artisan's Tools***. These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.

***Disguise Kit***. This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.

***Forgery Kit***. This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.

***Gaming Set***. This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.

***Herbalism Kit***. This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.

***Musical Instrument***. Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.

***Navigator's Tools***. This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.

***Poisoner's Kit***. A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.

***Thieves' Tools***. This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.

*/

export enum ToolType {
  ArtisansTools = "Artisan's Tools",
  GamingSet = 'Gaming Set',
  MusicalInstruments = 'Musical Instruments',
  Other = 'Other',
}

export type Tool = {
  name: string
  type: ToolType
  weight: number
  cost: Coins
}

export const AlchemistsSupplies: Tool = {
  name: "Alchemist's supplies",
  type: ToolType.ArtisansTools,
  weight: 8,
  cost: {
    amount: 50,
    currency: Currency.Gold,
  },
}

export const BrewersSupplies: Tool = {
  name: "Brewer's supplies",
  type: ToolType.ArtisansTools,
  weight: 9,
  cost: {
    amount: 20,
    currency: Currency.Gold,
  },
}

export const CalligraphersSupplies: Tool = {
  name: "Calligrapher's supplies",
  type: ToolType.ArtisansTools,
  weight: 5,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
}

export const CarpentersTools: Tool = {
  name: "Carpenter's tools",
  type: ToolType.ArtisansTools,
  weight: 6,
  cost: {
    amount: 8,
    currency: Currency.Gold,
  },
}

export const CartographersTools: Tool = {
  name: "Cartographer's tools",
  type: ToolType.ArtisansTools,
  weight: 6,
  cost: {
    amount: 15,
    currency: Currency.Gold,
  },
}

export const CobblersTools: Tool = {
  name: "Cobbler's tools",
  type: ToolType.ArtisansTools,
  weight: 5,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
}

export const CooksUtensils: Tool = {
  name: "Cook's utensils",
  type: ToolType.ArtisansTools,
  weight: 8,
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
}

export const GlassblowersTools: Tool = {
  name: "Glassblower's tools",
  type: ToolType.ArtisansTools,
  weight: 5,
  cost: {
    amount: 30,
    currency: Currency.Gold,
  },
}

export const JewelersTools: Tool = {
  name: "Jeweler's tools",
  type: ToolType.ArtisansTools,
  weight: 2,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
}

export const LeatherworkersTools: Tool = {
  name: "Leatherworker's tools",
  type: ToolType.ArtisansTools,
  weight: 5,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
}

export const MasonsTools: Tool = {
  name: "Mason's tools",
  type: ToolType.ArtisansTools,
  weight: 8,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
}

export const PaintersSupplies: Tool = {
  name: "Painter's supplies",
  type: ToolType.ArtisansTools,
  weight: 5,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
}

export const PottersTools: Tool = {
  name: "Potter's tools",
  type: ToolType.ArtisansTools,
  weight: 3,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
}

export const SmithsTools: Tool = {
  name: "Smith's tools",
  type: ToolType.ArtisansTools,
  weight: 8,
  cost: {
    amount: 20,
    currency: Currency.Gold,
  },
}

export const TinkersTools: Tool = {
  name: "Tinker's tools",
  type: ToolType.ArtisansTools,
  weight: 10,
  cost: {
    amount: 50,
    currency: Currency.Gold,
  },
}

export const WeaversTools: Tool = {
  name: "Weaver's tools",
  type: ToolType.ArtisansTools,
  weight: 5,
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
}

export const WoodcarversTools: Tool = {
  name: "Woodcarver's tools",
  type: ToolType.ArtisansTools,
  weight: 5,
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
}

export const DiceSet: Tool = {
  name: 'Dice set',
  type: ToolType.GamingSet,
  weight: 0,
  cost: {
    amount: 1,
    currency: Currency.Silver,
  },
}

export const PlayingCardSet: Tool = {
  name: 'Playing card set',
  type: ToolType.GamingSet,
  weight: 0,
  cost: {
    amount: 5,
    currency: Currency.Silver,
  },
}

export const Bagpipes: Tool = {
  name: 'Bagpipes',
  type: ToolType.MusicalInstruments,
  weight: 6,
  cost: {
    amount: 30,
    currency: Currency.Gold,
  },
}

export const Drum: Tool = {
  name: 'Drum',
  type: ToolType.MusicalInstruments,
  weight: 3,
  cost: {
    amount: 6,
    currency: Currency.Gold,
  },
}

export const Dulcimer: Tool = {
  name: 'Dulcimer',
  type: ToolType.MusicalInstruments,
  weight: 10,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
}

export const Flute: Tool = {
  name: 'Flute',
  type: ToolType.MusicalInstruments,
  weight: 1,
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
}

export const Lute: Tool = {
  name: 'Lute',
  type: ToolType.MusicalInstruments,
  weight: 2,
  cost: {
    amount: 35,
    currency: Currency.Gold,
  },
}

export const Lyre: Tool = {
  name: 'Lyre',
  type: ToolType.MusicalInstruments,
  weight: 2,
  cost: {
    amount: 30,
    currency: Currency.Gold,
  },
}

export const Horn: Tool = {
  name: 'Horn',
  type: ToolType.MusicalInstruments,
  weight: 2,
  cost: {
    amount: 3,
    currency: Currency.Gold,
  },
}

export const PanFlute: Tool = {
  name: 'Pan flute',
  type: ToolType.MusicalInstruments,
  weight: 2,
  cost: {
    amount: 12,
    currency: Currency.Gold,
  },
}

export const Shawm: Tool = {
  name: 'Shawm',
  type: ToolType.MusicalInstruments,
  weight: 1,
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
}

export const Viol: Tool = {
  name: 'Viol',
  type: ToolType.MusicalInstruments,
  weight: 1,
  cost: {
    amount: 30,
    currency: Currency.Gold,
  },
}

export const DisguiseKit: Tool = {
  name: 'Disguise kit',
  type: ToolType.Other,
  weight: 3,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
}

export const ForgeryKit: Tool = {
  name: 'Forgery kit',
  type: ToolType.Other,
  weight: 5,
  cost: {
    amount: 15,
    currency: Currency.Gold,
  },
}

export const NavigatorsTools: Tool = {
  name: "Navigator's Tools",
  type: ToolType.Other,
  weight: 2,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
}

export const HerbalismKit: Tool = {
  name: 'Herbalism kit',
  type: ToolType.Other,
  weight: 3,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
}

export const PoisonersKit: Tool = {
  name: "Poisoner's kit",
  type: ToolType.Other,
  weight: 2,
  cost: {
    amount: 50,
    currency: Currency.Gold,
  },
}

export const ThievesTools: Tool = {
  name: "Thieves' tools",
  type: ToolType.Other,
  weight: 1,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
}
