// factory method

// import FruitFactory from './factory-method/fruitFactory';
// import { FruitEnum } from './factory-method/fruitEnum';

// const fruit = FruitFactory.getFruit(FruitEnum.MELON);
// const fruitName = fruit.getFruitName();
// const fruitTaste = fruit.getFruitTaste();

// console.log('fruit name', fruitName);
// console.log('fruit taste', fruitTaste);

// astract factory

import FruitFactory from './astract-factory/fruitFactory';
import AmericanFruit from './astract-factory/americanFruit';
import VietnameseFruit from './astract-factory/vietnameseFruit';

const americanfruit = new FruitFactory(new AmericanFruit());

console.log(americanfruit.melon.getName());
console.log(americanfruit.orange.getName());

const vietnameseFruit = new FruitFactory(new VietnameseFruit());

console.log(vietnameseFruit.melon.getName());
console.log(vietnameseFruit.orange.getName());
