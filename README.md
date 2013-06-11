mapbox-marionette-module
========================

Backbone Marionette based module for working with Mapbox map

* [Features] (#Features)
* [How to use] (#How to use)
* [References](#References)

##Features
* Initialize map
* Geolocation

##How to use

Here is the simple html page whcih might be set up with the Mapbox.js
```html
<html>
<head>
    <link href='http://api.tiles.mapbox.com/mapbox.js/v1.0.0/mapbox.css' rel='stylesheet' />
    <!--[if lte IE 8]>
      <link href='http://api.tiles.mapbox.com/mapbox.js/v1.0.0/mapbox.ie.css' rel='stylesheet' />
    <![endif]-->
    <script src='http://api.tiles.mapbox.com/mapbox.js/v1.0.0/mapbox.js'></script>
    <script src="js/vendor/jquery-1.7.1.min.js"></script>
    <script src="js/vendor/json2.js"></script>
    <script src="js/vendor/underscore.js"></script>
    <script src="js/vendor/mustache.js"></script>
    <script src="js/vendor/backbone.js"></script>
    <script src="js/vendor/backbone.marionette.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/App.js"></script>
    <script src="js/App.Mapbox.js"></script>

</head>
<body>
  <div id="map" class="dark" style="width: 100%; height: 100%;"></div>
  <script type='text/javascript'>
    $(document).ready(function() {
  	    App.start();
        App.request('map:init', 'map', 'examples.map-y7l23tes', true, function(e) {
            alert('Your location is determined: lng=' + e.latlng.lng + ', lat=' + e.latlng.lat);
        });
  
    });
  </script>
</body>
</html>
```

First of all it is necessary to include Mapbox.js API modules:
```html
    <link href='http://api.tiles.mapbox.com/mapbox.js/v1.0.0/mapbox.css' rel='stylesheet' />
    <!--[if lte IE 8]>
      <link href='http://api.tiles.mapbox.com/mapbox.js/v1.0.0/mapbox.ie.css' rel='stylesheet' />
    <![endif]-->
    <script src='http://api.tiles.mapbox.com/mapbox.js/v1.0.0/mapbox.js'></script>
```

Also we include necessary dependencies:
```html
<script src="js/vendor/jquery-1.7.1.min.js"></script>
<script src="js/vendor/json2.js"></script>
<script src="js/vendor/underscore.js"></script>
<script src="js/vendor/mustache.js"></script>
<script src="js/vendor/backbone.js"></script>
<script src="js/vendor/backbone.marionette.js"></script>
<script src="js/vendor/bootstrap.min.js"></script>
```    

Include main application module:
```html
<script src="js/App.js"></script>
```
Include mapbox module:
```html 
<script src="js/App.Mapbox.js"></script> 
```
HTML div element which is used as holder of the map:
```html
<div id="map" class="dark" style="width: 100%; height: 100%;"></div>
```

The map is initialized by Request ([Marionette.RequestResponse](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.requestresponse.md)):
```html
App.request('map:init', 'map', 'examples.map-y7l23tes', true, function(e) {
    alert('Your location is determined: lng=' + e.latlng.lng + ', lat=' + e.latlng.lat);
});
```

Request must be sent to `'map:init'` handler.
The following parameters must be passed into Request method:
* `'map'` - identifier of map HTML holder (`id="map"`)
* `'examples.map-y7l23tes'` - identifier of map from Mapbox site
* flag - if `true`, then define location, otherwise do not perform geolocation
* callback - callback function which is called the location is found


##References
[Mapbox.js API](http://www.mapbox.com/mapbox.js)<br/>
[Backbone.js](http://backbonejs.org/)<br/>
[Marionette.js](http://marionettejs.com/)<br/>

