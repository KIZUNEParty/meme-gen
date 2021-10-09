import './style.css'
const { createCanvas, loadImage } = require('canvas')

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <canvas id="outP" width="200" height="100" style="border:1px solid #000000;">
  </canvas>
`
