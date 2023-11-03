const akun = {
  username: "adit",
  password: "ads",
};

const login = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username == akun.username && password == akun.password) {
    alert("Login Success");
    window.open("menu.html", "_blank");
  } else {
    alert("Username atau Password salah!");
  }
};
