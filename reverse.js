const args = process.argv;
let list = args.slice(2);
let solution = "";

for (let i = 0; i < list.length; i++) {
  solution = "";
  for (let j = list[i].length - 1; j > -1; j--) {
    solution += list[i][j];
  }
  console.log(solution);
}

// node reverse.js hello goodbye
// olleh
// eybdoog