function check(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");

    if (user.value==""){
        user.style.cssText= "border: 2px solid red; width: 60%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"
    }else{
        user.style.cssText= "border: 2px solid #aaa; width: 60%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"
    }

    if (pass.value==""){
        pass.style.cssText= "border: 2px solid red; width: 60%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"
    }else{
        pass.style.cssText= "border: 2px solid #aaa; width: 60%; padding: 12px 20px; margin: 8px 0; box-sizing: border-box;"
    }

    if (user.value=="admin" && pass.value=="admin"){
        document.location.href = "./Main.html";
    }else {
        alert("กรุณาตรวจสอบข้อมูลให้ถูกต้อง");
    }


    



}