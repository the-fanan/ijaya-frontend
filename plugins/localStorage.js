/**
 * This is for vuex-persistedstate
 */
import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
    paths: ['nav'],
  })(store)
}