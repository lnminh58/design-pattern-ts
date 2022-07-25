import { IFruitFactory, IMelon, IOrange } from './interfaces';
import { AmericanOrange } from './orange';
import { AmericanMelon } from './Melon';

export default class AmericanFruit implements IFruitFactory {
  createOrange(): IOrange {
    return new AmericanOrange();
  }
  createMelon(): IMelon {
    return new AmericanMelon();
  }
}
