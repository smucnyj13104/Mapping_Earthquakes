// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([37.5, -122.5], 10);
var map = L.map('mapid').setView([30, 30], 2);

//We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
//The mapid will reference the id tag in our <div> element on the index.html file.
//The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) 
//and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

// Create the map object with a center and zoom level (alternative to above)
//let map = L.map("mapid", {
  //  center: [
    //  40.7, -94.5
    //],
    //zoom: 4/
//});

// We create the tile layer that will be the background of our map (from leaflet quickstart guide)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11', //mapbox/outdoors-v11 mapbox/light-v10 mapbox/dark-v10 mapbox/satellite-v9  mapbox/satellite-streets-v11
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
map.remove();
map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/smucnyj13104/Mapping_Earthquakes/main/torontoRoutes.json";
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/smucnyj13104/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Create a style for the lines.
let myStyle = {
  color: "blue",
  weight: 1,
  fillColor: "yellow"
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  style: myStyle,
  onEachFeature: function(feature,layer) {
    layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
  }
}).addTo(map);

});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

//let airportData = "https://raw.githubusercontent.com/smucnyj13104/Mapping_Earthquakes/main/majorAirports.json";
// We create the tile layer that will be the background of our map.
//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//let marker = L.circle([34.0522, -118.2437], {
  //radius: 100
//}).addTo(map);




/*
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  onEachFeature: function(feature,layer) {
    layer.bindPopup("<h3> Airport Code: " + feature.properties.faa + "</h3> <hr><h3> Airport: " + feature.properties.name + "</h3>");
  }
}).addTo(map);

});
*/


/*
// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);;
 });
*/
/*
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};*/

/*
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(feature);
    layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
  }
}).addTo(map);*/

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  //pointToLayer: function(feature, layer) {
    //console.log(feature);
    //layer.bindPopup();
  //}
//}).addTo(map);

// Loop through the cities array and create one marker for each city.
//cities.forEach(function(city) {
  //console.log(city)
  //L.circleMarker(city.location, {
   // radius: city.population/100000
  //})
  //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  //.addTo(map);;
 //});

//let marker = L.circleMarker([34.0522, -118.2437], {
  //radius: 300,
  //color: "black",
  //fillColor: '#ffffa1'
//}).addTo(map);

/*
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  //  maxZoom: 18,
    //accessToken: API_KEY
//})*/