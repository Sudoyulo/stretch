const args = process.argv;
let list = args.slice(2);
let latin = "";
let solution = "";

for (let i = 0; i < list.length; i++) {
  latin = "";
  for (let j = 1; j < list[i].length; j++) {
    latin += list[i][j];
  }
  latin += list[i][0] + "ay ";
  solution += latin;
}
console.log(solution.trim());