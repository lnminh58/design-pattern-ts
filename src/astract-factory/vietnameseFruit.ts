import { IFruitFactory, IMelon, IOrange } from './interfaces';
import { VietnameseOrange } from './orange';
import { VietnameseMelon } from './Melon';

export default class VietnameseFruit implements IFruitFactory {
  createOrange(): IOrange {
    return new VietnameseOrange();
  }
  createMelon(): IMelon {
    return new VietnameseMelon();
  }
}
