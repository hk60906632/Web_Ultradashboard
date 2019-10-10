function weather() {
  var location = document.getElementById("location");
  var apiKey = "63bbc155e605be647cf5ee38cf849609";
  var url = "https://api.darksky.net/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude.toFixed(3);
    longitude = position.coords.longitude.toFixed(3);

    location.innerHTML =
      "Latitude:" + latitude + "°" + "<br />" + "Longitude:" + longitude + "°";

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      function (data) {
        $("#temp").html(data.currently.temperature + "° F");
        $("#minutely").html(data.minutely.summary);
      }
    );
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();