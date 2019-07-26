<template>
   <section class="claro">
     <div id="mainWindow" style="width:100%; height:100%;">
              
              <Sidebar />
  
              <Map />
              
    </div>
   </section>
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

const options = { version: '3.29' };


import Sidebar from '../components/Sidebar'
import Map from '../components/Map'


import { loadModules } from 'esri-loader'

export default {
  components: {
    Sidebar,
    Map    
  },
  methods: {
    initMap() {
      esriLoader.loadModules(esriPackages, options)
      .then(([...esriModules]) => {
          console.log( "------>" , [...esriModules])
      })
      .catch( err => { console.error( err )});

    }
  
  },
  mounted(){

  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
