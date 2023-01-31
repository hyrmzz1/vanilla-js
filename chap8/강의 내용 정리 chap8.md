# CHAP 8. WEATHER
html에 weathers.js import 하는건 기본!
## 8.0 Geolocation
**Geolocation란 유무선망에 연결된 기기의 지리적 위치 정보.**<br>
사용자(기기)의 위치의 위도와 경도를 추출해보자.<br>
<br>
`geolocation.getCurrentPosition()` 함수는 장치의 현재 위치 가져오게 함.
```
navigator.geolocation.getCurrentPosition(success, error, options);
```
success와 error는 콜백 함수로, error는 선택적으로 사용 가능한 함수.<br>
따라서 `navigator.geolocation.getCurrentPosition(success);` 로만 작성할 수도 있다.<br>
option은 선택적으로 사용하는 객체로, `maximumAge, timeout, enableHighAccuracy` 매개변수가 들어갈 수 있음.<br><br>

```
function onGeoSuccess(pos){
    const crd = pos.coords;             // coords 만 변수화 할 수도 있고,
    const lon = pos.coords.logitude;    // coords.logitude까지 변수화 할 수도 있음.

    console.log(`Your Latitude : ${crd.latitude}`);
    console.log("Your Longitude : ", lon);   //위 방법(백틱 이용)과 같음.
}

function onGeoError(){
    alert("Can't find your location.🧐 No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
```
`GeolocationPosition.coords`에는 위도, 경도, 고도 및 개체의 속도의 반환값이 포함되어 있음.<br>

## 8.1 Weather API
**API란 다른 서버와 이야기할 수 있도록, 즉 프로그램들이 서로 상호작용하도록 도와주는 매개체.**<br>
위에서 얻은 위도와 경도를 이용해 이 위치가 어느 장소인지 알아내보자.<br><br>

우선 https://openweathermap.org 에서 계정을 만든 후 API 메뉴로 들어가 <u>Current Weather Data</u> API doc 눌러 해당 API에 대한 문서 열람할 것.<br>
**API calls**에 나와있는 url을 사용하면 된다.
```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// {API key}에는 openweathermap 사이트 내 나의 profile에서 My API keys 복붙.
// {lat}과 {lon}에는 lec #8.0에서 얻은 위도(latitude)와 경도(logitude)를 각각 넣기.
// 코드 내에서 변수를 통해 넣을 수도 있다.
```
<br>
JS에서 url 불러오려면 `fetch()` 사용.<br>
이를 통해 url에 갈 필요없이 검사-network-preview 에서 확인 가능.<br>
해당 url에 나오는 정보들을 이용해보자.

```
function onGeoSuccess(pos){
    const API_KEY = 내 api keys 복붙;
    const crd = pos.coords;             // coords 만 변수화 할 수도 있고,
    const lon = pos.coords.logitude;    // coords.logitude까지 변수화 할 수도 있음.
    const lat = crd.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // 섭씨온도의 경우 미터법 단위 사용해야 하므로 매개변수 추가

    fetch(url)
        .then(response => response.json())  // json은 검사-network-preview 에서 확인 가능한 모든 정보.
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.main.temp}℃, ${data.weather[0].main}`;
        })
    // fetch()를 통해 url을 얻었으니 이걸 통해 무엇을 할지 then을 통해 JS에 알린다.
    // fetch()는 promise이기 때문에 당장 뭔가 일어나지 않고, 발생까지의 시간이 길어질 수 있음. 따라서 then 사용.
    // Promise란 비동기 함수 호출 또는 비동기 연산이 완료되었을 때, 이후에 처리할 함수나 에러를 처리하기 위한 함수를 설정하는 모듈
}
```

```
index.html

<div id="weather">
    <span></span>
    <span></span>
</div>
```