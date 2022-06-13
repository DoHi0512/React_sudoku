let arr = [];
let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let row = [[], [], [], [], [], [], [], [], [], []];
let col = [[], [], [], [], [], [], [], [], [], []];
let square = [[], [], [], [], [], [], [], [], [], []];
for (let i = 0; i < 10; i++) {
  row[i].push(nums);
  col[i].push(nums);
  square[i].push(nums);
}
function sqr(x, y) {
  return Math.floor(x / 3) * 3 + Math.floor(y / 3);
}
function assignNum(x, y) {
  let num = Math.floor(Math.random() * 9) + 1;
  if (
    col[y][num] === undefined &&
    row[x][num] === undefined &&
    square[sqr(x, y)][num] === undefined
  ) {
    col[y][num] = 1;
    row[x][num] = 1;
    square[sqr(x, y)][num] = 1;
    return num;
  }
  return 0;
}

function Making() {
  let arr = [];
  let temp = [];
  for (let i = 0; i < 9; i++) {
    let temp = [];
    for (let j = 0; j < 9; j++) {
      let data = assignNum(j, i);
      temp.push({
        idx: [i, j],
        value: data,
        isBlank: data === 0 ? true : false,
      });
    }

    arr.push(temp);
  }
  console.log(arr);
  return arr;
}
export default Making;
