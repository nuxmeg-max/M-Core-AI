export class Voice {
  constructor(name) {
    this.name = name;
    this.synth = window.speechSynthesis;
  }

  speak(text) {
    if (!this.synth) return console.error("Browser lo gak support suara, sedih bgt.");

    // Hapus nama [M-Core] dari teks sebelum dibaca biar gak kaku
    const cleanText = text.replace(/\[.*?\]:\s*/, "");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Pilih bahasa Indonesia
    utterance.lang = 'id-ID'; 
    
    // Setting biar suaranya agak unik (Gen Z Vibe)
    utterance.pitch = 1.2; // Sedikit lebih tinggi biar terkesan lincah
    utterance.rate = 1.0;  // Kecepatan normal

    this.synth.speak(utterance);
  }
}
