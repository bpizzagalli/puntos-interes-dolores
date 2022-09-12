var map = L.map('map').setView([-36.31130914450173, -57.67970862580451], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 28,
    attribution: '© OpenStreetMap'
}).addTo(map);


var marker = L.marker([-36.31130914450173, -57.67970862580451]).addTo(map);
marker.bindPopup("<b>Sanatorio de Dolores</b>").openPopup();

var marker= L.marker([-36.31342724322603, -57.675331260677424]).addTo(map);
marker.bindPopup("<b>Sanatorio Regional</b>").openPopup();


var marker = L.marker([-36.311413256963085, -57.652486907993755]).addTo(map);
marker.bindPopup("<b>Parque Termal Dolores</b>").openPopup();

var marker= L.marker([-36.318306, -57.685518]).addTo(map);
marker.bindPopup("<b>Plaza Moreno</b>").openPopup();

var marker=L.marker([-36.321453, -57.694402]).addTo(map);
marker.bindPopup("<b>Lago Libres del Sur</b>").openPopup();

var marker=L.marker([-36.325948, -57.698693]).addTo(map);
marker.bindPopup("<b>Autodromo de Dolores</b>").openPopup();

var marker=L.marker([-36.329578, -57.680009]).addTo(map);
marker.bindPopup("<b>Plaza Soldado de Malvinas</b>").openPopup();

var marker= L.marker([-36.323562, -57.693157]).addTo(map);
marker.bindPopup("<b>Cementerio de Dolores</b>").openPopup();

var marker= L.marker([-36.323225, -57.674124]).addTo(map);
marker.bindPopup("<b>Estadio Delfor del Valle</b>").openPopup();

var marker=L.marker([-36.31534645034187, -57.67557802390798]).addTo(map);
marker.bindPopup("<b>Plaza Castelli</b><br>Esta es la principal plaza de Dolores.</br>").openPopup();


document.getElementById('select-punto').addEventListener('change', function(e) {
    
       if(e.target.value == '-36.31519985325913, -57.67656241608313') {
            map.setView([-36.31519985325913, -57.67656241608313], 14);
            
        }
        else{
            let coords= e.target.value.split(',');
            map.flyTo(coords, 18);
        }
});








