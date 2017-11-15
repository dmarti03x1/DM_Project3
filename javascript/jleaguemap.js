function initMap() {

 var myLatLng = {lat: 41.867959, lng: -87.614014};
 var myLatLng2 = {lat: 41.835337, lng: -87.628208};
 var myLatLng3 = {lat: 41.867619, lng: -87.631044};
	
	var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: myLatLng
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'aqualad.PNG'
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    icon: 'thebats.PNG'
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    icon: 'amazonia.PNG'
  });
  }