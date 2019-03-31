function isNumber(evt){
  var ch = String.fromCharCode(evt.which);

  if (!(/[0-9]/.test(ch))){
    evt.preventDefault();
  }
}

function check(){
  var name = document.getElementById("name");
  var num = document.getElementById("num");
  var date = document.getElementById("datepicker");
  var phone = document.getElementById("phone");
  var address = document.getElementById("address")

  if(name.value==""){
    name.style.cssText = "border: 2px solid red;"
  }else{
    name.style.cssText = "border: 2px solid #aaa;"
  }

  if(num.value==""){
    num.style.cssText = "border: 2px solid red;"
  }else{
    num.style.cssText = "border: 2px solid #aaa;"
  }
  if(date.value==""){
    date.style.cssText= "border:1px solid; border-color:red;font-size: 16px; width: 100%;height: 50%;margin-top: 0.5rem"
  }else{
    date.style.cssText= "border:1px solid; border-color:#aaa;;font-size: 16px; width: 100%;height: 50%;margin-top: 0.5rem"
  }
  if(phone.value==""){
    phone.style.cssText = "border: 2px solid red;"
  }else{
    phone.style.cssText = "border: 2px solid #aaa;"
  }
  if(address.value==""){
    address.style.cssText = "border: 2px solid red;"
  }else{
    address.style.cssText = "border: 2px solid #aaa;"
  }

  if(!name.value=="" && !num.value=="" && !date.value=="" && !phone.value==""&& !address.value==""){
    alert("เพิ่มข้อมูลเสร็จสิ้น")
  }else{
    alert("กรุณากรอกข้อมูลให้ครบถ้วน")
  }
}

function check2(){
  var name = document.getElementById("name");
  var num = document.getElementById("num");
  var phone = document.getElementById("phone");
  var address = document.getElementById("address")
  if(name.value==""){
    name.style.cssText = "border: 2px solid red;"
  }else{
    name.style.cssText = "border: 2px solid #aaa;"
  }

  if(num.value==""){
    num.style.cssText = "border: 2px solid red;"
  }else{
    num.style.cssText = "border: 2px solid #aaa;"
  }
  if(phone.value==""){
    phone.style.cssText = "border: 2px solid red;"
  }else{
    phone.style.cssText = "border: 2px solid #aaa;"
  }
  if(address.value==""){
    address.style.cssText = "border: 2px solid red;"
  }else{
    address.style.cssText = "border: 2px solid #aaa;"
  }

  if(!name.value=="" && !num.value=="" && !phone.value==""&& !address.value==""){
    alert("เพิ่มข้อมูลเสร็จสิ้น")
  }else{
    alert("กรุณากรอกข้อมูลให้ครบถ้วน")
  }
}