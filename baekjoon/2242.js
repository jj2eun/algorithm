/**
 * 별 찍기 - 5 
 * https://www.acmicpc.net/problem/2442
 */

let input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input);

for (let i = 1; i <= n; i++) {
    let cnt = 2 * i - 1;    // 별 개수
    let cnt2 = ((2 * n - 1) - (2 * i - 1)) / 2; // 공백 개수
    console.log(' '.repeat(cnt2) + '*'.repeat(cnt))
}