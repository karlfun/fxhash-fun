// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }




const firstDoodle = document.querySelector('.first-doodle');
firstDoodle.grid = "40";
firstDoodle.seed = fxrand();
console.log(firstDoodle.grid);
console.log(firstDoodle.seed);

const secondDoodle = document.querySelector('.second-doodle');
secondDoodle.grid = "40";
secondDoodle.seed = fxrand();
console.log(secondDoodle.grid);
console.log(secondDoodle.seed);



// Features
// Display is functional but not quite accurate yet



var x = (Math.floor(fxrand()*10)+1);
console.log(x);

function getFeatureString(value) {
  if (value === 1) return "mint"
  if (value === 2) return "pale purp"
  if (value === 3) return "pale purp"
  else return "purp"
}

window.$fxhashFeatures = {
  "Theme": getFeatureString(x)
}