import { Ability } from '../abilities'

type Skill = {
  name: string
  type: Ability
}

export enum SkillName {
  acrobatics = 'Acrobatics',
  animalHandling = 'Animal Handling',
  arcana = 'Arcana',
  athletics = 'Athletics',
  deception = 'Deception',
  history = 'History',
  insight = 'Insight',
  intimidation = 'Intimidation',
  investigation = 'Investigation',
  medicine = 'Medicine',
  nature = 'Nature',
  perception = 'Perception',
  performance = 'Performance',
  persuasion = 'Persuasion',
  religion = 'Religion',
  sleightOfHand = 'Sleight of Hand',
  stealth = 'Stealth',
  survival = 'Survival',
}

const Skills: Skill[] = [
  {
    name: SkillName.acrobatics,
    type: Ability.dexterity,
  },
  {
    name: SkillName.animalHandling,
    type: Ability.wisdom,
  },
  {
    name: SkillName.arcana,
    type: Ability.intelligence,
  },
  {
    name: SkillName.athletics,
    type: Ability.strength,
  },
  {
    name: SkillName.deception,
    type: Ability.charisma,
  },
  {
    name: SkillName.history,
    type: Ability.intelligence,
  },
  {
    name: SkillName.insight,
    type: Ability.wisdom,
  },
  {
    name: SkillName.intimidation,
    type: Ability.charisma,
  },
  {
    name: SkillName.investigation,
    type: Ability.intelligence,
  },
  {
    name: SkillName.medicine,
    type: Ability.wisdom,
  },
  {
    name: SkillName.nature,
    type: Ability.intelligence,
  },
  {
    name: SkillName.perception,
    type: Ability.wisdom,
  },
  {
    name: SkillName.performance,
    type: Ability.charisma,
  },
  {
    name: SkillName.persuasion,
    type: Ability.charisma,
  },
  {
    name: SkillName.religion,
    type: Ability.intelligence,
  },
  {
    name: SkillName.sleightOfHand,
    type: Ability.dexterity,
  },
  {
    name: SkillName.stealth,
    type: Ability.dexterity,
  },
  {
    name: SkillName.survival,
    type: Ability.wisdom,
  },
]

export default Skills
