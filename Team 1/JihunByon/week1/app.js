/*

alert("fukc U");

const a = 5;
const b = 7;
const Myname = "Jihun";
//말 그대로 const는 상수로 값 변화가 불가능함//
//변수를 만드는 방법에서 let도 사용가능하다//
//기본적으로 const를 사용, 변수의 값이 변화할 때만 let 쓴다//
//var 변수도 똑같이 사용 가능하나 보호를 받지 못함, 이왕이면 const 와 let 사용//

//변수 이름 내에 띄어쓰기를 원한다면 대문자를 활용//

console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log(Myname + "Hello");

//booleans 는 true false, null은 존재하지 않는다//
let something; //이 경우 undefined가 뜬다. 메모리 공간을 할당되었지만, 값이 들어가있지 않다//
const amIFat = false;
console.log(amIFat);
 

//arrays
const daysofWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysofWeek);

//5번쨰 엘리먼트가 뭐야 콘솔로그 안에 []번호 넣어서 찾기, 0에서 부터 찾느넉 기억해라

console.log(daysofWeek[5]);

//add one more thing to the array : push
daysofWeek.push("sun");
console.log(daysofWeek);

const player = {
  name: "Jihun",
  points: "200",
  handsome: false,
};

console.log(player);
console.log(player.points);

player.handsome = true; //오브젝트 수정도 가능함. const 변경은 불가하고 그냥 오브젝트만.

console.log(player.handsome);

player.lastName = "potato"; //오브젝트 새로 추가하는것도 가능하디  

console.log(player);
11
*/

function sayHello(nameofPerson, age) {
  console.log(
    "Hello my name is " + nameofPerson + "and I am " + age + " years old. "
  );
}

sayHello("Jihun", 22);
sayHello("IU", 30);

function plus(a, b) {
  //소괄호 안에 a, b는 이름이 상관 없다. argument 끌고 오는 역할
  console.log(a + b);
}

plus(8, 60);

function sayHi() {}

const player = {
  name: "Jihun",
};
