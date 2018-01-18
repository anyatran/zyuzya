export default class Sound {
  constructor(p, soundUrl) {
    this.p = p
    this.sound = p.loadSound(soundUrl)

    this.setup()
  }

  setup() {
    this.sound.playMode('sustain')
  }

  play() {
    this.sound.play()
  }

  mousePressed() {
    // this.sound.play()
    console.log('play')
  }

  mouseReleased() {
    // this.sound.pause()
    console.log('relesase')
  }
}
