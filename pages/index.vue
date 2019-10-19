<template>
  <b-container fluid="true">
    <b-row>
      <b-col class="hero">
        <transition name="hero-images-transition"
        enter-active-class="fade-in-animation"
				leave-active-class="fade-out-animation"
        appear 
        v-on:after-appear="changeHeroImage"
        v-on:after-enter="changeHeroImage"
        >
          <img class="responsive" :src="heroImages[currentHeroImage].src" v-bind:key="heroImages[currentHeroImage].name"/>
        </transition>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
 
export default {
  data() {
    return {
      heroImages: [
        {src: "/_nuxt/assets/images/heros/amplifier.jpg", name:"amplifier"},
        {src: "/_nuxt/assets/images/heros/audience.jpg", name:"audience"}, 
        {src: "/_nuxt/assets/images/heros/record.jpg", name:"record"},
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
      setTimeout(() => {this.currentHeroImage = (this.currentHeroImage + 1) % this.heroImages.length;}, 5000)
    }
  }
}
</script>

