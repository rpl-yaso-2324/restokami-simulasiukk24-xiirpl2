const user = {
	username: "1",
	password: "1",
};
function login() {
    event.preventDefault()
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	if (username.value === "" || password.value === "") {
		window.alert("Username dan Password harus diisi!.");
	} else if (
		username.value != user.username ||
		password.value != user.password
	) {
		window.alert("Username dan Password tidak sesuai!.");
	} else {
		location.href = "menu.html";
	}
	username.value = "";
	password.value = "";
}