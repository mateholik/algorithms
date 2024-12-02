function sumRange(n) {
  let total = 0;

  for (let i = n; i > 0; i--) {
    total += i;
  }
  console.log(total);
}

// sumRange(3);

function sumRangeRecursion(n, total = 0) {
  if (n <= 0) {
    console.log(total);
    return;
  }
  sumRangeRecursion(n - 1, total + n);
}

// sumRangeRecursion(3);
