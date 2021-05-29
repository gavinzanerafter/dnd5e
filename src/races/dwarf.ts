import Race from './race'
import { Ability } from '../abilities/abilities'
import { Size } from '../sizes/sizes'

type AbilityScoreIncrease = {
  ability: Ability
  score: number
}

type Advantage = {
  name: string
  description: string
  savingThrows: boolean
  attacks: boolean
  abilityChecks: boolean
  condition: string
}

type Resistance = {
  name: string
  description: string
  condition: string
}

type Immunity = {
  name: string
  description: string
  condition: string
}

export default class Dwarf extends Race {
  public abilityScoreIncrease: AbilityScoreIncrease = {
    ability: Ability.constitution,
    score: 2,
  }
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
}
