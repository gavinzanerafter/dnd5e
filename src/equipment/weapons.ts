import { DamageType } from '../combat/damage-types'
import { Coins, Currency } from './coinage'

/*

# Weapons

Your class grants proficiency in certain weapons, reflecting both the class's focus and the tools you are most likely to use. Whether you favor a longsword or a longbow, your weapon and your ability to wield it effectively can mean the difference between life and death while adventuring.

The Weapons table shows the most common weapons used in the fantasy gaming worlds, their price and weight, the damage they deal when they hit, and any special properties they possess. Every weapon is classified as either melee or ranged. A **melee weapon** is used to attack a target within 5 feet of you, whereas a **ranged weapon** is used to attack a target at a distance.

*/

/*

## Weapon Proficiency

Your race, class, and feats can grant you proficiency with certain weapons or categories of weapons. The two categories are **simple** and **martial**. Most people can use simple weapons with proficiency. These weapons include clubs, maces, and other weapons often found in the hands of commoners. Martial weapons, including swords, axes, and polearms, require more specialized training to use effectively. Most warriors use martial weapons because these weapons put their fighting style and training to best use.

Proficiency with a weapon allows you to add your proficiency bonus to the attack roll for any attack you make with that weapon. If you make an attack roll using a weapon with which you lack proficiency, you do not add your proficiency bonus to the attack roll.

## Weapon Properties

Many weapons have special properties related to their use, as shown in the Weapons table.

***Ammunition***. You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.

If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon (see "Improvised Weapons" later in the section). A sling must be loaded to deal any damage when used in this way.

***Finesse***. When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.

***Heavy***. Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon's size and bulk make it too large for a Small creature to use effectively.

***Light***. A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.

***Loading***. Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it, regardless of the number of attacks you can normally make.

***Range***. A weapon that can be used to make a ranged attack has a range in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon's normal range in feet, and the second indicates the weapon's long range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can't attack a target beyond the weapon's long range.

***Reach***. This weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for opportunity attacks with it.

***Special***. A weapon with the special property has unusual rules governing its use, explained in the weapon's description (see "Special Weapons" later in this section).

***Thrown***. If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.

***Two-Handed***. This weapon requires two hands when you attack with it.

***Versatile***. This weapon can be used with one or two hands. A damage value in parentheses appears with the property-the damage when the weapon is used with two hands to make a melee attack.

### Improvised Weapons

Sometimes characters don't have their weapons and have to attack with whatever is at hand. An improvised weapon includes any object you can wield in one or two hands, such as broken glass, a table leg, a frying pan, a wagon wheel, or a dead goblin.

Often, an improvised weapon is similar to an actual weapon and can be treated as such. For example, a table leg is akin to a club. At the GM's option, a character proficient with a weapon can use a similar object as if it were that weapon and use his or her proficiency bonus.

An object that bears no resemblance to a weapon deals 1d4 damage (the GM assigns a damage type appropriate to the object). If a character uses a ranged weapon to make a melee attack, or throws a melee weapon that does not have the thrown property, it also deals 1d4 damage. An improvised thrown weapon has a normal range of 20 feet and a long range of 60 feet.

#### Silvered Weapons

Some monsters that have immunity or resistance to nonmagical weapons are susceptible to silver weapons, so cautious adventurers invest extra coin to plate their weapons with silver. You can silver a single weapon or ten pieces of ammunition for 100 gp. This cost represents not only the price of the silver, but the time and expertise needed to add silver to the weapon without making it less effective.

#### Special Weapons

Weapons with special rules are described here.

***Lance***. You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted.

***Net***. A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net.

When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.

**Table- Weapons**

| Name                       | Cost  | Damage          | Weight  | Properties                                             |
|----------------------------|-------|-----------------|---------|--------------------------------------------------------|
| **Simple Melee Weapons**   |       |                 |         |                                                        |
| Club                       | 1 sp  | 1d4 bludgeoning | 2 lb.   | Light                                                  |
| Dagger                     | 2 gp  | 1d4 piercing    | 1 lb.   | Finesse, light, thrown (range 20/60)                   |
| Greatclub                  | 2 sp  | 1d8 bludgeoning | 10 lb.  | Two-handed                                             |
| Handaxe                    | 5 gp  | 1d6 slashing    | 2 lb.   | Light, thrown (range 20/60)                            |
| Javelin                    | 5 sp  | 1d6 piercing    | 2 lb.   | Thrown (range 30/120)                                  |
| Light hammer               | 2 gp  | 1d4 bludgeoning | 2 lb.   | Light, thrown (range 20/60)                            |
| Mace                       | 5 gp  | 1d6 bludgeoning | 4 lb.   | -                                                      |
| Quarterstaff               | 2 sp  | 1d6 bludgeoning | 4 lb.   | Versatile (1d8)                                        |
| Sickle                     | 1 gp  | 1d4 slashing    | 2 lb.   | Light                                                  |
| Spear                      | 1 gp  | 1d6 piercing    | 3 lb.   | Thrown (range 20/60), versatile (1d8)                  |
| **Simple Ranged Weapons**  |       |                 |         |                                                        |
| Crossbow, light            | 25 gp | 1d8 piercing    | 5 lb.   | Ammunition (range 80/320), loading, two-handed         |
| Dart                       | 5 cp  | 1d4 piercing    | 1/4 lb. | Finesse, thrown (range 20/60)                          |
| Shortbow                   | 25 gp | 1d6 piercing    | 2 lb.   | Ammunition (range 80/320), two-handed                  |
| Sling                      | 1 sp  | 1d4 bludgeoning | -       | Ammunition (range 30/120)                              |
| **Martial Melee Weapons**  |       |                 |         |                                                        |
| Battleaxe                  | 10 gp | 1d8 slashing    | 4 lb.   | Versatile (1d10)                                       |
| Flail                      | 10 gp | 1d8 bludgeoning | 2 lb.   | -                                                      |
| Glaive                     | 20 gp | 1d10 slashing   | 6 lb.   | Heavy, reach, two-handed                               |
| Greataxe                   | 30 gp | 1d12 slashing   | 7 lb.   | Heavy, two-handed                                      |
| Greatsword                 | 50 gp | 2d6 slashing    | 6 lb.   | Heavy, two-handed                                      |
| Halberd                    | 20 gp | 1d10 slashing   | 6 lb.   | Heavy, reach, two-handed                               |
| Lance                      | 10 gp | 1d12 piercing   | 6 lb.   | Reach, special                                         |
| Longsword                  | 15 gp | 1d8 slashing    | 3 lb.   | Versatile (1d10)                                       |
| Maul                       | 10 gp | 2d6 bludgeoning | 10 lb.  | Heavy, two-handed                                      |
| Morningstar                | 15 gp | 1d8 piercing    | 4 lb.   | -                                                      |
| Pike                       | 5 gp  | 1d10 piercing   | 18 lb.  | Heavy, reach, two-handed                               |
| Rapier                     | 25 gp | 1d8 piercing    | 2 lb.   | Finesse                                                |
| Scimitar                   | 25 gp | 1d6 slashing    | 3 lb.   | Finesse, light                                         |
| Shortsword                 | 10 gp | 1d6 piercing    | 2 lb.   | Finesse, light                                         |
| Trident                    | 5 gp  | 1d6 piercing    | 4 lb.   | Thrown (range 20/60), versatile (1d8)                  |
| War pick                   | 5 gp  | 1d8 piercing    | 2 lb.   | -                                                      |
| Warhammer                  | 15 gp | 1d8 bludgeoning | 2 lb.   | Versatile (1d10)                                       |
| Whip                       | 2 gp  | 1d4 slashing    | 3 lb.   | Finesse, reach                                         |
| **Martial Ranged Weapons** |       |                 |         |                                                        |
| Blowgun                    | 10 gp | 1 piercing      | 1 lb.   | Ammunition (range 25/100), loading                     |
| Crossbow, hand             | 75 gp | 1d6 piercing    | 3 lb.   | Ammunition (range 30/120), light, loading              |
| Crossbow, heavy            | 50 gp | 1d10 piercing   | 18 lb.  | Ammunition (range 100/400), heavy, loading, two-handed |
| Longbow                    | 50 gp | 1d8 piercing    | 2 lb.   | Ammunition (range 150/600), heavy, two-handed          |
| Net                        | 1 gp  | -               | 3 lb.   | Special, thrown (range 5/15)                           |
|                            |       |                 |         |                                                        |

*/

