// documnet는 우리가 접근할 수 있는
// html이 가지고 있는 object를 나타내줌
console.log(document.title);
document.title = "Hi";
console.log(document.title);
console.log(document.body);

// 3.1 스크립트로 태그 변경
// 객체의 속성을 열어보고 수정할 수 있다.
//
const title = document.getElementById("title")
title.innerText = "Got you!";
console.dir(title);
console.log(title.textContent);
console.log(title.id);
console.log(title.className);