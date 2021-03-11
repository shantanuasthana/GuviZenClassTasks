
var city_name = document.querySelector('#city')
var weather = document.querySelector("#weather")
var icon = document.querySelector("#icon")
var place = document.querySelector("#place")
var card = document.querySelector('.card')
var button = document.querySelector("button")

document.querySelector('#city').value = "";

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name.value+'&appid=b7436534390dfb7da651064ac03d7a45&units=metric')
    .then((response)=>{
        return response.json();
    }).then((result)=>{
        if(city_name!=="")
        {
            card.classList.remove("d-none");
        }
        
        icon.setAttribute('src', 'http://openweathermap.org/img/wn/'+result.weather[0].icon+'@2x.png')

        place.innerHTML = city_name.value

        weather.innerHTML = "The temperature of <strong>"+city_name.value+"</strong> is <strong>"+result.main.temp+"&#8451</strong> with <strong>"+result.weather[0].description+"</strong>"; 
    
    })
        
})




    
  