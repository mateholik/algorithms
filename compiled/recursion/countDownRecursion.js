"use strict";
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
// countDown(4);
function countDownRecursion(n) {
    if (n <= 0)
        return;
    console.log(n);
    countDownRecursion(n - 1);
}
countDownRecursion(4);
