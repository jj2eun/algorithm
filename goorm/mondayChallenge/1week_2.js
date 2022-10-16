/**
 * 알고리즘 {먼데이} 챌린지 - [1주차] 2번 
 */

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    let count = 0, cnt = 0;
    let name = '';
    let data = [];

    for await (const line of rl) {
        if (count === 0) {
            cnt = line.split(' ')[0];
            name = line.split(' ')[1];
        } else if (count === Number(cnt)) {
            data.push(line);
            rl.close();
        } else {
            data.push(line);
        }
        count += 1;
    }


    let result = data.filter(data => data.indexOf(name) >= 0);

    console.log(result.length)
    process.exit();
})();