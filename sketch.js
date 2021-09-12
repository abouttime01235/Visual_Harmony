var sliderD;
var sliderN;
var n = 5;
var d = 8;
//alert('aaaa');

function setup() {
  createCanvas(800, 400);
  //frameRate(1);
  sliderN = createSlider(1, 45, 2);
  sliderD = createSlider(1, 45, 1);
  sel = createSelect();
  sel.position(10, 350);
  sel.option('Unison 1/1');
  sel.option('Octave 2/1');
  sel.option('5th 3/2');
  sel.option('4th 4/3');
  sel.option('Maj6 5/3');
  sel.option('Maj3 5/4');
  sel.option('min3 6/5');
  sel.option('min6 8/5');
  sel.option('min7 9/5');
  sel.option('Maj2 9/8');
  sel.option('Maj7 15/8');
  sel.option('min2 16/15');
  sel.option('tritone 45/32');

  sel.selected('Octave 2/1');
  sel.changed(mySelectEvent);
  textFont('Arial');
}

function mySelectEvent() {
  let item = sel.value().split(' ')[1].split('/');
  sliderN.value(item[0]);
  sliderD.value(item[1]);
  //text('It is a ' + item + '!', 50, 50);
}

function draw() {
  background(51);
  n = sliderN.value();
  d = sliderD.value();
  fill(255);
  textSize(15);
  text('Presets:', 10, 340);
  text('n = ' + n, 10, 390);
  text('d = ' + d, 140, 390);
  var k = n / d;
  textSize(25);
  text('k = n/d = ' + n + '/' + d, 280, 390);
  textSize(15);
  rose(k);
  lissajous(n, d);
}

function rose(k) {
  text('Rose Pattern [ r = cos(k * θ) ]', 90, 20);
  push();
  translate(width / 4, height / 2);
  beginShape();
  stroke(255);
  strokeWeight(1);
  noFill();
  for (var a = 0; a < TWO_PI * d; a += 0.01) {
    var r = 150 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    //delay(100);
  }
  endShape(CLOSE);
  pop();
}

function lissajous(n, d) {
  text('Lissajous Pattern { cos(θ), sin( k * θ) }', 470, 20);
  translate(width * 3 / 4, height / 2);
  beginShape();
  stroke(255);
  strokeWeight(1);
  noFill();
  for (var a = 0; a < TWO_PI * d; a += 0.005) {
    var r = 150;
    var x = r * cos(a);
    var y = r * sin(n / d * a);
    vertex(x, y);
    //delay(100);
  }
  endShape(CLOSE);
}