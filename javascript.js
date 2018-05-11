// global variables
//AIzaSyCiwCxInV3d_DUB25n92pDjHmXsTSlajYs

var address1 ={
  $t: "1 Bolivar Drive",
  city: "Berkeley",
  state: "CA"
};

var add = address1.$t.split(" ");// splitting address1 object into array to feed to queryUrl

var queryUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + add[0] + "+" + add[1] + "+" + add[2] + ",+" + address1.city + ",+" + address1.state + "&key=" + googleKey;
// "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + googleKey,
$.ajax({
  url: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + googleKey,
  method: "Get"
}).then(function(response){
  console.log(response);
  console.log(response.results[0].geometry.location);
  latLong = response.results.geometry.location;
})// google geocode api(converting address to latitude and longitude) to feed to google maps

function initMap() {
  console.log("initMap: " + latLong);
  var uluru = latLong;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}// google maps required function
var googleKey = "AIzaSyCiwCxInV3d_DUB25n92pDjHmXsTSlajYs";
var latLong = {};


$(function(){


 
  var apiKey = '8cfea2945d846ffc51b257d11ac8cc97';
  var url = 'https://api.petfinder.com/pet.find';
  var dogArr = [];
  var zip = "94701";


  // $(document).on("click", "#searchBtn", function(){
  //   zip = $(".zip-code").val();
  //   console.log("Zip: " + zip);
  //   displayImage();
  // });

  function displayImage() {

      $.ajax({
          url: url,
          jsonp: "callback",
          dataType: "jsonp",
          data: {
              key: apiKey,
              animal: 'dog',
              location: zip,
              count: 100,
              output: 'basic',
              format: 'json'
          },    
    success: function(response) {

        // console.log(response);
        //  console.log(response.petfinder.pets.pet[1]);
        dogArr = response.petfinder.pets.pet;
        // console.log(dogArr);       
        }       
      });   

  };
  var shelterUrl = 'https://api.petfinder.com/shelter.get';

  function shelterAddress() {

    $.ajax({
        url: shelterUrl,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            key: apiKey,
            id: "CA412",
            format: "json"
        },    
        success: function(response) {
          // console.log("Shelter OBJ: " + response);  
        }       
    });   

  };// trying to grab address(however not curretnly working)

  // var address1 ={
  //   $t: "1 Bolivar Drive",
  //   city: "Berkeley",
  //   state: "CA"
  // };

  // var add = address1.$t.split(" ");
  // console.log(add);
  // shelterAddress();

  // var queryUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + add[0] + "+" + add[1] + "+" + add[2] + ",+" + address1.city + ",+" + address1.state + "&key=" + googleKey;
  // // "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + googleKey,
  // $.ajax({
  //   url: queryUrl,
  //   method: "Get"
  // }).then(function(response){
  //   console.log(response);
  //   console.log(response.results[0].geometry.location);
  //   latLong = response.results.geometry.location;
  // })

  displayImage();


})