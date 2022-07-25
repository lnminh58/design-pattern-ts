import { IFruitFactory, IOrange, IMelon } from './interfaces';

export default class FruitFactory {
  orange: IOrange;
  melon: IMelon;

  constructor(factory: IFruitFactory) {
    this.orange = factory.createMelon();
    this.melon = factory.createOrange();
  }
}
