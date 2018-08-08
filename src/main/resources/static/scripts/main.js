var map;

function initMap() {
    $.ajax({
        url: 'http://localhost:8080/shops/all',
        dataType: 'application/json',
        complete: function (data) {
            var features = JSON.parse(data.responseText);
            features.forEach(function (feature) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(feature.location.lat, feature.location.lng),
                    map: map
                });
                marker.setMap(map);
                marker.addListener('click', function () {
                    getInfoWindow(feature).open(map, this);
                });
            });
        }
    });

    var myLatlng = new google.maps.LatLng(53.417, 14.544);
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var geocoder = new google.maps.Geocoder();
    function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });

    function getInfoWindow(feature) {
        var infowindow = new google.maps.InfoWindow({
            content: getContent(feature),
        });
        return infowindow;
    }
    function getContent(feature) {
        return '<div class="info-window container">' +
            '<div class="container">' +
            '<h4 class="col-12 mt-2">' + feature.shopName + '</h4>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-4">' +
            '<h5 class="text-center">' + "Adres:" + '</h5>' +
            '<ul>' +
            '<li>' + feature.shopName + '</li>' +
            '<li>' + feature.location.street + " " + feature.location.houseNumber + '</li>' +
            '<li>' + feature.location.city + '</li>' +
            '<li>' + feature.location.postCode + '</li>' +
            '</ul>' +
            '<h5 class="text-center">' + "Dostawa:" + '</h5>' +
            '<p class="text-center">' + feature.delivery.dayDelivery + '</p>' +
            '</div>' +
            '<div class="col-4">' +
            '<table class="table table-sm table-striped">' +
            '<thead>' +
            '<tr>' +
            '<th>' + " " + '</th>' +
            '<th class="table-success">' + "Otwarcie" + '</th>' +
            '<th class="table-danger">' + "Zamknięcie" + '</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<th>' + "Poniedziałek" + '</th>' +
            '<td>' + feature.open.monday + '</td>' +
            '<td>' + feature.close.monday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Wtorek" + '</th>' +
            '<td>' + feature.open.tuesday + '</td>' +
            '<td>' + feature.close.tuesday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Środa" + '</th>' +
            '<td>' + feature.open.wednesday + '</td>' +
            '<td>' + feature.close.wednesday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Czwartek" + '</th>' +
            '<td>' + feature.open.thursday + '</td>' +
            '<td>' + feature.close.thursday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Piątek" + '</th>' +
            '<td>' + feature.open.friday + '</td>' +
            '<td>' + feature.close.friday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Sobota" + '</th>' +
            '<td>' + feature.open.saturday + '</td>' +
            '<td>' + feature.close.saturday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Niedziela" + '</th>' +
            '<td>' + feature.open.sunday + '</td>' +
            '<td>' + feature.close.sunday + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '<div class="col-3">' +
            '<table class="table table-sm table-striped">' +
            '<thead>' +
            '<tr>' +
            '<th>' + " " + '</th>' +
            '<th class="table-primary">' + "Cena" + '</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<th>' + "Poniedziałek" + '</th>' +
            '<td>' + feature.price.monday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Wtorek" + '</th>' +
            '<td>' + feature.price.tuesday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Środa" + '</th>' +
            '<td>' + feature.price.wednesday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Czwartek" + '</th>' +
            '<td>' + feature.price.thursday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Piątek" + '</th>' +
            '<td>' + feature.price.friday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Sobota" + '</th>' +
            '<td>' + feature.price.saturday + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th>' + "Niedziela" + '</th>' +
            '<td>' + feature.price.sunday + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    var styledMapType = new google.maps.StyledMapType(
        [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
            }
        ],
        {name: 'Styled Map'});
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}


/*
JSON

    "id":1,
    "shopName":"Tania Ada. Odzież używana",
    "location":{
        "id":1,
        "lat":54.187482,
        "lng":16.183131,
        "city":"Koszalin",
        "postCode":"75-801",
        "street":"plac Gwiaździsty",
        "houseNumber":"3"},
    "price":{
        "id":1,
        "monday":50.0,
        "tuesday":35.0,
        "wednesday":40.0,
        "thursday":45.0,
        "friday":30.0,
        "saturday":20.0,
        "sunday":10.0},
    "open":{
        "id":1,
        "monday":"09.00",
        "tuesday":"09.00",
        "wednesday":"09.00",
        "thursday":"09.00",
        "friday":"09.00",
        "saturday":"10.00",
        "sunday":"11.00"},
    "close":{"id":1,
        "monday":"17.00",
        "tuesday":"17.00",
        "wednesday":"17.00",
        "thursday":"17.00",
        "friday":"17.00",
        "saturday":"15.00",
        "sunday":"14.00"},
    "delivery":{"id":1,
        "dayDelivery":"Poniedziałek"
 */
