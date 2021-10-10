import './style.css'
import {loadImage} from 'canvas'

const width = "600";
const height = "600";

document.querySelector('#app').innerHTML = `

  <h1><i style="color: #F8F835;">คำคมสอนมึง Generator</i></h1>
  <input type="file" id="input"/>
  <br />
  <input type="text" id="txt1" placeholder="text 1" />
  <br />
  <input type="text" id="txt2" placeholder="text 2" />
  <br />
  <input type="text" id="txt3" placeholder="text 3" />
  <br />
  <button id="add1">Add text 1</button>
  <button id="add2">Add text 2</button>
  <button id="add3">Add text 3</button>
  <br />
  <br />
  <button id="bannerKNB">Add Banner KNB</button>
  <button id="banner3chad">Add Banner 3Chad</button>
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
const a1 = document.getElementById('add1')
const a2 = document.getElementById('add2')
const a3 = document.getElementById('add3')


a1.onclick = function() {  
  const inp1 = document.getElementById('txt1').value

  ctx.font="Italic 30px Sarabun"
  ctx.fillStyle = "yellow"
  ctx.textAlign = "left"
  const localX1 = 30
  const localY1 = height - (height/4)
  ctx.fillText(inp1, localX1, localY1)
}

a2.onclick = function() {
  const inp2 = document.getElementById('txt2').value

  ctx.font="Italic 30px Sarabun"
  ctx.fillStyle = "yellow"
  ctx.textAlign = "left"
  const localX2 = 30
  const localY2 = height - (height/5.5)
  ctx.fillText(inp2, localX2, localY2)
}

a3.onclick = function() {
  const inp3 = document.getElementById('txt3').value

  ctx.font="Italic 20px Sarabun"
  ctx.fillStyle = "yellow"
  ctx.textAlign = "right"
  const localX3 = width - 30
  const localY3 = height - (height/7.5)
  ctx.fillText(inp3, localX3, localY3)
}

// Banner add
const KNB = document.getElementById('bannerKNB')
// const chad = document.getElementById('banner3chad')

async function KNBB() {
  const KNBi = await loadImage('https://media.discordapp.net/attachments/879923131064668170/896560475385512016/knb.png')
  ctx.drawImage(KNBi, 10, 0)
}

KNB.onclick = function() {
  KNBB()
}