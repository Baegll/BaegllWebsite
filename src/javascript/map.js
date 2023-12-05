var map = L.map('map').setView([0, 0], 1); // Set the initial center and zoom level

var imageUrl = 'img/Logo.png';
var imageBounds = [[-90, -180], [90, 180]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

var customIcon1 = L.icon({
    iconUrl: 'img/LogoTransparent.png',
    iconSize: [48, 48],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
});

var customIcon2 = L.icon({
    iconUrl: 'img/LogoTransparent.png',
    iconSize: [48, 48],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
});

var marker1 = L.marker([51.505, -0.09], { icon: customIcon1 }).addTo(map).bindPopup('The Hilt');
var marker2 = L.marker([40.7128, -74.0060], { icon: customIcon2 }).addTo(map).bindPopup('Inky Darkness');
