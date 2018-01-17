import Circle from './components/Circle'

const BG_COLOR = 255

const sketch = (p) => {
  let x, y, circleMain, circleOutline;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.frameRate(4)
    x = p.width / 2
    y = p.height

    circleMain = new Circle(p, p.width / 2, p.height / 2, 400, 600, 'rgb(255, 204, 0)')

    // small circle
    circleOutline = new Circle(p, x, y, 50, 50, 'rgb(0,255,0)')
  }

  p.draw = function () {
    p.background(BG_COLOR)
    p.stroke(50)

    p.drawCircle(circleMain)
    // p.drawCircle(circleOutline)
    circleMain.drawCoordinates()
    circleOutline.drawCoordinates()

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

  p.mousePressed = function (event) {
    circleMain.mousePressed(event)


  }
}

// See https://github.com/processing/p5.js/wiki/Instantiation-Cases
new p5(sketch);  // 2nd param can be a canvas html element