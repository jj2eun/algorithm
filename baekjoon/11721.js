/**
 * 열 개씩 끊어 출력하기
 * https://www.acmicpc.net/problem/11721
 */

const input = require('fs').readFileSync('/dev/stdin').toString();

let str = '';
let cnt = 0;
for (let i = 0; i < input.length; i++) {
    str += input[i];
    cnt += 1;
    if (cnt > 0 && cnt % 10 === 0) {
        console.log(str)
        str = '';
        cnt = 0;
    } else if (i === input.length - 1) {
        console.log(str);
    }
}