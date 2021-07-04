"use strict";

var map,
    marker,
    markers = [];

function initMap() {
    let mapOptions = {
        zoom: 13,
        center: { lat: 37.781190, lng: -122.442284 }
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    // create an infowindow for later
    var infowindow = new google.maps.InfoWindow();
    
    //draw a marker icon
    var logoMarkerInitial = {
        url: '/wp-content/themes/astra-child/Pin.svg',
        size: new google.maps.Size(100, 100),
        scaledSize: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(50, 90)
    };

    //draw a marker icon for hover
    var logoMarkerHover = {
        url: '/wp-content/themes/astra-child/Selected.svg',
        size: new google.maps.Size(100, 100),
        scaledSize: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(50, 90)
    };
    
    let locations = [
        {
            position: new google.maps.LatLng( 37.7942821,-122.4096712 ),
            title:    'Vigor XF in Financial District',
        },
        {
            position: new google.maps.LatLng( 37.7713125,-122.4308762 ),
            title:    'Vigor XF in Lower Haight',
        },
        {
            position: new google.maps.LatLng( 37.7758565,-122.4966214 ),
            title:    'Vigor XF in Outer Richmond',
        }
    ];
    
    for (let i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: locations[i].position,
            title: locations[i].title,
            icon: logoMarkerInitial,
            map: map
        });
        google.maps.event.addListener( marker,'click', ( function( marker, i ){
            return function() {
                infowindow.setContent( locations[i].title );
                infowindow.open( map, marker);
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon( logoMarkerInitial );
                }
                marker.setIcon( logoMarkerHover );
            };
        })( marker, i));
        markers.push(marker);
    }
}
