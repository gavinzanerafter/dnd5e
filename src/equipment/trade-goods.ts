import { Coins, Currency } from './coinage'

/*
# Trade Goods

Most wealth is not in coins. It is measured in livestock, grain, land, rights to collect taxes, or rights to resources (such as a mine or a forest).

Guilds, nobles, and royalty regulate trade. Chartered companies are granted rights to conduct trade along certain routes, to send merchant ships to various ports, or to buy or sell specific goods. Guilds set prices for the goods or services that they control, and determine who may or may not offer those goods and services. Merchants commonly exchange trade goods without using currency. The Trade Goods table shows the value of commonly exchanged goods.

**Table- Cost of Trade Goods**

| Cost   | Goods                                        |
|--------|----------------------------------------------|
| 1 cp   | 1 lb. of wheat                               |
| 2 cp   | 1 lb. of flour or one chicken                |
| 5 cp   | 1 lb. of salt                                |
| 1 sp   | 1 lb. of iron or 1 sq. yd. of canvas         |
| 5 sp   | 1 lb. of copper or 1 sq. yd. of cotton cloth |
| 1 gp   | 1 lb. of ginger or one goat                  |
| 2 gp   | 1 lb. of cinnamon or pepper, or one sheep    |
| 3 gp   | 1 lb. of cloves or one pig                   |
| 5 gp   | 1 lb. of silver or 1 sq. yd. of linen        |
| 10 gp  | 1 sq. yd. of silk or one cow                 |
| 15 gp  | 1 lb. of saffron or one ox                   |
| 50 gp  | 1 lb. of gold                                |
| 500 gp | 1 lb. of platinum                            |
|        |                                              |

*/

export type TradeGood = {
  cost: Coins
  weight?: number
  description: string
}

export const Wheat: TradeGood = {
  cost: {
    amount: 1,
    currency: Currency.Copper,
  },
  weight: 1,
  description: '1 lb. of wheat',
}

export const Flour: TradeGood = {
  cost: {
    amount: 2,
    currency: Currency.Copper,
  },
  weight: 1,
  description: '1 lb. of flour',
}

export const Chicken: TradeGood = {
  cost: {
    amount: 2,
    currency: Currency.Copper,
  },
  description: '1 chicken',
}

export const Salt: TradeGood = {
  cost: {
    amount: 5,
    currency: Currency.Copper,
  },
  weight: 1,
  description: '1 lb. of salt',
}

export const Iron: TradeGood = {
  cost: {
    amount: 1,
    currency: Currency.Silver,
  },
  weight: 1,
  description: '1 lb. of iron',
}

export const Canvas: TradeGood = {
  cost: {
    amount: 1,
    currency: Currency.Silver,
  },
  description: '1 sq. yd. of canvas',
}

export const Copper: TradeGood = {
  cost: {
    amount: 5,
    currency: Currency.Silver,
  },
  weight: 1,
  description: '1 lb. of copper',
}

export const CottonCloth: TradeGood = {
  cost: {
    amount: 5,
    currency: Currency.Silver,
  },
  weight: 1,
  description: '1 sq. yd. of cotton cloth',
}

export const GingerRoot: TradeGood = {
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of ginger',
}

export const Goat: TradeGood = {
  cost: {
    amount: 1,
    currency: Currency.Gold,
  },
  description: '1 goat',
}

export const Cinnamon: TradeGood = {
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of cinnamon',
}

export const Pepper: TradeGood = {
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of pepper',
}

export const Sheep: TradeGood = {
  cost: {
    amount: 2,
    currency: Currency.Gold,
  },
  description: '1 sheep',
}

export const Cloves: TradeGood = {
  cost: {
    amount: 3,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of cloves',
}

export const Pig: TradeGood = {
  cost: {
    amount: 3,
    currency: Currency.Gold,
  },
  description: '1 pig',
}

export const Silver: TradeGood = {
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of silver',
}
export const Linen: TradeGood = {
  cost: {
    amount: 5,
    currency: Currency.Gold,
  },
  description: '1 sq. yd. of linen',
}

export const Silk: TradeGood = {
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  description: '1 sq. yd. of silk',
}

export const Cow: TradeGood = {
  cost: {
    amount: 10,
    currency: Currency.Gold,
  },
  description: '1 cow',
}

export const Saffron: TradeGood = {
  cost: {
    amount: 15,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of saffron',
}

export const Ox: TradeGood = {
  cost: {
    amount: 15,
    currency: Currency.Gold,
  },
  description: '1 ox',
}

export const Gold: TradeGood = {
  cost: {
    amount: 50,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of gold',
}

export const Platinum: TradeGood = {
  cost: {
    amount: 500,
    currency: Currency.Gold,
  },
  weight: 1,
  description: '1 lb. of platinum',
}
