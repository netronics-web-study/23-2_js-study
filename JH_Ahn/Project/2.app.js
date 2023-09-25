//구조체 실습
const player = {
    name: "재형",
    points: 10,
    fat: false
};

console.log(player);
console.log("이름: " + player.name);

player.lastName = "안";      //구조체에 추가하는 방법


//문자열을 인수로 받아 str Hello를 출력해주는 함수
function sayHello(name, age) {
    console.log("Hello my name is " + name + "and I'm " + age);
}
sayHello("bujang", 23);

//더하기 함수
function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus(1,5);

//객체? 내부에 메소드, 상수 추가
const player2 = {
    name: "JH",
    sayHello2Me: function(){
        console.log(player2.name + ", Hello!");
    },
    sayHello2other: function(otherName) {
        console.log("Hello " + otherName + "!")   ;
    }
};

player2.sayHello2Me();
player2.sayHello2other("AAA");

//2.11계산기 만들기
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
console.log("한국 나이는 : " + calculateKrAge(age));


const calculator = {
    plus: function(a, b) {
        console.log(a+b);
        return a+b;
    },
    minus: function(a , b){
        console.log(a-b);
        return a-b;
    },
    times: function(a, b) {
        console.log(a*b);
        return a*b;
    },
    divide: function(a, b) {
        console.log(a/b);
        return a/b;
    },
    power: function(a, b) {
        console.log(a**b);
        return a**b;
    }
};

calculator.plus(10,2);
calculator.minus(10, 2);
calculator.divide(10, 2);
calculator.times(10, 2);
calculator.power(10, 2);


/*2.13
* prompt는 잘 이용하지 않음. javascript를 멈추게 만들고,
* 디자인도 인예쁘고, 대안이 많음
* 자료형을 바꾸는 법 실습. string => integer*/

const inputAge = parseInt(prompt("몇살?"));

//2.14 조건문2
//2.15 조건문3
if(isNaN(inputAge)){
    alert("숫자를 입력하세요");
} else if(inputAge < 18){
    alert("니나이 : " + inputAge + " = 아직 애기다");
} else if(inputAge < 50){
    alert("ok" + inputAge);
} else {
    alert("화석 입장 금지");
}

