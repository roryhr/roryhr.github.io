var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var donutShop = JSON.parse(this.responseText);
    } else {
        return false
    }
    L.geoJSON(donutShop, {
        onEachFeature: onEachFeature
    }).addTo(map);
};


var map = L.map('map').setView([40.5092065,-60.4475978], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.light'
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent
        && typeof(feature.geometry.coordinates[0] == "number")) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

xmlhttp.open("GET",
    url="https://raw.githubusercontent.com/roryhr/code/master/donut_reviews/output/map_data.json",
    async=true);
xmlhttp.send();
