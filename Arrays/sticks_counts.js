var stickTotalCounts = 0;

function sticksCounts(stick_list, n, k) {
  var errorMessage = `You cannot make ${k} with the given sticks.`;
  if (k === 1) {
    const one = stick_list.find((element) => element === k);
    if (one) {
      stickTotalCounts = 1;
    } else {
      return errorMessage;
    }
  }
  if (k > 1) {
    for (let i = 0; i <= n; i++) {
      if (stick_list[i] > 1) {
        if (k % stick_list[i] === 0) {
          let div_num = stick_list[i];
          stickTotalCounts = k / div_num;
        }
      }
    }
  }

  return stickTotalCounts;
}

let stick_list = [1, 15, 30, 17];
let n = 4;
let k = 68;

let count = sticksCounts(stick_list, n, k);

console.log(count);
