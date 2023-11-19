const apiKey="a847a7a6992852e3c97dd4d2f8ce17a2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city)
{
    
    const res=await fetch(apiUrl+"q="+city+"&appid="+apiKey+"&units=metric");
    let data= await res.json();
    console.log(res);
    
    document.querySelector(".city").innerHTML=city;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
    
   
        if(data.weather[0].main=="Clouds")
        {
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear")
        {
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle")
        {
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist")
        {
            weatherIcon.src="images/mist.png";
        }
    

   

   

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    console.log(searchBox.value);
});
