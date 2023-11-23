const id = document.getElementById("id");
const pw = document.getElementById("pw");

if (user_id.value !== "" && pw.value !== "") {
	const req = {
		ID: id.value,
		PW: pw.value,
	};

	fetch("주소주소", {
		method: "POST",
		body: JSON.stringify(req),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.success) {
				alert("로그인에 성공하였습니다.");
			} else {
				alert("로그인에 실패하였습니다. 아이디와 비밀번호를 확인해주세요.");
				pw.value = "";
			}
		})
		.catch((error) => {
			console.error("Error 발생");
		});
} else {
	alert("아이디와 비밀번호를 입력해주세요.");
}