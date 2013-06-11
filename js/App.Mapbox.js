/**
 * User: skarev
 * Date: 11.06.13
 * Time: 0:28
 */
App.module('Mapbox', function(Mapbox, App, Backbone, Marionette, $, _) {

    /**
     * Map variable.
     */
    var map;

    /**
     * Initialize map if it does not exist yet.
     * @param id - identifier of map [div] element
     * @param map_id - map identifier in your Mapbox profile
     * @param locate - flag, if [true] then determine my location, otherwise do not determine
     * @param onlocationfound - callback function which is called when location is found
     */
    var initializeMap = function(id, map_id, locate, onlocationfound) {
        map = L.mapbox.map(id, map_id);
        if (locate) {
            if (!navigator.geolocation) console.log('Geolocation is not supported');
            else {
                map.on('locationfound', onlocationfound);
                API.locate();
            }
        }
    };

    /**
     * API for working with Mapbox map.
     * @type {{getMap: Function, locate: Function, setLocation: Function}}
     */
    var API = {
        /**
         * Retrieve map. Initialize map if it does not exist.
         * @param id - identifier of map [div] element
         * @param map_id - map identifier in your Mapbox profile
         * @param locate - flag, if [true] then determine my location, otherwise do not determine
         * @param onlocationfound - callback function which is called when location is found
         * @returns map variable
         */
        getMap: function(id, map_id, locate, onlocationfound) {
            if (map === undefined) {
                initializeMap(id, map_id, locate, onlocationfound);
            }
            return map;
        },
        /**
         * Find my location.
         * @param onlocationfound - callback function which is called when location is found
         */
        locate: function(onlocationfound) {
            if (map !== undefined) {
                map.on('locationfound', this.setLocation);
                map.on('locationfound', onlocationfound);
                map.locate();
            }
        },
        /**
         * Set location on map.
         * @param e
         */
        setLocation: function(e) {
            map.fitBounds(e.bounds);
            map.markerLayer.setGeoJSON({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [e.latlng.lng, e.latlng.lat]
                },
                properties: {
                    'marker-color': '#000',
                    'marker-symbol': 'star-stroked'
                }
            });
        }
    };



    /*
     | ---------------------------------------------------
     | Request Handlers
     | ---------------------------------------------------
     */

    /**
     * map:init handler
     */
    App.reqres.setHandler("map:init", function(id, map_id, locate, onlocationfound) {
        return API.getMap(id, map_id, locate, onlocationfound);
    });

    /**
     * map:locate handler
     */
    App.reqres.setHandler("map:locate", function(onlocationfound) {
        return API.locate(onlocationfound);
    });
});
