import { slangData } from './utils.js';

export class Vision {
  constructor(name) {
    this.name = name;
  }

  analyze(data) {
    if (data.isSmiling) return `[${this.name}]: Senyum lo sus banget, ada maunya ya?`;
    if (data.isDetected === false) return `[${this.name}]: Mana orangnya? Jangan main petak umpet!`;
    return `[${this.name}]: ${slangData.vision[0]} Vibes lo hari ini lumayan lah.`;
  }
}
