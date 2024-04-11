let lat = -43.595136;
let long = 170.142103;
let zoom = 13;

let map = L.map('map').setView([lat, long], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([-43.595136, 170.142103]).addTo(map);
marker.bindPopup("<strong>Hello world!</strong><br>I am a popup.").openPopup();

let circle = L.circle([-43.585754, 170.179254], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

console.log(`
    <h3>Test für "ABC"</h3>
    another text
`);