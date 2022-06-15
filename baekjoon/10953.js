// https://www.acmicpc.net/problem/10953

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// input값 변환하기
const n = parseInt(input[0]);

for (let i = 1; i < n + 1; i++) {
    let result = input[i].split(',').reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

    console.log(result);
}