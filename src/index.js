import Circle from './components/Circle'
import Sound from './components/Sound'

const BG_COLOR = 0

const sketch = (p) => {
  let x, y, circleMain, circleOutline, sound, bg;

  p.preload = function () {
    sound = new Sound(p, '../../assets/audio/auteur.mp3')
    bg = p.loadImage('../assets/images/bg.jpg')
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.frameRate(10)
    p.cursor(p.CROSS);
    x = p.width / 2
    y = p.height

    circleMain = new Circle(p, p.width / 2, p.height / 2, 400, 400, p.color(255, 204, 0))

    // small circle
    circleOutline = new Circle(p, x, y, 50, 50, 'rgb(0,255,0)')

    // play song
    sound.play()
  }

  p.draw = function () {
    p.background('rgba(0, 0, 0, 0.1)')
    // p.background(bg, 0.5)
    p.stroke(50)

    // p.drawCircle(circleMain)
    // p.drawCircle(circleOutline)
    circleMain.drawCoordinates()
    circleMain.setRandom(sound.getAmplitude())
    // circleOutline.drawCoordinates()

    // main circle

    // p.drawCircle(x, y, 50, 100)
    // p.moveOutlinedCircle(shape, coordinates)
  }

  p.drawCircle = function(circle) {
    // console.log(circle);
    // if (circle.fill) {
      // p.fill(circle.fill)
    // }
    p.fill(100)
    p.ellipse(circle.x, circle.y, circle.rx, circle.ry)

  }

  p.moveOutlinedCircle = function(shape, coordinates) {
    x = x + p.random(-1, 1)
    y = y - 1

    if (y < 0) {
      y = p.height
    }
  }

  p.mousePressed = function () {
    // sound.play()
    sound.mousePressed()
    circleMain.mousePressed()
  }

  p.mouseReleased = function() {
    sound.mouseReleased()
  }
}

// See https://github.com/processing/p5.js/wiki/Instantiation-Cases
new p5(sketch);  // 2nd param can be a canvas html element
