<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        ssr-frontend
      </h1>
      <h2 class="subtitle">
        Frontend for Ijaya Management
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
          <nuxt-link to="/foo">foo</nuxt-link>
          <b-button variant="outline-info" class="m-1" size="lg">
            Show alert with count-down timer
          </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios'
 
export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  components: {
    AppLogo
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

