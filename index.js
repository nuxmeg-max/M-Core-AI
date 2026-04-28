import { Brain } from './src/brain.js';
import { Vision } from './src/vision.js';
import { Voice } from './src/voice.js'; // Import fitur suara

export class MCore {
  constructor(customName = "M-Core") {
    this.displayName = customName;
    this.brain = new Brain(this.displayName);
    this.vision = new Vision(this.displayName);
    this.voice = new Voice(this.displayName); // Inisialisasi suara
  }

  // Fungsi chat + suara
  async chat(message, useVoice = true) {
    const response = this.brain.process(message);
    if (useVoice) this.voice.speak(response); // M-Core langsung ngomong
    return response;
  }

  // Fungsi kamera + suara
  async see(data, useVoice = true) {
    const response = this.vision.analyze(data);
    if (useVoice) this.voice.speak(response); // M-Core komentar lewat suara
    return response;
  }
}
