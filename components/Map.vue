<template>
   <div id="map">
        <div id="search" placeholder="Choose from the dropdown" title="Choose from the dropdown">
        </div>
    </div>
</template>

<script>


    export default {
        name: 'Map',
        methods: {
            initMap() {

                console.log('--->', ready)
                // loadModules(...esriPackages, options)
                // .then(([...esriModules]) => {
                //     ready( () => {
                //          parser.parse();
                //     }

                //     )
                   
                //     // let boundingBox = new Extent(-122.303, 37.50, -121.45, 37.85, new SpatialReference({ wkid:4326 }));
                //     // let MAP = new Map("map", {
                //     // extent: boundingBox,
                //     // basemap: "streets",
                //         console.log(Map)
                      
                //     })
                // .catch( err => {
                //         console.error( err )
                //     });
            }
        },
        created() {
            this.initMap;
        }       
    }
</script>

<style scoped>

</style>