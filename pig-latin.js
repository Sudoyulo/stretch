const args = process.argv;
let list = args.slice(2);
let latin = "";
let solution = "";

for (let i = 0; i < list.length; i++) {
  latin = "";
  for (let j = list[i].length - 1; j > 0; j--) {
    latin += list[i][j];
  }
  latin += list[i][0] + "ay ";
  solution += latin;
}
console.log(solution.trim());