<template>
  <div class="HomeLayout">
    <div class="HomeLayout__banner">
      <div class="HomeLayout__button">
        <router-link to="/guides">
          <button @click="location('isAutomatica')">Busca automática de localização</button>
        </router-link>
      </div>
      <div class="HomeLayout__button">
        <router-link to="/guides">
          <button @click="location('myLocation')" disabled>Informar minha localização</button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  components: {},

  props: {},

  data: () => ({
    bannerLocation: require('@/assets/images/road-mapping.svg'),
  }),

  computed: {},

  created() {},
  
  mounted() {},
  
  methods: {
    ...mapActions("LocationHome", {
      typeLocation: "typeLocation"
    }),

    location(location) {
      this.typeLocation(location)
    },
  },
  
  watch: {}
}
</script>

<style lang="scss" scoped>
.HomeLayout {
  background-color: var(--color-background-home);
  &__banner {
    background-image: url('~@/assets/images/road-mapping.svg');
    height: 100vh;
  
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 5%;
  }
  &__button {
    height: 40px;
    width: 500px;
    border: 2px solid #FFFFFF;
    margin: 20px 20px 20px 20px;
    
    display: flex;
    align-items: center;
    justify-content: center;  
  }
  &__button button {
    color: #76323F;
    letter-spacing: 1px;
    font-weight: bold;
    font-family: Poppins;
  }
  &__button button:focus {
    outline:0;
  }
}
</style>