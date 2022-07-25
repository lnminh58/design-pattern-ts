import { IOrange } from './interfaces';

export class AmericanOrange implements IOrange {
  taste: string;

  constructor() {
    this.taste = 'So sweet';
  }

  getName(): string {
    return 'America Orange';
  }
  getTaste(): string {
    return this.taste;
  }
}

export class VietnameseOrange implements IOrange {
  taste: string;

  constructor() {
    this.taste = 'Sweet';
  }

  getName(): string {
    return 'Vietnamese Orange';
  }
  getTaste(): string {
    return this.taste;
  }
}
