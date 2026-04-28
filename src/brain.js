import { slangData } from './utils.js';

export class Brain {
  constructor(name) {
    this.name = name;
  }

  process(text) {
    const input = text.toLowerCase();
    const randomSlang = (arr) => arr[Math.floor(Math.random() * arr.length)];

    if (input.includes("halo") || input.includes("p")) {
      return `[${this.name}]: ${randomSlang(slangData.greetings)}`;
    }
    if (input.includes("siapa")) {
      return `[${this.name}]: Gue M-Core, tapi di sini lo panggil gue ${this.name}. No cap!`;
    }
    
    return `[${this.name}]: ${randomSlang(slangData.roast)}`;
  }
}
