<template>
  <div>
    <div><select id="locationSelect" style="width:100%;visibility:hidden"></select></div>
    <div id="map" style="width: 100%; height: 80%"></div>
  </div>
</template>

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_VoNXdL03NgSGkyvvigId9fSIIikcZII&callback=initMap"></script>

<script>
function searchLocations() {
  var address = document.getElementById("addressInput").value;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({address: address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      searchLocationsNear(results[0].geometry.location);
    } else {
      alert(address + ' not found');
    }
  });
}

function downloadUrl(url,callback) {
 var request = window.ActiveXObject ?
     new ActiveXObject('Microsoft.XMLHTTP') :
     new XMLHttpRequest;

 request.onreadystatechange = function() {
   if (request.readyState == 4) {
     request.onreadystatechange = doNothing;
     callback(request.responseText, request.status);
   }
 };

 request.open('GET', url, true);
 request.send(null);
}

function searchLocationsNear(center) {
  clearLocations();

  var radius = document.getElementById('radiusSelect').value;
  var searchUrl = 'storelocator.php?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius;
  downloadUrl(searchUrl, function(data) {
  var xml = parseXml(data);
  var markerNodes = xml.documentElement.getElementsByTagName("marker");
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < markerNodes.length; i++) {
    var id = markerNodes[i].getAttribute("id");
    var name = markerNodes[i].getAttribute("name");
    var name = markerNodes[i].getAttribute("name");
    var address = markerNodes[i].getAttribute("address");
    var distance = parseFloat(markerNodes[i].getAttribute("distance"));
    var latlng = new google.maps.LatLng(
        parseFloat(markerNodes[i].getAttribute("lat")),
        parseFloat(markerNodes[i].getAttribute("lng")));

    createOption(name, distance, i);
    createMarker(latlng, name, address);
    bounds.extend(latlng);
  }
  map.fitBounds(bounds);
 });
}

function createMarker(latlng, name, address) {
  var html = "<b>" + name + "</b> <br/>" + address;
  var marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}

function createOption(name, distance, num) {
  var option = document.createElement("option");
  option.value = num;
  option.innerHTML = name;
  locationSelect.appendChild(option);
}

function clearLocations() {
  infoWindow.close();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;

  locationSelect.innerHTML = "";
  var option = document.createElement("option");
  option.value = "none";
  option.innerHTML = "See all results:";
  locationSelect.appendChild(option);
  locationSelect.style.visibility = "visible";
}
</script>
