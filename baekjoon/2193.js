/**
 * 이친수 
 * https://www.acmicpc.net/problem/2193
 */

let input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input);

let dp = [[0, 0], [0, 1]];
for (let i = 2; i <= n; i++) {
    dp[i] = new Array();
}

// i자리수일때 0, 1로 끝나는 이친수  
for (let i = 2; i <= n; i++) {
    // BigInt는 Number 가 나태낼수 있는 최대수보다 큰 정수 표현 가능 
    dp[i][0] = BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]);
    dp[i][1] = BigInt(dp[i - 1][0]);
}

console.log(BigInt(dp[n][0] + dp[n][1]).toString()) // BigInt 는 끝에 n이 붙기 때문에 String 타입으로 변환 