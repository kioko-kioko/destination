var mymap = L.map('map').setView([-1.22559, 38.18943], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-1.22559, 38.18943]).addTo(mymap);
marker.bindPopup("<b>KIOKO ONCE SAYED HERE!!!</b><br>THE ANALYST.").openPopup();