import './style.css'

const width = "600";
const height = "600";

document.querySelector('#app').innerHTML = `

  <h1><i style="color: #F8F835;">คำคมสอนมึง Generator</i></h1>
  <form>
    <input type="text" placeholder="img URL" id="uURI" name="uURI">
    <button type="submit">Submit</button>
  </form>
  <br />
  <canvas id="canvas" width="`+ width +`" height="`+ height +`" style="border:1px solid whitesmoke;">
  </canvas>
`

const URI = document.getElementById('uURI').value

// Canvas Part
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

// base
ctx.fillStyle = '#fff'
ctx.fillRect(0,0, width, height)

const img = new Image
img.onload = function() {
  ctx.drawImage(img,0,0);
}
img.src = URI

// Gradient
const grd = ctx.createLinearGradient(0, 600, 0, 0);
grd.addColorStop(0, 'rgba(0,0,0,0.9)')
grd.addColorStop(1, 'transparent')
ctx.fillStyle = grd
ctx.fillRect(0,0, width, height)