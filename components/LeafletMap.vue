<template>
  <div :id="'map-' + _uid" style="height: 450px; width: 100%; border-radius: 15px; border: 1px solid #ddd;box-shadow: 3px 4px 9px rgba(36,36,36,.15);"></div>
</template>

<script>
export default {
  name: "LeafletMap.vue",
  props: {
    latitude: String,
    longitude: String,
    address: String,
  },
  data() {
    return {
      map: null
    };
  },
  mounted() {
    if (process.client) {
      const L = require("leaflet");
      require("leaflet-fullscreen");
      const myIconPath = require('../assets/icons/main/place_point.png');

      if (!this.map) {
        const mapId = 'map-' + this._uid;
        this.map = L.map(mapId, {
          center: [this.latitude, this.longitude],
          zoom: 10,
          fullscreenControl: true,
          attributionControl: false,
        });

        L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
          attribution: '<a href="https://alfasoft.az/">alfasoft.az</a>'
        }).addTo(this.map);

        const customIcon = L.icon({
          iconUrl: myIconPath,
          iconSize: [80, 80],
          iconAnchor: [25, 25],
          popupAnchor: [15, -30]
        });

        L.marker([this.latitude, this.longitude], {icon: customIcon})
          .addTo(this.map)

          .bindPopup("<b>" + this.$t('address') + "</b> <br>" + this.address);
      }
    }
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  },
}
</script>

<style>
.leaflet-marker-pane img {
  object-fit: contain;
  filter: drop-shadow(black 2px 4px 6px)
}
</style>
