const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '609ea3c388msh58f20beda055892p14778ejsnda5972978d5d',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

const getairquality = (city)=>{
	cityName2.innerHTML = city

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
	
	     console.log(response)

			 concentration.innerHTML= response.concentration
			 aqi.innerHTML=response.aqi
			 
			 concentration1.innerHTML= response.concentration
			 aqi1.innerHTML=response.aqi
			 
			 concentration2.innerHTML= response.concentration
			 aqi2.innerHTML=response.aqi
			 
			 concentration3.innerHTML= response.concentration
			 aqi3.innerHTML=response.aqi
			 
			 concentration4.innerHTML= response.concentration
			 aqi4.innerHTML=response.aqi
			 
			 concentration5.innerHTML= response.concentration
			 aqi5.innerHTML=response.aqi
		
		})


	.catch(err => console.error(err));
}

	submit.addEventListener("click", (e)=>{
		e.preventDefault()
	 getairquality(city.value)
	})
	  getairquality("Delhi")