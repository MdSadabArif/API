
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '609ea3c388msh58f20beda055892p14778ejsnda5972978d5d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	
	}
};
const getweather = (city)=>{
	cityName.innerHTML = city
	cityName1.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
	
	     console.log(response)

		 cloud_pct.innerHTML = response.cloud_pct   
		 cloud_pct1.innerHTML = response.cloud_pct                                                                                 
		 temp.innerHTML = response.temp
		 temp2.innerHTML = response.temp
		 temp3.innerHTML = response.temp
		 feels_like.innerHTML = response.feels_like
		 feels_like1.innerHTML = response.feels_like
		 humidity.innerHTML = response.humidity      
		 humidity1.innerHTML = response.humidity                                                     
		 min_temp.innerHTML = response.min_temp
		 min_temp1.innerHTML = response.min_temp
		 max_temp.innerHTML = response.max_temp
		 max_temp1.innerHTML = response.max_temp
		 wind_speed.innerHTML = response.wind_speed
		 wind_speed2.innerHTML = response.wind_speed
		 wind_speed3.innerHTML = response.wind_speed
		 wind_degrees.innerHTML = response.wind_degrees
		 wind_degrees1.innerHTML = response.wind_degrees
		 sunrise.innerHTML = response.sunrise
		 sunrise1.innerHTML = response.sunrise
		 sunset.innerHTML = response.sunset
		 sunset1.innerHTML = response.sunset
	})

    .catch (err => console.error(err));
}

 submit.addEventListener("click", (e)=>{
	e.preventDefault()
 getweather(city.value)
 })



 submit1.addEventListener("click1", (e1)=>{
	e.preventDefault()
 getweather(city.value1)
 })




 submit2.addEventListener("click2", (e2)=>{
	e.preventDefault()
 getweather(city.value2)
 })



 submit3.addEventListener("click3", (e3)=>{
	e.preventDefault()
 getweather(city.value3)
 })



 submit4.addEventListener("click4", (e4)=>{
	e.preventDefault()
 getweather(city.value4)
 })



  getweather("Delhi")
 
    


 
 