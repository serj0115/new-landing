google.maps.event.addDomListener(window, 'load', init);

    function init() {

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(55.7718464,37.6658473), 
        styles: [
          {
            "featureType": "administrative"  },{
          }
        ]
    };
        var image = new google.maps.MarkerImage('images/pin_onmap_icon.svg',
            // This marker is 20 pixels wide by 32 pixels tall.
            new google.maps.Size(18, 31),
            // The origin for this image is 0,0.
            new google.maps.Point(0,0),
            // The anchor for this image is the base of the flagpole at 0,32.
            new google.maps.Point(0,0)
        );
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.7698187,37.6650238),
            map: map,
            icon: image
        });
    }