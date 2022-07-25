export interface IOrange {
  taste: string;
  getName(): string;
  getTaste(): string;
}

export interface IMelon {
  taste: string;
  getName(): string;
  getTaste(): string;
}

export interface IFruitFactory {
  createOrange(): IOrange;
  createMelon(): IMelon;
}
