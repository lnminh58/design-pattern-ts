import { IMelon } from './interfaces';

export class AmericanMelon implements IMelon {
  taste: string;

  constructor() {
    this.taste = 'Quite sweet';
  }

  getName(): string {
    return 'America Melon';
  }
  getTaste(): string {
    return this.taste;
  }
}

export class VietnameseMelon implements IMelon {
  taste: string;

  constructor() {
    this.taste = 'Too sweet';
  }

  getName(): string {
    return 'Vietnamese Melon';
  }
  getTaste(): string {
    return this.taste;
  }
}
