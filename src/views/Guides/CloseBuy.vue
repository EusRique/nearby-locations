<template>
  <div class="ui grid">
    <div class="six wide column">
      <div class="six wide column">
        <form class="ui segment large form">
          <div class="ui segment">
            <div class="field">
              <div class="ui right icon input large">
                <input type="text" placeholder="Digite suas coordenadas" v-model="coordinates" disabled/>
                <i class="dot circle link icon" @click="locatorButtonPressed"></i>
              </div>
            </div>
            <div class="field">
              <div class="two fields">
                <div class="field">
                  <select v-model="type">
                    <option value="MadeiraMadeira">Lojas Físicas</option>
                  </select>
                </div>
                <div class="field">
                  <select v-model="radius">
                    <option value="5">5 KM</option>
                    <option value="10">10 KM</option>
                    <option value="15">15 KM</option>
                    <option value="20">20 KM</option>
                  </select>
                </div>
              </div>
            </div>
            <button class="ui button" @click.prevent="findCloseBuyButtonPressed()">Encontrar Guides</button>
          </div>
        </form>
        <div class="ui segment"  style="max-height:500px;overflow:scroll">
          <div class="ui divided items">
            <div class="item" v-for="place in places" :key="place.place_id">
              <div class="content">
                <div class="header">{{place.name}}</div>
                <div class="meta">{{place.formatted_address}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ten wide column segment ui" ref="map"></div>
  </div>
</template>

<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'CloseBuy',

  components: {},

  props: {},

  data: () => ({
    lat: 0,
    lng: 0,
    type: "",
    radius: "",
    places: []
  }),

  computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    }
  },

  created() {},
  
  mounted() {
    console.log(process.env.VUE_APP_API_GOOGLE_PLACES)
    this.addLocationsToGoogleMaps();
  },
  
  methods: {
    ...mapActions("Guides", {
      searchGuides: "searchGuides"
    }),

    async findCloseBuyButtonPressed() {
      this.places = await this.searchGuides({
        lat: this.lat,
        lng: this.lng,
        type: this.type,
        radius: this.radius * 1000,
        key: process.env.VUE_APP_API_GOOGLE_PLACES
      })
      this.addLocationsToGoogleMaps();
    },

    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        },
        error => {
          console.log(error + "Erro ao buscar localização")
        }
      )
    },

    addLocationsToGoogleMaps() {
      var map = new google.maps.Map(this.$refs['map'], {
        zoom: 12,
        center: new google.maps.LatLng(this.lat, this.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      this.places.forEach((place) => {
        const lat = place.geometry.location.lat;
        const lng = place.geometry.location.lng;
       
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map
        });

        google.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(`<div class="ui header">${place.name}</div><p>${place.formatted_address}</p><p>Brazil</p>`);
          infowindow.open(map, marker);
        })
      });
    }
  },
  
  watch: {}
}
</script>

<style lang="scss" scoped>
.checked {
  color: orange;
}
</style>