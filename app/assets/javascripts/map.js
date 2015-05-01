// some variables we use in the whole js

var initialLocation;
// var browserSupportFlag =  new Boolean();
var map;
var myMarker;
var position;
var directionsDisplay;
var directionsService 

// used just below
var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = Math.round(R * c);
  return d; // returns the distance in meter
};

//takes the number of times the window height you wanna scroll down as an argument! 
function scrollTop(n){
  var windowHeight = $(window).height()
  $("html, body").animate({ scrollTop: n * windowHeight });
}

function scrollToMap(){
  scrollTop(1);
}

function myLocation(position){
  initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  map.setCenter(initialLocation);
 
  myMarker = new google.maps.Marker({
      position: initialLocation,
      map: map,
      title:"This is you!!!"
  });
  // console.log(initialLocation)
}

//request nearby stuff church or nightclub
function requestNearby(){
  scrollTop(2)
  var results = ''
  $('.results').text('')
  var type = $(this)[0].id
  
  var request = {
    location: initialLocation,
    types: [type],
    rankBy: google.maps.places.RankBy.DISTANCE,
    OpenNow: true
  }
  
  //nearby library
  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, function(services){
    // console.log(services);
    if (type === "night_club"){
      results = '<h1>Places where you can get hammered right now</h1>'
    } 
    else if (type === "place_of_worship"){
      results = '<h1>Places where you can get insta-forgiven right now</h1>'
    }
    $.each(services,function(index,service){
      var p1 = {lat:initialLocation.A, lng:initialLocation.F} 
      var p2 = {lat:service.geometry.location.A,lng:service.geometry.location.F} 

      results += '<li class="service" data-distance='+getDistance(p1,p2)+' data-lng="'+service.geometry.location.F+'" data-lat="'+service.geometry.location.A+'"><img src="'+service.icon+'" class="icon"><b>'+service.name+'</b> | distance: '
      results += getDistance(p1,p2)+'m | rating: '
      results += service.rating? service.rating : 'ain\'t none hon' +'</li>'
      
      var thumbnail = service.icon
    });
   
    $('.results').append(results)
  });
}

function displayDirections(distance){
  console.log(event.srcElement.textContent)
  var directions = '<p>This is how you\'re getting there: Walk for '+ distance +' meters. How much did you drink though?</p>'
  $('.directions').prepend(directions)
  $('.directions').css('height', '20%')
  $('#map-canvas').css('top', '120%')
  $('.vodka').css('height', '40px')
  $('.vodka').css('width', '40px')
}

function obtainRoute(){
  scrollToMap()
  var start = new google.maps.LatLng(initialLocation.A, initialLocation.F);
  // var end_lat = $(this).context.dataset.lat
  var end_lat = $(this).data('lat')
  // var end_lng = $(this).context.dataset.lng
  var end_lng = $(this).data('lng')
  var end = new google.maps.LatLng(end_lat, end_lng);
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING
  };
  directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
  var dist = $(this).data('distance')
  displayDirections(dist)
}

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  console.log('initializing...')
  scrollTop(1)
  var mapOptions = {
    // center: { lat: -34.397, lng: 150.644},
    styles: styles,
    zoom: 15,
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try W3C Geolocation (Preferred)
    if(navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
          myLocation(position);
      }, function() {
        handleNoGeolocation(browserSupportFlag);
      });
    }
    // Browser doesn't support Geolocation
    else {
      browserSupportFlag = false;
      handleNoGeolocation(browserSupportFlag);
    }  
  directionsDisplay.setMap(map);
}

$(document).ready(function(){
  scrollTop(0);
  $('#locate-me').on('click', initialize);
  $('.half-div').on('click', requestNearby);
  $('.results').on('click', 'button.viewmap', scrollToMap)
  $('.results').on('click', 'li.service', obtainRoute)
  $('.directions').on('click', 'button.viewresults', function(){
    scrollTop(2);
  });
});

//map dark style
var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]