export enum WeaponType {
  simpleMelee = 'Simple Melee Weapon',
  simpleRanged = 'Simple Ranged Weapon',
  martialMelee = 'Martial Melee Weapon',
  martialRanged = 'Martial Ranged Weapon',
}

export type WeaponProperties = {
  Ammunition?: boolean
  Finesse?: boolean
  Heavy?: boolean
  Light?: boolean
  Loading?: boolean
  Range?: boolean
  Reach?: boolean
  Special?: boolean
  Thrown?: boolean
  TwoHanded?: boolean
  Versatile?: boolean
}

export type WeaponDamage = {
  number: number
  dice: number
  type: DamageType
}

export type Weapon = {
  name: string
  type: WeaponType
  cost: Coins
  damage: WeaponDamage
  weight: number
  properties: WeaponProperties
  range?: {
    min: number
    max: number
  }
  versatility?: WeaponDamage
}

// export const Longbow: Weapon = {
//   name: 'Longbow',
//   type: WeaponType.martialRanged,
//   cost: {
//     amount: 50,
//     currency: Currency.Gold,
//   },
//   damage: {
//     number: 1,
//     dice: 8,
//     type: DamageType.Piercing,
//   },
//   weight: 2,
//   properties: {
//     Ammunition: true,
//     Heavy: true,
//     TwoHanded: true,
//   },
//   range: {
//     min: 150,
//     max: 600,
//   },
// }

