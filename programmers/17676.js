/**
 * 추석 트래픽
 * https://programmers.co.kr/learn/courses/30/lessons/17676
 * 
 */

function solution(lines) {
    var answer = 0;
    const traffic = [];

    for (const s of lines) {
        const arr = s.split(' ');
        const end = new Date(arr[0] + ' ' + arr[1]);
        const start = new Date(arr[0] + ' ' + arr[1]);
        const sec = Number(arr[2].slice(0, -1));

        // 밀리초로 계산
        traffic.push(start.getTime() - 1000 * sec + 1)
        traffic.push(end.getTime())
    }

    let max = 0;
    let cnt = 1;
    let startSec = 0;
    // 최대 트래픽 개수 구하기
    for (let i = 0; i < traffic.length; i += 2) {
        startSec = startSec >= traffic[i] ? startSec : traffic[i];  // 시작 초 (테스트18 시간초과 해결위해 시간초 비교후 할당)

        while (startSec <= traffic[i + 1]) {
            cnt = 1;
            let endSec = startSec + 1000 - 1; // 1초 뒤

            /** 
             * 시작초가 다음 트래픽의 처음~끝에 걸려있거나
             * 1초뒤가 다음 트래픽의 처음~끝에 걸려있거나,
             * 시작초와 1초뒤 사이에 다음 트래픽이 들어있거나
             * 다음 트래픽의 처음~끝 사이에 시작초와 끝초가 있을때 트래픽이 겹침
             * */
            for (let j = i; j < traffic.length - 2; j += 2) {
                if ((traffic[j + 2] <= startSec && startSec <= traffic[j + 3]) ||
                    (traffic[j + 2] <= endSec && endSec <= traffic[j + 3]) ||
                    (traffic[j + 2] <= startSec && endSec <= traffic[j + 3]) ||
                    (startSec <= traffic[j + 2] && traffic[j + 3] <= endSec)) {
                    cnt += 1;
                }
            }
            startSec += 1;    // 0.001초 증가
        }

        max = cnt >= max ? cnt : max;

    }

    answer = max;

    return answer;
}