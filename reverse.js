const args = process.argv;
let list = args.slice(2);
let latin = "";

for (let i = 0; i < list.length; i++) {
  latin = "";
  for (let j = list[i].length - 1; j > -1; j--) {
    latin += list[i][j];
  }
  console.log(latin);
}