console.log('-------#4');

console.log('упрощенный вариант');
function showNumbers(a, b) {
    if (a > b) {
        return;
    }
    console.log(a);
    showNumbers(a + 1, b);
}
showNumbers(5, 10);

function showNumbers1(a, b) {
    if (a === b) {
        return a;
    } else {
        return a + " " + showNumbers1(a + 1, b);
    }
}
console.log(showNumbers1(5, 10));

function showNumbers2(a, b) {
    if (a === b) {
        return [a];
    } else {
        let numbers = showNumbers2(a, b - 1);
        numbers.push(b);
        return numbers;
    }
}
console.log(showNumbers2(5, 10));


console.log('усложнённый вариант');
function showNumbers3(a, b) {
    console.log(a);
    if (a < b) {
        a++;
    } else if (a > b) {
        a--;
    } else {
        return;
    }
    showNumbers3(a, b);
}
showNumbers3(10, 5);

function showNumbers4(a, b) {
    if (a < b) {
        if (a === b) {
            return a;
        }
        return a + " " + showNumbers4(a + 1, b);
    } else {
        if (a === b){
            return a;
        }
        return a + " " + showNumbers4(a - 1, b);
    }
}
console.log(showNumbers4(5, 10));

function complicated2(a, b) {
    if (a < b) {
        if (a === b) {
            return [a];
        }
        let range = complicated2(a, b - 1);
        range.push(b);
        return range;
    } else {
        if (a === b){
            return [a];
        }
        let range2 = complicated2(a - 1, b);
        range2.unshift(a);
        return range2;
    }
}
console.log(complicated2(10, 5));



console.log('-------#5');
function currentTime() {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    document.querySelector('.clock').innerHTML = hours + ":" + min + ":" + sec;
}
setInterval(currentTime, 1000);




// function currentTime() {
//     let date = new Date();
//     let hours = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//
//     if (hours < 10) hours = "0" + hours;
//     if (min < 10) min = "0" + min;
//     if (sec < 10) sec = "0" + sec;
//
//     let clock = hours + ":" + min + ":" + sec;
//
//     document.querySelector('.clock').innerHTML = clock;
//     let time = setTimeout(function(){
//         currentTime()
//     }, 1000);
// }
// currentTime();



