var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var donutShop = JSON.parse(this.responseText);
    } else {
        return false
    }
    L.geoJSON(donutShop, {
        onEachFeature: onEachFeature
    }).addTo(map);
};


var map = L.map('mapid').setView([37.910, -119.0117], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9yeWhyIiwiYSI6ImNrb2pkbnA2dzA1ZDMydnJ2ejJmNmVqejEifQ.Mz78X_orR5CwkLWGgFgDng', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent
        && typeof (feature.geometry.coordinates[0] == "number")) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

xmlhttp.open("GET",
    url = "https://raw.githubusercontent.com/roryhr/code/master/website_code/content/images/donuts/map_data.json",
    async = true);
xmlhttp.send();
