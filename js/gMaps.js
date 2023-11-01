// [START maps_map_simple]
let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");  
  var latitud = 42.62574466842717;
  var longitud = -7.738738551776896;
  $('.ampliar-mapa').attr('href', 'https://www.google.com/maps/search/?api=1&query=' + latitud + ',' + longitud);

  map = new Map(document.getElementById("googleMap"), {
    center: { lat: latitud, lng: longitud },
    zoom: 14,
  });

  var myLatLng = {
    lat: latitud,
    lng: longitud
  };

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}
initMap();
