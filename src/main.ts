import FruitFactory from './factory-method/fruitFactory';
import { FruitEnum } from './factory-method/fruitEnum';

const fruit = FruitFactory.getFruit(FruitEnum.MELON);
const fruitName = fruit.getFruitName();
const fruitTaste = fruit.getFruitTaste();

console.log('fruit name', fruitName);
console.log('fruit taste', fruitTaste);