export const Club: Weapon = {
  name: 'Club',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 1,
    currency: Currency.Silver,
  },
  damage: {
    number: 1,
    dice: 4,
    type: DamageType.Bludgeoning,
  },
  weight: 2,
  properties: {
    Light: true,
  },
}

export const Dagger: Weapon = {
  name: 'Dagger',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 4,
    type: DamageType.Piercing,
  },
  weight: 1,
  properties: {
    Finesse: true,
    Light: true,
    Thrown: true,
  },
  range: {
    min: 20,
    max: 60,
  },
}

export const GreatClub: Weapon = {
  name: 'GreatClub',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 2,
    currency: Currency.Silver,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Bludgeoning,
  },
  weight: 10,
  properties: {
    TwoHanded: true,
  },
}

export const HandAxe: Weapon = {
  name: 'HandAxe',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Slashing,
  },
  weight: 2,
  properties: {
    Light: true,
    Thrown: true,
  },
  range: {
    min: 20,
    max: 60,
  },
}

export const Javelin: Weapon = {
  name: 'Javelin',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 5,
    currency: Currency.Silver,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Piercing,
  },
  weight: 2,
  properties: {
    Thrown: true,
  },
  range: {
    min: 30,
    max: 120,
  },
}

export const LightHammer: Weapon = {
  name: 'LightHammer',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 4,
    type: DamageType.Bludgeoning,
  },
  weight: 2,
  properties: {
    Light: true,
    Thrown: true,
  },
  range: {
    min: 20,
    max: 60,
  },
}

export const Mace: Weapon = {
  name: 'Mace',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Bludgeoning,
  },
  weight: 4,
  properties: {},
}

export const Quarterstaff: Weapon = {
  name: 'Quarterstaff',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 2,
    currency: Currency.Silver,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Bludgeoning,
  },
  weight: 4,
  properties: {
    Versatile: true,
  },
  versatility: {
    number: 1,
    dice: 8,
    type: DamageType.Bludgeoning,
  },
}

export const Sickle: Weapon = {
  name: 'Sickle',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 4,
    type: DamageType.Slashing,
  },
  weight: 2,
  properties: {
    Light: true,
  },
}

export const Spear: Weapon = {
  name: 'Spear',
  type: WeaponType.simpleMelee,
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Piercing,
  },
  weight: 3,
  properties: {
    Thrown: true,
    Versatile: true,
  },
  range: {
    min: 20,
    max: 60,
  },
  versatility: {
    number: 1,
    dice: 8,
    type: DamageType.Piercing,
  },
}

