window.onload = function() {
    var mapLayer = MQ.mapLayer(), map;

    map = L.map('map', {
        layers: mapLayer,
        center: [ 37.6213129, -122.3811441 ],
        zoom:15
    });
}