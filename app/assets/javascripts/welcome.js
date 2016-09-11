window.onload = function() {

  var mapLayer = MQ.mapLayer(),
      map;

  map = L.map('map', {
      layers: mapLayer,
      center: [40.731701, -73.993411],
      zoom: 12
  });
};