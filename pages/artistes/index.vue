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

            <b-col md="4" cols="12" v-for="(artiste, index) in artistes" v-bind:key="index">
              <div class="music-holder shadow-lg">
                <img class="music-image" :src="artiste.image"/>
                <div class="music-details d-flex h-100 align-items-center">
                  <p class="text-white text-center">
                    <i class="fa fa-microphone"></i>
                    <span>
                      <p class="artiste"><nuxt-link :to="'/artistes/' + artiste.slug">{{artiste.name}}</nuxt-link></p>
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
      artistes: [
        {name:"Jess ETA", slug: "jess-eta", image: require("~/assets/images/artistes/jess-suit.jpg")},
        {name:"Roadman", slug: "roadman", image: require("~/assets/images/artistes/toro1.jpeg")},
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
    title: 'Ijaya Artistes'
  }
}
</script>