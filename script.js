var cont=document.querySelector('.container');
var weather_part=document.querySelector('.weather-part');
var inp=document.querySelector('input');
var loc=document.querySelector('.bottom');
var tempe=document.querySelector('.temp');
var speed=document.querySelector('.sunset');
//var city=document.querySelector('#search1').value;

var api='ea7b217ffda487139a8055f25392f11b';
var btn=document.querySelector('button')
const setweatherdetails=(data)=>{
    weather_part.innerHTML=data.weather[0].description;
    tempe.innerHTML=Math.round(data.main.temp-273.15)+"°c";
    loc.innerHTML=data.main.humidity + "%";
    speed.innerHTML=data.wind.speed + "km/h";

    let sun_check=data.weather[0].description;
    console.log(sun_check);
    
    if(sun_check=='clear sky'){
        console.log('working')
   //     temp.innerHTML +=`<i class="fa-solid fa-sun"></i>`;
   const temp=document.querySelector('.pictures');
   //temp.innerHTML = "<img src='download.jpg'>";
   temp.classList.add('sunny');
   weather_part.classList.add('text');
   tempe.classList.add('text');
   loc.classList.add('text');
   speed.classList.add('text');
   console.log(temp.innerHTML)
    }

    else if(sun_check=='haze'){
        console.log('working')
   //     temp.innerHTML +=`<i class="fa-solid fa-sun"></i>`;
   const temp=document.querySelector('.pictures');
   temp.innerHTML = "<img src='haze.png'>";
   temp.classList.add('image');

        weather_part.classList.add('text1');
        tempe.classList.add('text1');
        loc.classList.add('text1');
        speed.classList.add('text1');

    }


    else if(sun_check=='scattered clouds' || sun_check=='broken clouds' || sun_check=='few clouds'){
        console.log('working')
   //     temp.innerHTML +=`<i class="fa-solid fa-sun"></i>`;
   const temp=document.querySelector('.pictures');
   //temp.innerHTML = "<img src='SCATTERED.jpg'>";
   temp.classList.add('.CLOUDY');
   weather_part.classList.add('text2');
   loc.classList.add('text2');
   tempe.classList.add('text2');
   speed.classList.add('text2');
   console.log(temp.innerHTML)
    }

    else if(sun_check=='overcast clouds' ){
        console.log('working')
   //     temp.innerHTML +=`<i class="fa-solid fa-sun"></i>`;
   const temp=document.querySelector('.pictures');
   //temp.innerHTML = "<img src='OVERCAST.jpg'>";
   temp.classList.add('BLACKCLOUDY');
   weather_part.classList.add('text3');
   loc.classList.add('text3');
   speed.classList.add('text3');
   tempe.classList.add('text3');
   console.log(temp.innerHTML)
    }
    /*else if(sun_check=='broken clouds'){
        console.log('working')
   //     temp.innerHTML +=`<i class="fa-solid fa-sun"></i>`;
   const temp=document.querySelector('.pictures');
   //temp.innerHTML = "<img src='broken.png'>";
   temp.classList.add('CLOUDY');
   weather_part.classList.add('text4');
   loc.classList.add('text4');
   speed.classList.add('text4');
   tempe.classList.add('text4');
   console.log(temp.innerHTML)
    }*/
}
const url=(api)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${api}`)
    .then(response=>{
        if(!response.ok){
            alert('check spelling of city and try again');
            throw new Error(`Request failed with status ${response.status}`)
        }
        return response.json()
    })
    .then(data=>{
        setweatherdetails(data);
    })
    .catch(error =>console.log(error))
};

btn.addEventListener("click", (e) => {
    if (inp.value == "") {
        alert("Please Enter City Name.");
    } else {
       url(api);
       display();
    // console.log(city)
console.log(inp.value);
    }
})

var main=document.querySelector('.enter');
var greet=document.querySelector('.enter2');

var date=new Date();
function display(){
    main.innerText=date;
    var moon=document.querySelector('.create');
    if(date.getHours()>=5 && date.getHours()<12){
        greet.innerText='GOOD MORNING';
      // greet.style.color='red';
    }
    else if(date.getHours()>=12 && date.getHours()<17){
        greet.innerText='GOOD AFTERNOON';
        //greet.style.color='blue';
    }
    else if(date.getHours()>=17 && date.getHours()<20){
        greet.innerText='GOOD EVENING';
        //greet.style.color='crimson';
    }
    else{
        greet.innerText='GOOD NIGHT';
        console.log(greet.innerText)
        moon.classList.add('moon');
    }

}


