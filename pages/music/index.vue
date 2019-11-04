<template>
  <b-container :fluid="true">
    <!--heading -->
    <b-row>
      <b-col class="page-heading">
        <h1 class="text-white">Music</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-container>
          <b-row class="justify-content-start music-row">
            <b-col md="4" cols="12" v-for="(music,index) in musics" v-bind:key="index">
              <div class="music-holder shadow-lg">
                <img class="music-image" :src="music.image"/>
                <div class="music-details d-flex h-100 align-items-center">
                  <p class="text-white text-center">
                    <i class="fa fa-music"></i>
                    <span>
                      <p class="song-title"><a class="text-white" target="blank" :href="music.link">{{music.title}}</a> <span v-show="music.ft !== ''">ft. {{ music.ft }}</span></p>
                      <p class="artiste"><nuxt-link :to="'/artistes/' + music.artisteSlug">{{music.artiste}}</nuxt-link></p>
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
  data() {
    return {
      musics: [
        {title: "Dumb", link: "https://open.spotify.com/album/77GHxa29YSiZU26HqXDAmB", image: require("~/assets/images/music/dumb-ft-grove.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: "Grove"},
        {title: "E.T.A.", link: "https://open.spotify.com/album/1ZBWO099OEa7mzLvWOTv50", image: require("~/assets/images/music/ETA.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
        {title: "Fire", link: "https://open.spotify.com/album/3uhHPmUhCO1x3e9N79DCol", image: require("~/assets/images/music/fire.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
        {title: "Loco", link: "https://open.spotify.com/album/7xm0JNJQQlyvQ3WW4fciDg", image: require("~/assets/images/music/loco.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
        {title: "Old Me", link: "https://open.spotify.com/album/51LfdryItjCHuV6Hbuso0K", image: require("~/assets/images/music/old-me.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
        {title: "Red Velvet", link: "https://open.spotify.com/album/5V8AoI7nUHzKT4fZB5XzNw", image: require("~/assets/images/music/red-velvet.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  computed: {
    
  },
  methods: {
    
  },
  components: {
  },
  head: {
    title: 'Ijaya Music'
  }
}
</script>