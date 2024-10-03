// Selecionando elementos do DOM
var minifigure = document.querySelector('.minifigure');
var faces = document.querySelector('.faces');
var upperBody = document.querySelector('.upper-body');
var lowerBody = document.querySelector('.lower-body');
var explode = document.querySelector('.explode');
var randomize = document.querySelector('.randomize');
var expressionRangeInput = document.querySelector('.expression-range');
var colorRangeInput = document.querySelectorAll('.color-range');
var upperHue = document.getElementById('upper-hue');
var upperSaturation = document.getElementById('upper-saturation');
var upperLightness = document.getElementById('upper-lightness');
var lowerHue = document.getElementById('lower-hue');
var lowerSaturation = document.getElementById('lower-saturation');
var lowerLightness = document.getElementById('lower-lightness');

// Adicionando Event Listeners
explode.addEventListener('click', explodeMinifigure);
randomize.addEventListener('click', randomizeInputs);
expressionRangeInput.addEventListener('input', setExpression);

for (var i = 0; i < colorRangeInput.length; i++) {
  colorRangeInput[i].addEventListener('input', setColors);
}

// Função para gerar número aleatório
function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para explodir a minifigura
function explodeMinifigure() {
  minifigure.classList.toggle('explode');
  
  if (minifigure.classList.contains('explode')) {
    explode.innerHTML = 'Rebuild';
  } else {
    explode.innerHTML = 'Explode';
  }
}

// Adicionando Event Listener ao controle de cabelo
hairControl.addEventListener('change', function() {
  setHair(this.value);
});

// Função para randomizar entradas
function randomizeInputs() {
  var randomExpression = Math.floor(getRandomNum(0, 5));
  var randomUpperHue = Math.floor(getRandomNum(0, 360));
  var randomUpperSaturation = Math.floor(getRandomNum(0, 100));
  var randomUpperLightness = Math.floor(getRandomNum(0, 90));
  var randomLowerHue = Math.floor(getRandomNum(0, 360));
  var randomLowerSaturation = Math.floor(getRandomNum(0, 100));
  var randomLowerLightness = Math.floor(getRandomNum(0, 90));
  
  // Atualizar valores dos inputs
  expressionRangeInput.value = randomExpression * 100;
  upperHue.value = randomUpperHue;
  upperSaturation.value = randomUpperSaturation;
  upperLightness.value = randomUpperLightness;
  lowerHue.value = randomLowerHue;
  lowerSaturation.value = randomLowerSaturation;
  lowerLightness.value = randomLowerLightness;
  
  // Aplicar mudanças
  setExpression();
  setColors();
}

// Função para definir a expressão facial
function setExpression() {
  var expressionVal = parseInt(expressionRangeInput.value, 10);
  faces.style.transform = 'translateX(-' + expressionVal + '%)';
}

// Função para definir as cores
function setColors() {
  var upperHueVal = parseInt(upperHue.value, 10);
  var upperSaturationVal = parseInt(upperSaturation.value, 10);
  var upperLightnessVal = parseInt(upperLightness.value, 10);
  var lowerHueVal = parseInt(lowerHue.value, 10);
  var lowerSaturationVal = parseInt(lowerSaturation.value, 10);
  var lowerLightnessVal = parseInt(lowerLightness.value, 10);
  
  upperBody.style.color = 'hsl(' + upperHueVal + ',' + upperSaturationVal + '%,' + upperLightnessVal + '%)';
  lowerBody.style.color = 'hsl(' + lowerHueVal + ',' + lowerSaturationVal + '%,' + lowerLightnessVal + '%)';
}
