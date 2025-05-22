<script>
  import { onMount } from 'svelte';
  import './location.style.css';
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import OSM from 'ol/source/OSM';
  import { fromLonLat } from 'ol/proj';
  import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';
  import Feature from 'ol/Feature';
  import Point from 'ol/geom/Point';
  import Style from 'ol/style/Style';
  import Icon from 'ol/style/Icon';
  import Overlay from 'ol/Overlay';

  let mapContainer;
  let popupContainer;

  onMount(() => {
    const centerCoords = fromLonLat([-60.3225, -36.8927]); // Coordenadas de Olavarría

    // Crear marcador
    const marker = new Feature({
      geometry: new Point(centerCoords),
    });

    // Estilo del marcador
    marker.setStyle(
      new Style({
        image: new Icon({
          src: 'https://openlayers.org/en/latest/examples/data/icon.png',
          scale: 0.8,
          anchor: [0.5, 1],
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    // Crear overlay (etiqueta)
    const popup = new Overlay({
      element: popupContainer,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -40], // Subir un poco para que no tape el icono
    });

    const map = new Map({
      target: mapContainer,
      layers: [
        new TileLayer({ source: new OSM() }),
        vectorLayer
      ],
      overlays: [popup],
      view: new View({
        center: centerCoords,
        zoom: 15,
      }),
    });

    popup.setPosition(centerCoords); // Mostrar la etiqueta en el marcador
  });
</script>


<section id="location" class="container-location" style="scroll-margin-top: 7rem;">
  <h3 class="bebas-neue-regular">¿Dónde queda La Barber?</h3>
  <div id="map" class="location" bind:this={mapContainer}></div>
  <div id="popup" class="ol-popup" bind:this={popupContainer}>
    <div class="ol-popup-text">La Barber - España 2596</div>
  </div>
</section>