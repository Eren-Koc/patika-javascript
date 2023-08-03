let Person = prompt("Ad Soyad Giriniz");
let secondText = document.getElementById("second");
let muniteText = document.getElementById("munite");
let hourText = document.getElementById("hour");
let day = document.getElementById("day-name");
const days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


window.onload = () =>{

   
  if(Person!=null){
   document.getElementById("person").innerHTML=Person;
  }
setInterval(Clock, 1000);

};

function Clock(){
var currentdate = new Date();  
secondText.innerHTML=ZeroControl(currentdate.getSeconds());
muniteText.innerHTML=ZeroControl(currentdate.getMinutes());
hourText.innerHTML=ZeroControl(currentdate.getHours());
day.innerHTML=days[currentdate.getDay()];
}

function ZeroControl(time){

    let result="";
    if(time>=10){
result=time;
    }
    else{
        result="0"+time;
    }
    return result;
}