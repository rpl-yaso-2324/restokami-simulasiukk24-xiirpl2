const user = {
    username : "aryalesmana",
    password : "arya1008"
}


function login(){
    const username =document.getElementById("username")
    const password = document.getElementById("password")
    if(username.value === "" || password.value === ""){
        window.alert("username dan password harus di isi");
    }else if(
        username.value != user.username||
        password.value != user.password
    ){
        window.alert("username dan password tidak sesuai")
    }else{
        location.href= "menu.html"
    }
    username.value = "";
    password.value = "";    

}