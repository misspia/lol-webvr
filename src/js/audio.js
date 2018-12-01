export default class Audio {
  constructor({ audioElement, fftSize = 64, dataLength = 110 }) {
    this.fftSize = fftSize;
    this.sound = {};

    this.context = new AudioContext();
    this.source = this.context.createMediaElementSource(audioElement);
    this.analyser = this.context.createAnalyser();

    this.source.connect(this.analyser);
    this.source.connect(this.context.destination);

    this.frequencyData = new Uint8Array(dataLength);
  }
  getByteFrequencyData() {
    return this.analyser.getByteFrequencyData(this.frequencyData);
  }
}