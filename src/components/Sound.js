export default class Sound {
  constructor(p, soundUrl) {
    this.p = p
    this.sound = p.loadSound(soundUrl)
    this.amplitude = new p5.Amplitude()

    this.setup()
  }

  setup() {
    this.sound.playMode('sustain')
    this.amplitude.setInput(this.sound)
    // console.log(this.sound)
  }

  play() {
    this.sound.play()
  }

  mousePressed() {
    const a = 1
    // this.sound.play()
    // console.log('play')
  }

  mouseReleased() {
    // this.sound.pause()
    const a = 1
  }

  getAmplitude() {
    return this.amplitude.getLevel()
  }
}
