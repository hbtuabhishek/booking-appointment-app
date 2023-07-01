function test(){
    var uid=document.getElementById("name").value;
    var uemail=document.getElementById("email").value;

    var user=localStorage.setItem("uid",uid);
    var email=localStorage.setItem("uemail",uemail);
}