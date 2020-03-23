/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 5; i > 0; i--) {
    console.log(i);
}

for (let i = 0;; i++) {
    console.log("loop, i = " + i);
    if (i > 1) {
        break;
    }
}

let counter = 0;
function inc() { counter++; } for (let i = 0; i < 10; i++, in());
console.log(counter);

let counter = 0;
for (let i = 0; i < 10; i++) {
    counter++
}
console.log(counter);

for (var i = 0; i < 10; i++) let x = i;

for (var i = 0; i < 10; i++) {let x = i; console.log(x);} // Must add curly brckets, otherwise will show an error

for (let x = 0; x < 2; x++)         // 3 Dimensional Array
    for (let y = 0; y < 2; y++)
        for (let z = 0; z < 2; z++) {
            console.log(x, y, z);
        }

for (let x = 0; x < 2; x++)   // 2 Dimensional Array
    for (let y = 0; y < 2; y++) {
        console.log(x, y);
    }

for (let i = 0; i < 3; i++) { // Print loop 3 times
  console.log("Loop.");
}

for (let i = 0; i < 3; i++) { // Print loop 3 times
  let loop = "loop";
  console.log(loop);
}

for (let i = 0; i < 3; i++) { // Skip an iteration
  if (i == 1) {
    continue
  }
  console.log(i);
}

for (let i = 0;; i++) { // Breaking a loop
    console.log(" loop");
    break;
}

let c = 0;
mark: for (let i = 0; i < 5; i++)
  inner: for (let j = 0; j < 5; j++) {
    c++;
    if (i == 2) {
      break mark;
    }
  }
console.log(c);
*/
let c = 0;
mark: for (let i = 0; i < 5; i++)
  inner: for (let j = 0; j < 5; j++) {
    c++;
    if (i == 2) {
      break inner;
    }
  }
console.log(c);
