import './style.css'

const width = "600";
const height = "600";

document.querySelector('#app').innerHTML = `
  <h1><i style="color: #F8F835;">คำคมสอนมึง Generator</i></h1>
  <canvas id="canvas" width="`+ width +`" height="`+ height +`" style="border:1px solid whitesmoke;">
  </canvas>
`
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

// base
ctx.fillStyle = '#fff'
ctx.fillRect(0,0, width, height)


// Gradient
const grd = ctx.createLinearGradient(0, 0, 0, 200);
grd.addColorStop(0, "rbga(0,0,0,1)")
grd.addColorStop(1, "rgba(0,0,0,0)")
ctx.fillStyle = grd
ctx.fillRect(0,0, width, height)