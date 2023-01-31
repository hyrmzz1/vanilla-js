function onGeoSuccess(pos){
    const lat = pos.coords.latitude;    //위도
    const lng = pos.coords.longitude;   //경도
    console.log(`latitude : ${lat}, longitude : ${lng}`);
}

function onGeoError(){
    alert("Can't find you👁‍🗨 Please allow permission to check your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);