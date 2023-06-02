import { Ability } from '../abilities/abilities'
import { BrewersSupplies, MasonsTools, SmithsTools, Tool } from '../equipment/tools'
import { BattleAxe, Handaxe, LightHammer, Warhammer } from '../equipment/weapons'
import { Size } from '../sizes/sizes'
import {
  Race,
  Age,
  AbilityScoreIncrease,
  Advantage,
  Resistance,
  Immunity,
  ToolProficiency,
  WeaponProficiency,
  SkillProficiency,
} from './races'

/*

# Dwarf

### Dwarf Traits

Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.

***Ability Score Increase***. Your Constitution score increases by 2.

***Age***. Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.

***Alignment***. Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.

***Size***. Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.

***Speed***. Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.

***Darkvision***. Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.

***Dwarven Resilience***. You have advantage on saving throws against poison, and you have resistance against poison damage.

***Dwarven Combat Training***. You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.

***Tool Proficiency***. You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.

***Stonecunning***. Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.

***Languages***. You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.

## Hill Dwarf

As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.

***Ability Score Increase***. Your Wisdom score increases by 1.

***Dwarven Toughness***. Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.

*/

export default class Dwarf extends Race {
  public abilityScoreIncrease: AbilityScoreIncrease[] = [
    {
      ability: Ability.constitution,
      increase: 2,
    },
  ]
  public ageMature = 50 //unneeded
  public lifeSpan = 350 //unneeded
  public alignment = 'lawful good' //unneeded
  public size = {
    minHeight: 4,
    maxHeight: 5,
    averageWeight: 150,
    size: Size.medium,
  }
  public speed = 25 //unneeded
  public darkvision = 60 //unneeded

  public advantages: Advantage[] = [
    {
      name: 'Dwarven Resilience',
      description: 'You have advantage on saving throws against poison.',
      savingThrows: true,
      attacks: false,
      abilityChecks: false,
      condition: 'poison',
    },
  ]

  public resistances: Resistance[] = [
    {
      name: 'Dwarven Resilience',
      description: 'You have resistance to poison damage.',
      condition: 'poison',
    },
  ]

  public immunities: Immunity[] = []

  public toolProficiencies: ToolProficiency[] = [
    { tool: SmithsTools, condition: undefined },
    { tool: BrewersSupplies, condition: undefined },
    { tool: MasonsTools, condition: undefined },
  ]

  public weaponProficiencies: WeaponProficiency[] = [
    { weapon: BattleAxe, condition: undefined },
    { weapon: Handaxe, condition: undefined },
    { weapon: LightHammer, condition: undefined },
    { weapon: Warhammer, condition: undefined },
  ]

  public skillProficiencies: SkillProficiency[] = [{}]
  public subRaces = undefined
}
