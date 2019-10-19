<template>
  <b-container :fluid="true">
    <!--heading -->
    <b-row>
      <b-col class="page-heading">
        <h1 class="text-white">Artistes</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-container>
          <b-row class="justify-content-start">
            <b-col md="4" cols="12">
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  computed: {
    ...mapState({artists: state => state.artists}),
  },
  methods: {
    ...mapMutations({incrementArtist: 'artists/increment'}),
  },
  components: {
  },
  head: {
    title: 'Ijaya Artistes'
  }
}
</script>