
var city_name = document.querySelector('#city')

var button = document.querySelector("button")
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name.value+'&appid=b7436534390dfb7da651064ac03d7a45&units=metric')
    .then((response)=>{
        return response.json();
    }).then((result)=>{
        console.log(result)
        var main_div = document.createElement('div');
        main_div.classList.add('container-fluid', 'mt-5', 'text-center')

        var row1 = document.createElement('div')
        row1.classList.add('row')

        var col1 = document.createElement('div')
        row1.classList.add('col-md-4', 'offset-md-4', 'text-center', 'rounded')


        var temp = document.createElement('p')
        temp.innerHTML = "The temperature of "+city_name.value+" is "+result.main.temp+"&#8451 with "+result.weather[0].description;

        var img = document.createElement('img')
        img.setAttribute('src', 'http://openweathermap.org/img/wn/'+result.weather[0].icon+'@2x.png')


        col1.append(temp, img)
        row1.appendChild(col1)
        main_div.append(row1)
        document.body.append(main_div)
    
    
    })
        
})




    
  