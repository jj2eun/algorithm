/**
 * 쉬운 계단 수
 * https://www.acmicpc.net/problem/10844
 */

let input = require('fs').readFileSync('/dev/stdin').toString();


const n = Number(input);
// 이차원 배열 생성
let dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
for (let i = 1; i <= n; i++) {
    dp[i] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}

// dp[i][j] : 길이가 i일때, 마지막수가 j인 계단의 수
for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
        // 마지막수가 0, 9 일때 경우의 수는 1가지. 나머지 경우의 수는 2가지 
        if (j === 0) dp[i][j] = dp[i - 1][j + 1] % 1000000000;
        else if (j === 9) dp[i][j] = dp[i - 1][j - 1] % 1000000000;
        else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
}

let result = 0;
for (let i = 0; i < 10; i++) {
    result += dp[n][i] % 1000000000;    // 길이가 n인 계단의 총 수 
}

// 오버플로우때문에 모든 계산과정에서 나머지 연산 필요 
console.log(result % 1000000000)
