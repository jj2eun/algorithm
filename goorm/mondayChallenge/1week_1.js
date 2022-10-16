/**
 * 알고리즘 {먼데이} 챌린지 - [1주차] 1번 
 * https://www.acmicpc.net/problem/2193
 */

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    let bridge;

    let count = 0;
    let data;
    for await (const line of rl) {
        if (count === 1) {
            data = line.split(' ');
            rl.close();
        }

        count += 1;
    }

    // 10개의 수가 모두 100인 경우 -> BigInteger
    let result = data.reduce((prev, curr) => { return BigInt(prev) * BigInt(curr) });
    console.log(result.toString());

    process.exit();
})();