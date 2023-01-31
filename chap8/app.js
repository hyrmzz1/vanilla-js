function onGeoSuccess(pos){
    const lat = pos.coords.latitude;    //위도
    const lon = pos.coords.longitude;   //경도
    
    const API_kEY = config.apikey;
    //api 자체는 string만 포함됐으므로 대문자로 변수명 지정함
    //API key 노출되지 않도록 파일 따로 만들고 커밋 X
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_kEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const temp = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:nth-child(3)");
            const country = document.querySelector("#weather span:last-child");
            temp.innerText = `${data.main.temp}℃,`;
            weather.innerText = `${data.weather[0].main},`;
            city.innerText = `${data.name},`;
            country.innerText = data.sys.country;
        });
        //API를 통해 추출한 데이터는 temp(기본단위는 켈빈. 섭씨로 변환함.), weather main(맑음/흐림/...), sys country(국가명), name(도시명)
}

function onGeoError(){
    alert("Can't find you👁‍🗨 Please allow permission to check your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);