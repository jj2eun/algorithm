/**
 * 2×n 타일링
 * https://www.acmicpc.net/problem/11726
 */

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let dp = new Array(1001);
let n = Number(input);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007 // 오버플로우로 인해 중간에 나머지값을 구해줌
}

console.log(dp[n])