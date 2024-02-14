"use strict"

var user_input = document.querySelector("#search");
var search = document.querySelector("#btn1");
var temp = document.querySelector(".temp");
var city_name = document.querySelector(".city");
var humidity = document.querySelector(".humidity");
var para1 = document.querySelector(".para1");
var wind = document.querySelector(".wind");
var para2 = document.querySelector(".para2");
var main_container1=document.querySelector(".main_container")



search.addEventListener("click",(e)=>{
    e.preventDefault()
   
    let apiKey = "562572091bf457f7a97f0141fc76dd42";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    
    fetch(`${apiUrl}&appid=${apiKey}&q=${user_input.value}`)
    .then(res=>res.json())
    .then(weather_data=>{

     
        let temp1=weather_data.main.temp;
        let name1=weather_data.name;
        let humidity1=weather_data.main.humidity;
        let wind1=weather_data.wind.speed;
        console.log(name1,humidity1,wind1,temp1);


        city_name.innerHTML=name1
        temp.innerHTML=temp1+"℃";
        humidity.innerHTML=humidity1+"%"
        para1.style.display="block"
        wind.innerHTML=wind1+"km/h"
        para2.style.display="block"
        backgroundImage(temp1)
        user_input.value=""

    })


})




function backgroundImage(bgtemp){
    {

       if (bgtemp > 26) {
           main_container1.style.backgroundImage = 'url("Bg-1.png")';

       } else if (bgtemp >= 20 && bgtemp <= 25) {
           main_container1.style.backgroundImage = 'url("Bg-2.png")';
       } else {
           main_container1.style.backgroundImage = 'url("Bg-3.png")';
       }
   }
}


