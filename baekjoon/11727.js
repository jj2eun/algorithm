/**
 * 2×n 타일링 2
 * https://www.acmicpc.net/problem/11727
 */

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let dp = new Array(1001);
let n = Number(input);

dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007
}

console.log(dp[n] % 10007)