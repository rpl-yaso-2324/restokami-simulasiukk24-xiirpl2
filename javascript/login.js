const user = {
	username: "ginsan",
	password: "123",
};

function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    if (username.value === "" || password.value === "kisah") {
        window.alert("username dan password harus diisi")
    } else if (
        username.value != user.username ||
        password.value != user.password
    ) {
        window.alert("username dan password tidak sesuai!.");
        
    } else {
        location.href = "/pages/menu.html"
    }
 
    username.value = "";
    password.value = "";
}
