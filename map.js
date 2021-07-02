"use strict";

function initMap() {
    var mapOptions = {
        zoom: 13,
        center: { lat: 37.781190, lng: -122.442284 }
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //draw a marker icon
    // const svgMarker = {
    //     path:
    //         "M10.08,29.35C1.58,17,0,15.76,0,11.23a11.24,11.24,0,0,1,22.47,0c0,4.53-1.58,5.8-10.08,18.12a1.4,1.4,0,0,1-2.31,0Zm1.15-13.44a4.68,4.68,0,1,0-4.68-4.68A4.67,4.67,0,0,0,11.23,15.91Z",
    //     fillColor: "#8da89f",
    //     fillOpacity: 0.6,
    //     strokeWeight: 0,
    //     rotation: 0,
    //     size: new google.maps.Size(24, 33),
    //     origin: new google.maps.Point(0, 0),
    //     anchor: new google.maps.Point(12, 33),
    //     scale: 2
    // };

    function draw_some_markers( coords, coord_name ) {
        new google.maps.Marker({
            position: coords,
            map: map,
            icon: svgMarker,
            title: coord_name
        });
    }

    //add markers to the map
    draw_some_markers( finance_ltlng, finance_title );
    draw_some_markers( lower_ltlng, lower_title );
    draw_some_markers( outer_ltlng, outer_title );
}

var map,
    finance_ltlng = { lat: 37.791012, lng: -122.402100 },
    finance_title = 'Vigor XF in Financial District',
    lower_ltlng = { lat: 37.776272, lng: -122.484917 },
    lower_title = 'Vigor XF in Lower Haight',
    outer_ltlng = { lat: 37.775848, lng: -122.494110 },
    outer_title = 'Vigor XF in Outer Richmond';
