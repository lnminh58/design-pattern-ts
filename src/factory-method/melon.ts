import Fruit from './fruit';

export default class Melon implements Fruit {
  taste: string;

  constructor() {
    this.taste = 'sweet';
  }

  getFruitTaste(): string {
    return this.taste;
  }

  getFruitName(): string {
    return 'Melon';
  }
}
