import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import state from "./state"

const Guides = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default Guides;