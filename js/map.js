var drawMap = function(loc, zoom) {

  // Create map and set view
  var map = L.map('map').setView(loc, zoom);

  var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    // Add the layer to your map
  layer.addTo(map);
  // Execute your function to get data
  getData(map);
}

var getData = function(map) {

	var data;
	$.ajax({
	    url:"../data.json",
	    type: "get",
	    success:function(data) {
    		customBuild(data, map);
	    } ,
     dataType:"json"
	}) 
}

var customBuild = function(data, map) {
  var location = [];
	
  data.map(function(d) {
    var name = d["Name"];
    var descr = d["descr"];

    var mark = new L.circleMarker([d.latitude, d.longitude], {
      radius: 5,
      color: "green"
    });
    mark.bindPopup(descr);
    location.push(mark);
  });

  var locMap = L.layerGroup(location);
  locMap.addTo(map);
}