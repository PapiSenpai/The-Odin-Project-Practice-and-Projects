<script>
    import Map from 'ol/Map.js';
    import OSM from 'ol/source/OSM.js';
    import TileLayer from 'ol/layer/Tile.js';
    import View from 'ol/View.js';

    const map = new Map({
        target: 'map',
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
        ],
        view: new View({
            center: [0, 0],
            zoom: 2,
        }),
    });
</script>

<div class="map-component">

    <div class="map-viewer">

    </div>
</div>

<style>
    html,
    body {
        margin: 0;
        height: 100%;

    }
</style>