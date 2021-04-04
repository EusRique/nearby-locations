export default {
  typeLocation({ commit }, payload) {
    console.log(payload)
    commit("UPDATE_TYPE_LOCATION", payload)
  }
}