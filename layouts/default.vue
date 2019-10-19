<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import _ from 'lodash'
import NavBar from '~/components/shared/NavBar.vue'

export default {
    created()
    {
      if (process.browser) { 
        window.addEventListener('scroll', _.debounce(this.navBarHandleScroll, 50));
      }
    },
    mounted(){
     // alert(this.nav.show)
    },
    methods:{
      ...mapMutations({navBarHandleScroll: 'nav/handleScroll'}),
    },
    beforeDestroy()
    {
      if (process.browser) { 
        window.removeEventListener('scroll', this.navBarHandleScroll);
      }
    },
    components: {
    NavBar
  },
}
</script>

<style lang="scss">

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