export const LightCrossbow: Weapon = {
  name: 'Crossbow, light',
  type: WeaponType.simpleRanged,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Piercing,
  },
  weight: 5,
  properties: {
    Ammunition: true,
    Loading: true,
    TwoHanded: true,
  },
  range: {
    min: 80,
    max: 320,
  },
}

export const Dart: Weapon = {
  name: 'Dart',
  type: WeaponType.simpleRanged,
  cost: {
    amount: 5,
    currency: Currency.Copper,
  },
  damage: {
    number: 1,
    dice: 4,
    type: DamageType.Piercing,
  },
  weight: 0.25,
  properties: {
    Finesse: true,
    Thrown: true,
  },
  range: {
    min: 20,
    max: 60,
  },
}

export const Shortbow: Weapon = {
  name: 'Shortbow',
  type: WeaponType.simpleRanged,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Piercing,
  },
  weight: 2,
  properties: {
    Ammunition: true,
    TwoHanded: true,
  },
  range: {
    min: 80,
    max: 320,
  },
}

export const Sling: Weapon = {
  name: 'Sling',
  type: WeaponType.simpleRanged,
  cost: {
    amount: 1,
    currency: Currency.Silver,
  },
  damage: {
    number: 1,
    dice: 4,
    type: DamageType.Bludgeoning,
  },
  weight: 0,
  properties: {
    Ammunition: true,
  },
  range: {
    min: 30,
    max: 120,
  },
}

export const Battleaxe: Weapon = {
  name: 'Battleaxe',
  type: WeaponType.martialMelee,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Slashing,
  },
  weight: 4,
  properties: {
    Versatile: true,
  },
  versatility: {
    number: 1,
    dice: 10,
    type: DamageType.Slashing,
  },
}

export const Flail: Weapon = {
  name: 'Flail',
  type: WeaponType.martialMelee,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Bludgeoning,
  },
  weight: 2,
  properties: {},
}

export const Gaive: Weapon = {
  name: 'Gaive',
  type: WeaponType.martialMelee,
  cost: {
    amount: 20,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 10,
    type: DamageType.Slashing,
  },
  weight: 2,
  properties: {
    Heavy: true,
    Reach: true,
    TwoHanded: true,
  },
}

export const Greataxe: Weapon = {
  name: 'Greataxe',
  type: WeaponType.martialMelee,
  cost: {
    amount: 30,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 12,
    type: DamageType.Slashing,
  },
  weight: 7,
  properties: {
    Heavy: true,
    TwoHanded: true,
  },
}

export const Greatsword: Weapon = {
  name: 'Greatsword',
  type: WeaponType.martialMelee,
  cost: {
    amount: 50,
    currency: Currency.Gold,
  },
  damage: {
    number: 2,
    dice: 6,
    type: DamageType.Slashing,
  },
  weight: 6,
  properties: {
    Heavy: true,
    TwoHanded: true,
  },
}

export const Halberd: Weapon = {
  name: 'Halberd',
  type: WeaponType.martialMelee,
  cost: {
    amount: 20,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 10,
    type: DamageType.Slashing,
  },
  weight: 6,
  properties: {
    Heavy: true,
    TwoHanded: true,
  },
}

export const Lance: Weapon = {
  name: 'Lance',
  type: WeaponType.martialMelee,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 12,
    type: DamageType.Piercing,
  },
  weight: 6,
  properties: {
    Reach: true,
    Special: true,
  },
}

export const Longsword: Weapon = {
  name: 'Longsword',
  type: WeaponType.martialMelee,
  cost: {
    amount: 15,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Slashing,
  },
  weight: 3,
  properties: {
    Versatile: true,
  },
  versatility: {
    number: 1,
    dice: 10,
    type: DamageType.Slashing,
  },
}

export const Maul: Weapon = {
  name: 'Maul',
  type: WeaponType.martialMelee,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  damage: {
    number: 2,
    dice: 6,
    type: DamageType.Bludgeoning,
  },
  weight: 10,
  properties: {
    Heavy: true,
    TwoHanded: true,
  },
}

