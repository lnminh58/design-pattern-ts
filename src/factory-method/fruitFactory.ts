import Fruit from './fruit';
import { FruitEnum } from './fruitEnum';
import Orange from './orange';
import Melon from './melon';

export default class FruitFactory {
  static getFruit(FruitType: FruitEnum): Fruit {
    switch (FruitType) {
      case FruitEnum.MELON:
        return new Melon();
      case FruitEnum.ORANGE:
        return new Orange();
      default:
        throw new Error('this fruit type has been yet implemented');
    }
  }
}
