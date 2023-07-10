function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 21.052943, lng: 105.777938};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ha Noi, Viet Nam' // Title Location
    });
}