export const MorningStar: Weapon = {
  name: 'Morning Star',
  type: WeaponType.martialMelee,
  cost: {
    amount: 15,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Piercing,
  },
  weight: 4,
  properties: {},
}

export const Pike: Weapon = {
  name: 'Pike',
  type: WeaponType.martialMelee,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 10,
    type: DamageType.Piercing,
  },
  weight: 18,
  properties: {
    Heavy: true,
    Reach: true,
    TwoHanded: true,
  },
}

export const Rapier: Weapon = {
  name: 'Rapier',
  type: WeaponType.martialMelee,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Piercing,
  },
  weight: 2,
  properties: {
    Finesse: true,
  },
}

export const Scimitar: Weapon = {
  name: 'Scimitar',
  type: WeaponType.martialMelee,
  cost: {
    amount: 25,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Slashing,
  },
  weight: 3,
  properties: {
    Finesse: true,
    Light: true,
  },
}

export const Shortsword: Weapon = {
  name: 'Shortsword',
  type: WeaponType.martialMelee,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Piercing,
  },
  weight: 2,
  properties: {
    Finesse: true,
    Light: true,
  },
}

export const Trident: Weapon = {
  name: 'Trident',
  type: WeaponType.martialMelee,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Piercing,
  },
  weight: 4,
  properties: {
    Thrown: true,
    Versatile: true,
  },
  range: {
    min: 20,
    max: 60,
  },
  versatility: {
    number: 1,
    dice: 8,
    type: DamageType.Piercing,
  },
}

export const WarPick: Weapon = {
  name: 'War pick',
  type: WeaponType.martialMelee,
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Piercing,
  },
  weight: 2,
  properties: {},
}

export const Warhammer: Weapon = {
  name: 'Warhammer',
  type: WeaponType.martialMelee,
  cost: {
    amount: 15,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Bludgeoning,
  },
  weight: 2,
  properties: {
    Versatile: true,
  },
  versatility: {
    number: 1,
    dice: 10,
    type: DamageType.Bludgeoning,
  },
}

export const Whip: Weapon = {
  name: 'Whip',
  type: WeaponType.martialMelee,
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 4,
    type: DamageType.Slashing,
  },
  weight: 3,
  properties: {
    Finesse: true,
    Reach: true,
  },
}

export const Blowgun: Weapon = {
  name: 'Blowgun',
  type: WeaponType.martialRanged,
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 1,
    type: DamageType.Piercing,
  },
  weight: 1,
  properties: {
    Ammunition: true,
    Loading: true,
  },
  range: {
    min: 25,
    max: 100,
  },
}

export const HandCrossbow: Weapon = {
  name: 'Crossbow, hand',
  type: WeaponType.martialRanged,
  cost: {
    amount: 75,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 6,
    type: DamageType.Piercing,
  },
  weight: 3,
  properties: {
    Ammunition: true,
    Light: true,
    Loading: true,
  },
  range: {
    min: 30,
    max: 120,
  },
}

export const HeavyCrossbow: Weapon = {
  name: 'Crossbow, heavy',
  type: WeaponType.martialRanged,
  cost: {
    amount: 50,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 10,
    type: DamageType.Piercing,
  },
  weight: 18,
  properties: {
    Ammunition: true,
    Heavy: true,
    Loading: true,
    TwoHanded: true,
  },
  range: {
    min: 100,
    max: 400,
  },
}

export const Longbow: Weapon = {
  name: 'Longbow',
  type: WeaponType.martialRanged,
  cost: {
    amount: 50,
    currency: Currency.Gold,
  },
  damage: {
    number: 1,
    dice: 8,
    type: DamageType.Piercing,
  },
  weight: 2,
  properties: {
    Ammunition: true,
    Heavy: true,
    TwoHanded: true,
  },
  range: {
    min: 150,
    max: 600,
  },
}

export const Net: Weapon = {
  name: 'Net',
  type: WeaponType.martialRanged,
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
  damage: {
    number: 0,
    dice: 0,
    type: DamageType.None,
  },
  weight: 2,
  properties: {
    Special: true,
    Thrown: true,
  },
  range: {
    min: 5,
    max: 15,
  },
}
