export default class Audio {
  constructor({ file, fftSize }) {
    this.file = file;
    this.fftSize = fftSize;
    this.sound = {};
    this.audioContext = new AudioContext();    
    this.data = new Uint8Array(110);
    this.analyzer = {};


  }
  init() {

  }
  getByteFrequencyData() {
    return this.analyzer.getByteFrequencyData(this.data);
  }
}