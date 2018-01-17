export default class Circle {
  constructor(p, x, y, rx, ry, fill) {
    this.p = p
    this.x = x
    this.y = y
    this.rx = rx
    this.ry = ry
    this.fill = fill

    this.coordinates = this.setCoordinates()
  }

  setCoordinates() {
    let coordinates = []
    const quantity = 40
    for(let a = 0;  a < this.p.TWO_PI; a += this.p.TWO_PI/quantity) {
      const coordinate = {
        x: this.x + this.rx/2 * this.p.cos(a),
        y: this.y + this.ry/2 * this.p.sin(a)
      }
      // console.log(a, coordinate)
      coordinates.push(coordinate)
    }
    // console.log(quantity, coordinates)
    return coordinates
  }

  drawCoordinates() {
    // console.log(this.coordinates)
    const shuffled = this.shuffle()
    this.p.noStroke();
    this.p.beginShape()
    shuffled.forEach((coordinate) => {
      this.p.fill(0) // fill the small circles
      this.p.ellipse(coordinate.x, coordinate.y, 10)
      this.p.curveVertex(coordinate.x, coordinate.y)
    })
    this.p.fill(this.fill) // fill the main circle

    this.p.endShape(this.p.CLOSE)
  }

  shuffle() {
    let shuffled = []
    this.coordinates.forEach(coordinate => {
      const range = this.rx * 0.02
      const x = this.p.random(coordinate.x - range, coordinate.x + range)
      const y = this.p.random(coordinate.y - range, coordinate.y + range)
      shuffled.push({
        x: x,
        y: y
      })
    })
    return shuffled
  }

  /**
  * @param origin {x: , y: }
  * @return integer: index of the closest coordinate
  **/
  closestCoordinate(origin) {
    let minVal = Infinity
    let minInd;
    this.coordinates.forEach((coordinate, index) => {
      const dist = this.p.dist(origin.x, origin.y, coordinate.x, coordinate.y)
      if (dist < minVal) {
        minVal = dist
        minInd = index
      }
    })
    return minInd
  }

  // draw the circle
  draw() {
    if (this.fill) {
      this.p.fill(this.fill)
    }
    this.p.ellipse(this.x, this.y, this.rx, this.ry)
  }

  mousePressed(event) {
    const closestIndex = this.closestCoordinate({x: this.p.mouseX, y: this.p.mouseY})
    if(closestIndex) {
      this.p.mouseDragged = function () {
        this.coordinates[closestIndex] = {
          x: this.p.mouseX,
          y: this.p.mouseY
        }
        return false
      }.bind(this)
    }
  }
}
