 
	function askweather(){
    var weather;
    var api='http://api.openweathermap.org/data/2.5/weather?q=';
   var apikey ='dacbaf5c8f8045e71d4ea1c1247b49fe';

    document.getElementById("city").value;
   window.alert('viki');
	 var fullpath = api+city.value+"&APPID="+apikey ;
	window.location.href=fullpath;
}

//var api_key = 'enter_api_key_here';
//results.loadhtml('http://api.openweathermap.org/data/2.5/weather?q=Montreal&mode=html&appid=' + api_key);
//var api_key = 'enter_api_key_here';
//var weather_data = loadjson('http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&units=imperial&appid=' + api_key);

//results.append("Weather For: " + weather_data.name + '<br/>');
//results.append("Current: " + weather_data.main.temp + '&deg;F<br/>');
//http://api.openweathermap.org/data/2.5/weather?q=london&APPID=dacbaf5c8f8045e71d4ea1c1247b49fe