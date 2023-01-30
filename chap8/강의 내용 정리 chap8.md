# CHAP 8. WEATHER
html에 weathers.js import 하는건 기본!
## 8.0 Geolocation
**Geolocation란 유무선망에 연결된 기기의 지리적 위치 정보.**<br>
사용자(기기)의 위치의 위도와 경도를 추출하자.<br>
`geolocation.getCurrentPosition()` 함수는 장치의 현재 위치 가져오게 함.
```
navigator.geolocation.getCurrentPosition(success, error, options);
```
success와 error는 콜백 함수로, error는 선택적으로 사용 가능한 함수.<br>
따라서 `navigator.geolocation.getCurrentPosition(success);` 로만 작성할 수도 있다.<br>
option은 선택적으로 사용하는 객체로, `maximumAge, timeout, enableHighAccuracy` 매개변수 들어갈 수 있음.<br>

```
function onGeoSuccess(pos){
    const crd = pos.coords;             // coords 만 변수화 할 수도 있고,
    const lng = pos.coords.logitude;    // coords.logitude까지 변수화 할 수도 있음.

    console.log(`Your Latitude : ${crd.latitude}`);
    console.log("Your Longitude : ", lng);   //위 방법(백틱 이용)과 같음.
}

function onGeoError(){
    alert("Can't find your location.🧐 No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
```
`GeolocationPosition.coords`에는 위도, 경도, 고도 및 개체의 속도의 반환값이 포함되어 있음.