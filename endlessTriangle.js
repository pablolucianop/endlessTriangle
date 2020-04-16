// Defining a triangle, with its three vertexs, each one by its coordinates [x,y]
const VertexA = [735, 1470]
const VertexB = [0, 200]
const VertexC = [1570, 200]
const triangle = [VertexA, VertexB, VertexC]
// this function returns the coordinates of one of those vertexs, picked at random
function randomVert() {
  const randomVertex = triangle[Math.floor(Math.random() * triangle.length)]
  return randomVertex
}

//this function defines the middle point between two given points
function middlePointF(point1, point2) {
  let xMiddle = (point1[0] - point2[0]) / 2 + point2[0]
  let yMiddle = (point1[1] - point2[1]) / 2 + point2[1]
  let middlePoint = [xMiddle, yMiddle]
  return middlePoint
}

// CONSTRUCTING THE FRACTAL TRIANGLE
// pick the a random 'First Point', defined by it coordinates
let anyPoint = VertexA

// pick a random vertex of the triangle previously defined
let firstRandomVertex = randomVert()

// find the middle point between the chosen vertex and that 'First Point', and push it into an array
let allPoints = []
allPoints.push(middlePointF(anyPoint, firstRandomVertex))

// define the middle the point between the point pushed before and a random vertex of our triangle
allPoints.push(middlePointF(allPoints[0], randomVert()))

// creates 100 points and pushes them into an array
function points() {
  for (var i = 0; i < 1000; i++) {
    allPoints.push(middlePointF(allPoints[allPoints.length - 1], randomVert()))
  }
}
//sets canvas resolution
function initCanvas() {
  $("#a").attr("width", 1600)
  $("#a").attr("height", 1600)
}
initCanvas()

//draws the points
function draw() {
  var ctx = document.getElementById("a").getContext("2d")
  for (var i = 0; i <= allPoints.length - 1; i++) {
    ctx.beginPath()
    ctx.arc(allPoints[i][0], allPoints[i][1], 3, 0, 2 * Math.PI)
    var randomRed = (Math.floor(Math.random() * 30) + 70) * 10000
    // var randomRed2 = 700000
    ctx.fillStyle = `#${randomRed}`
    ctx.fill()
  }
}

//iterates every half second
setInterval(function () {
  if (allPoints.length < 50000) {
    var ctx = document.getElementById("a").getContext("2d")
    ctx.clearRect(0, 0, 1600, 1600)
    points()
    draw()
    // makeItRain()
  }
}, 500)

//animate it in space
function makeItRain() {
  for (var i = 0; i <= allPoints.length - 1; i++) {
    allPoints[i][0] = allPoints[i][0] + 10
    allPoints[i][1] = allPoints[i][1] + 10
  }
}
