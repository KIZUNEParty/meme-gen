import './style.css'

const width = "600";
const height = "600";

document.querySelector('#app').innerHTML = `

  <h1><i style="color: #F8F835;">คำคมสอนมึง Generator</i></h1>
  <input type="file" id="input"/>
  <br />
  <span class="label">Text: </span><input type="text" id="textup" />
  <button id="add1">Add text 1</button>
  <br />
  <span class="label">Text: </span><input type="text" id="textdown" />
  <button id="add2">Add text 2</button>
  <br />
  <br />
  <canvas id="canvas" width="`+ width +`" height="`+ height +`" style="border:1px solid whitesmoke;">
  </canvas>
`

// Canvas Part
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


// base
ctx.fillStyle = '#fff'
ctx.fillRect(0,0, width, height)

var input = document.getElementById('input');
input.addEventListener('change', handleFiles);
function handleFiles(e) {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image;
  img.src = URL.createObjectURL(e.target.files[0]);
  img.onload = function() {
      ctx.drawImage(img, 0,0);

      //Graidient
      const grd = ctx.createLinearGradient(0, 600, 0, 0);
      grd.addColorStop(0, 'rgba(0,0,0,0.9)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.fillRect(0,0, width, height)
  }
}

// Gradient
const grd = ctx.createLinearGradient(0, 600, 0, 0);
grd.addColorStop(0, 'rgba(0,0,0,0.9)')
grd.addColorStop(1, 'transparent')
ctx.fillStyle = grd
ctx.fillRect(0,0, width, height)

// text upper
ctx.font="Italic 30px Sarabun"
const a1 = document.getElementById('add1')
const a1 = document.getElementById('add1')

const inp1 = document.getElementById('textup').value
const inp2 = document.getElementById('textdown').value

a1.onclick = function() {
  ctx.fillStyle = "yellow";
  ctx.textAlign = "left";
  const localX1 = width / 4.5
  const localY1 = height - (height/4)
  ctx.fillText(inp1, localX1, localY1)
}

a2.onclick = function() {
  ctx.fillStyle = "yellow";
  ctx.textAlign = "left";
  const localX2 = width - (width/4.5)
  const localY2 = height - (height/5.5)
  ctx.fillText(inp2, localX2, localY2)
}