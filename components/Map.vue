<template>
   <div id="map" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'center'">
        <div id="search" placeholder="Choose from the dropdown" title="Choose from the dropdown">
        </div>
    </div>
</template>

<script>
const esriPackages = [
  "dojo/ready",
  "dojo/on",
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/parser",
  "dijit/registry",
  "dijit/layout/BorderContainer",
  "dijit/layout/ContentPane",
  "esri/map",
  "esri/arcgis/utils",
  "esri/domUtils",
  "esri/dijit/Popup",
  "esri/tasks/BufferParameters",
  "esri/tasks/GeometryService",
  "esri/geometry/webMercatorUtils",
  "esri/geometry/Geometry",
  "esri/geometry/Polygon", 
  "esri/geometry/Extent",
  "esri/SpatialReference",
  "esri/dijit/Search",
  "esri/layers/FeatureLayer",
  "esri/InfoTemplate",
  "esri/layers/ArcGISTiledMapServiceLayer",
  "dojo/domReady!"
]
const esriModules = [
        ready,
        on,
        dom,
        domConstruct,
        parser,
        registry,
        BorderContainer,
        ContentPane,
        Map,
        arcgisUtils,
        domUtils,
        Popup,
        BufferParameters,
        GeometryService,
        webMercatorUtils,
        Geometry,
        Polygon,
        Extent,   
        SpatialReference,
        Search,
        FeatureLayer,
        InfoTemplate,
        ArcGISTiledMapServiceLayer
]
import { loadModules } from 'esri-loader'

    export default {
        name: 'Map',
        methods: {
            initMap() {
                loadModules(esriPackages)
                .then((esriModules) => {
                    let boundingBox = new Extent(-122.303, 37.50, -121.45, 37.85, new SpatialReference({ wkid:4326 }));
                    let MAP = new Map("map", {
                    extent: boundingBox,
                    basemap: "streets",  
            });
                })
            }
        },        
    }
</script>

<style scoped>

</style>