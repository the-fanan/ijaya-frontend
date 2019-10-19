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
          <b-row class="justify-content-start music-row">
            <b-col md="4" cols="12">
              <div class="music-holder shadow-lg">
                <img class="music-image" src="~/assets/images/music/drifting.jpg"/>
                <div class="music-details d-flex h-100 align-items-center">
                  <p class="text-white text-center">
                    <i class="fa fa-microphone"></i>
                    <span>
                      <p class="artiste"><nuxt-link to="/artistes">Dremdo</nuxt-link></p>
                    </span>
                  </p>
                </div>
              </div>
            </b-col>

            <b-col md="4" cols="12">
              <div class="music-holder shadow-lg">
                <img class="music-image" src="~/assets/images/music/angel-ash.jpg"/>
                <div class="music-details d-flex h-100 align-items-center">
                  <p class="text-white text-center">
                    <i class="fa fa-microphone"></i>
                    <span>
                      <p class="artiste"><nuxt-link to="/artistes">Dremdo</nuxt-link></p>
                    </span>
                  </p>
                </div>
              </div>
            </b-col>

            <b-col md="4" cols="12">
              <div class="music-holder shadow-lg">
                <img class="music-image" src="~/assets/images/music/cello-girl.jpg"/>
                <div class="music-details d-flex h-100 align-items-center">
                  <p class="text-white text-center">
                    <i class="fa fa-microphone"></i>
                    <span>
                      <p class="artiste"><nuxt-link to="/artistes">Dremdo</nuxt-link></p>
                    </span>
                  </p>
                </div>
              </div>
            </b-col>

            <b-col md="4" cols="12">
              <div class="music-holder shadow-lg">
                <img class="music-image" src="~/assets/images/music/guitar-boy.jpg"/>
                <div class="music-details d-flex h-100 align-items-center">
                  <p class="text-white text-center">
                    <i class="fa fa-microphone"></i>
                    <span>
                      <p class="artiste"><nuxt-link to="/artistes">Dremdo</nuxt-link></p>
                    </span>
                  </p>
                </div>
              </div>
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