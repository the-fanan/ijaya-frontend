<template>
  <b-container :fluid="true">
    <b-row>
      <b-col class="hero" id="hero">
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

    <b-row>
      <b-col>
        <parallax :speedFactor="0.3" :sectionHeight="60" sectionClass="artistes-parallax" containerClass="artistes-parallax-image">
          <img src="~/assets/images/artistes/artist-band.jpg" alt="artistes">
        </parallax>
      </b-col>
    </b-row>
  </b-container>
</template>

<script> 
import Parallax from "~/plugins/parallax";

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
  methods: {
    changeHeroImage()
    {
      setTimeout(() => {this.currentHeroImage = (this.currentHeroImage + 1) % this.heroImages.length;}, 3000)
    },
    scrollFromHero()
    {
      let hero = document.getElementById("hero");
      let scrollTo = hero.offsetTop + hero.scrollHeight
      window.scrollTo(0, scrollTo)
    },
  },
  components: {
    Parallax
  }
}
</script>

