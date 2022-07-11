/**
 * 2007년
 * https://www.acmicpc.net/problem/1924
 */

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let x = input[0];
let y = input[1];


let arr = new Array(13);

const odd = [1, 3, 5, 7, 8, 10, 12]; // 31일인 월
const even = [4, 6, 9, 11];   // 30일인 월

const week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
// 각 월의 시작 요일 구하기
arr[1] = 0; // 0: 월요일
for (let i = 2; i < 13; i++) {
    // i-1월의 요일 i-1월의 일자를 더한후, 7로 나눈 나머지값이 i월의 요일
    let day = odd.includes(i - 1) ? 31 : 30;

    if (i === 2) {
        arr[i] = day % 7; // 3 :목요일
    } else if (odd.includes(i)) {
        arr[i] = i === 3 ? (arr[i - 1] + 28) % 7 : (arr[i - 1] + day) % 7;
    } else if (even.includes(i)) {
        arr[i] = (arr[i - 1] + day) % 7;
    }
}


// x월 + (y일 % 7 - 1)  = x월 y일의 요일 
let num = y % 7 === 0 ? 6 : y % 7 - 1;  // 월요일이 0부터 시작하므로, y % 7 - 1, 7의 배수를 7로 나누면 나머지는 0
console.log(week[(arr[x] + num) % 7]);