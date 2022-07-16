/**
 * 오르막 수
 * https://www.acmicpc.net/problem/11057
 */

let input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input)

// 2차원배열 생성
let dp = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

for (let i = 2; i <= n + 1; i++) {
    dp[i] = new Array(10);
}

// dp[i][j] : 길이가 i일때, j로 끝나는 오르막 개수 
for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
        let num = 0
        // j로 끝나는 오르막의 개수는 0부터 j까지 존재
        for (let k = 0; k <= j; k++) {
            num += dp[i - 1][k] % 10007;
        }
        dp[i][j] = num % 10007
    }
}

let result = 0;
// 길이가 n인 오르막의 개수 
for (let i = 0; i <= 9; i++) {
    result += dp[n][i] % 10007;
}

// 오버플로우 방지를 위해 모든 계산에서 나머지 연산
console.log(result % 10007)
