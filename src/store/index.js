import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Modules
import Snackbar from "@/store/Snackbar";
import LocationHome from "@/store/LocationHome";
import Guides from "@/store/Guides";

export default new Vuex.Store({
  modules: {
    Snackbar,
    LocationHome,
    Guides
  }
})