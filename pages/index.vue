<template>
  <b-container :fluid="true">
    <b-row>
      <b-col class="hero col-no-padding" id="hero">
        <transition name="hero-images-transition"
        enter-active-class="fade-in-animation"
				leave-active-class="fade-out-animation"
        appear 
        v-on:after-appear="changeHeroImage"
        v-on:after-enter="changeHeroImage"
        mode="in-out"
        >
          <img class="responsive" :src="heroImages[currentHeroImage].src" v-bind:key="heroImages[currentHeroImage].name"/>
        </transition>
        <b-row class="hero-scroll-down-holder">
          <b-col class="d-flex justify-content-center">
            <span class="text-white text-center clicker" @click="scrollFromHero">
              <p class="text-center">Scroll Down</p>
              <i class="hover fa fa-chevron-down"></i>
            </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- Music Row -->
    <b-row>
      <b-col class="music-section">
        <b-row class="justify-content-center">
          <b-col md="9">
            <h1 class="text-white section-title">New Music</h1>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col md="4">
            <h2 class="text-white music-title">Dumb</h2>
            <div class="music-image-holder shadow-lg">
              <img src="~/assets/images/music/dumb-ft-grove.jpeg" class="music-image"/>
            </div>
            <div class="d-flex justify-content-between music-artiste text-white">
              <p class="artiste"><nuxt-link to="/artistes/jess-eta" class="text-white">Jess ETA</nuxt-link> <span class="feature">ft Grove</span></p> <a href="https://open.spotify.com/album/77GHxa29YSiZU26HqXDAmB" class="text-white" target="blank">Listen</a>
            </div>
          </b-col>
           <b-col md="4">
            <h2 class="text-white music-title">ETA</h2>
            <div class="music-image-holder shadow-lg">
              <img src="~/assets/images/music/ETA.jpeg" class="music-image"/>
            </div>
            <div class="d-flex justify-content-between music-artiste text-white">
              <p class="artiste"><nuxt-link to="/artistes/jess-eta" class="text-white">Jess ETA</nuxt-link></p> <a href="https://open.spotify.com/album/1ZBWO099OEa7mzLvWOTv50" target="blank" class="text-white">Listen</a>
            </div>
          </b-col>
        </b-row>
        <nuxt-link class="section-bottom-links top" to="/music">View All Music</nuxt-link>
      </b-col>
    </b-row>
    <!--Shows-->
    <!--b-row>
      <b-col class="shows-section">
        <b-row class="justify-content-center">
          <b-col md="9">
            <h1 class="text-white section-title">Shows</h1>
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col md="8">
            <h2 class="text-white">No shows currently available</h2>
          </b-col>
        </b-row>
      </b-col>
    </b-row-->
    <b-row>
      <b-col class="col-no-padding">
        <parallax :speedFactor="0.3" :sectionHeight="60" sectionClass="artistes-parallax" containerClass="artistes-parallax-image">
          <img src="~/assets/images/artistes/artist-band.jpg" alt="artistes">
        </parallax>
        <nuxt-link class="section-bottom-links" to="/artistes">View All Artistes</nuxt-link>
      </b-col>
    </b-row>
    <!--NewsLetter-->
    <b-row>
      <b-col class="newsletter-section">
        <b-row class="justify-content-center">
          <b-col md="3" cols="12">
            <h1 class="text-white section-title">Subscribe To Our Newsletter</h1>
          </b-col>
          <b-col md="6" cols="12" class="newsletter-input">
            <div class="form-group">
              <input :class="'form-control contact-style ' + contact.name.feedbackClass" name="name" placeholder="Name" :value="contact.name.value" @input="handleNewsLetterInput"/>
              <div class="feedback">
                {{contact.name.feedback}}
              </div>
            </div>
            <div class="form-group">
              <input :class="'form-control contact-style ' + contact.email.feedbackClass" name="email" placeholder="Email Address" :value="contact.email.value" @input="handleNewsLetterInput"/>
              <div class="feedback">
                 {{contact.email.feedback}}
              </div>
            </div>
            <div class="form-group">
              <button @click="submitNewsLetter">Subscribe</button>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script> 
import Parallax from "~/plugins/parallax";
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      heroImages: [
        {src: require("~/assets/images/heros/amplifier.jpg"), name:"amplifier"},
        {src: require("~/assets/images/heros/audience.jpg"), name:"audience"}, 
        {src: require("~/assets/images/heros/record.jpg"), name:"record"},
        ],
      currentHeroImage: 0,
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  computed: {
    ...mapState({contact: state => state.contact}),
  },
  methods: {
    ...mapActions({handleNewsLetterInput: "contact/handleInput", submitNewsLetter: "contact/addToNewsLetter"}),
    changeHeroImage()
    {
      setTimeout(() => {this.currentHeroImage = (this.currentHeroImage + 1) % this.heroImages.length;}, 3000)
    },
    scrollFromHero()
    {
      let hero = document.getElementById("hero");
      let scrollTo =  hero.scrollHeight
      window.scrollTo(0, scrollTo)
    },
  },
  components: {
    Parallax
  }
}
</script>

