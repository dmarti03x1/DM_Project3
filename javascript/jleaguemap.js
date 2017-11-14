function initMap() {

 var myLatLng = {lat: 41.867959, lng: -87.614014};
	
	var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: myLatLng
  });
  }