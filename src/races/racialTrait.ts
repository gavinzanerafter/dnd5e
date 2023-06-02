import { Ability } from "../abilities/abilities";
import { DamageType } from "../combat/damage-types";

export const RacialTrait = {

// DWARVES
"Dwarf": {
  "Darkvision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",

  "Dwarven Resilience": "You have advantage on saving throws against poison, and you have resistance against poison damage.",

  "Dwarven Combat Training": "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",

  "Tool Proficiency": "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",

  "Stonecunning": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",

  "Dwarven Toughness": "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
},

// DRAGONBORN
"Dragonborn": {
}

// ELVES
"Elf": {
  "Darkvision": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",

  "Keen Senses": "You have proficiency in the Perception skill.",

  "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",

  "Trance": "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",

  "Elf Weapon Training": "You have proficiency with the longsword, shortsword, shortbow, and longbow.",

  "Cantrip": "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
},

// HALF ELVES
"Half Elf": {
  "Darkvision": "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",

  "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
},

// GNOMES
"Gnome": {
  "Darkvision": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",

  "Gnome Cunning": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",

  "Artificer's Lore": "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",

  "Tinker": "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the tinker options",
},

// HALF ORCS
"Half Orc" : {
  "Darkvision": "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",

  "Menacing": "You gain proficiency in the Intimidation skill.",

  "Relentless Endurance": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",

  "Savage Attacks": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
},
// TIEFLINGS
"Tiefling": {
  "Darkvision": "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",

  "Hellish Resistance": "You have resistance to fire damage.",

  "Infernal Legacy": "You know the *thaumaturgy* cantrip. When you reach 3rd level, you can cast the *hellish rebuke* spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the *darkness* spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
},

}

export const TinkerOptions = {
  "Clockwork Toy": "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.",

  "Fire Starter": "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.",

  "Music Box": "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",
}

export const DraconicAncestryOptions = {
  "Black": {
    "Damage Resistance": DamageType.Acid,
    "Breath Weapon Description": "5 by 30 ft. line (Dex. save)",
    "Breath Weapon Shape": "Line",
    "Breath Weapon Size": [5,30],
    "Breath Weapon Save": Ability.dexterity,
    "Damage Type": DamageType.Acid,
  },
  "Blue": {
    "Damage Resistance": DamageType.Lightning,
    "Breath Weapon Description": "5 by 30 ft. line (Dex. save)",
    "Breath Weapon Shape": "Line",
    "Breath Weapon Size": [5,30],
    "Breath Weapon Save": Ability.dexterity,
    "Damage Type": DamageType.Lightning,
  },
  "Brass": {
    "Damage Resistance": DamageType.Fire,
    "Breath Weapon Description": "5 by 30 ft. line (Dex. save)",
    "Breath Weapon Shape": "Line",
    "Breath Weapon Size": [5,30],
    "Breath Weapon Save": Ability.dexterity,
    "Damage Type": DamageType.Fire,
  },
  "Bronze": {
    "Damage Resistance": DamageType.Lightning,
    "Breath Weapon Description": "5 by 30 ft. line (Dex. save)",
    "Breath Weapon Shape": "Line",
    "Breath Weapon Size": [5,30],
    "Breath Weapon Save": Ability.dexterity,
    "Damage Type": DamageType.Lightning,
  },
  "Copper": {
    "Damage Resistance": DamageType.Acid,
    "Breath Weapon Description": "5 by 30 ft. line (Dex. save)",
    "Breath Weapon Shape": "Line",
    "Breath Weapon Size": [5,30],
    "Breath Weapon Save": Ability.dexterity,
    "Damage Type": DamageType.Acid,
  },
  "Gold": {
    "Damage Resistance": DamageType.Fire,
    "Breath Weapon Description": "15 ft. cone (Dex. save)",
    "Breath Weapon Shape": "Cone",
    "Breath Weapon Size": [15],
    "Breath Weapon Save": Ability.dexterity,
    "Damage Type": DamageType.Fire,
  },
  "Green": {
    "Damage Resistance": DamageType.Poison,
    "Breath Weapon Description": "15 ft. cone (Con. save)",
    "Breath Weapon Shape": "Cone",
    "Breath Weapon Size": [15],
    "Breath Weapon Save": Ability.constitution,
    "Damage Type": DamageType.Poison,
  },
  "Red": {
    "Damage Resistance": DamageType.Fire,
    "Breath Weapon Description": "15 ft. cone (Dex. save)",
    "Breath Weapon Shape": "Cone",
    "Breath Weapon Size": [15],
    "Breath Weapon Save": Ability.dexterity,
    "Damage Type": DamageType.Fire,
  },
}