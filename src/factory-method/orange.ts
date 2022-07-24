import Fruit from './fruit';

export default class Orange implements Fruit {
  taste: string;

  constructor() {
    this.taste = 'sour';
  }

  getFruitTaste(): string {
    return this.taste;
  }
  getFruitName(): string {
    return 'Orange';
  }
}
