/*
### Damage Types

Different attacks, damaging spells, and other harmful effects deal different types of damage. Damage types have no rules of their own, but other rules, such as damage resistance, rely on the types.

The damage types follow, with examples to help a GM assign a damage type to a new effect.

***Acid***. The corrosive spray of a black dragon's breath and the dissolving enzymes secreted by a black pudding deal acid damage.

***Bludgeoning***. Blunt force attacks-hammers, falling, constriction, and the like-deal bludgeoning damage.

***Cold***. The infernal chill radiating from an ice devil's spear and the frigid blast of a white dragon's breath deal cold damage.

***Fire***. Red dragons breathe fire, and many spells conjure flames to deal fire damage.

***Force***. Force is pure magical energy focused into a damaging form. Most effects that deal force damage are spells, including *magic missile* and *spiritual weapon*.

***Lightning***. A *lightning bolt* spell and a blue dragon's breath deal lightning damage.

***Necrotic***. Necrotic damage, dealt by certain undead and a spell such as *chill touch*, withers matter and even the soul.

***Piercing***. Puncturing and impaling attacks, including spears and monsters' bites, deal piercing damage.

***Poison***. Venomous stings and the toxic gas of a green dragon's breath deal poison damage.

***Psychic***. Mental abilities such as a mind flayer's psionic blast deal psychic damage.

***Radiant***. Radiant damage, dealt by a cleric's *flame strike* spell or an angel's smiting weapon, sears the flesh like fire and overloads the spirit with power.

***Slashing***. Swords, axes, and monsters' claws deal slashing damage.

***Thunder***. A concussive burst of sound, such as the effect of the *thunderwave* spell, deals thunder damage.

*/

export enum DamageType {
  Acid = 'Acid',
  Bludgeoning = 'Bludgeoning',
  Cold = 'Cold',
  Fire = 'Fire',
  Force = 'Force',
  Lightning = 'Lightning',
  Necrotic = 'Necrotic',
  Piercing = 'Piercing',
  Poison = 'Poison',
  Psychic = 'Psychic',
  Radiant = 'Radiant',
  Slashing = 'Slashing',
  Thunder = 'Thunder',
}
