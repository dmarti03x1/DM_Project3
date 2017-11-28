function initMap() {

 var myLatLng = {lat: 41.867959, lng: -87.614014};
 var myLatLng2 = {lat: 41.835337, lng: -87.628208};
 var myLatLng3 = {lat: 41.867619, lng: -87.631044};
 var myLatLng4 = {lat: 41.835063, lng: -87.663884};
 var myLatLng5 = {lat: 41.859065, lng: -87.660573};
 var myLatLng6 = {lat: 41.872777, lng: -87.675304};
 
	
	var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: myLatLng
	
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'aqualad.png'
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    icon: 'thebats.png'
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    icon: 'amazonia.png'
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    icon: 'adobe.png'
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng5,
    map: map,
    icon: 'robet.png'
  });
	
	var marker = new google.maps.Marker({
    position: myLatLng6,
    map: map,
    icon: 'soups.png'
  });
	
	var flightPlanCoordinates = [
    {lat: 41.867959, lng: -87.614014}, 
    {lat: 41.835337, lng: -87.628208}
  ];
	var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
	flightPath.setMap(map);
	
  }