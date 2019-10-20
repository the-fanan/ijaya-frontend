<template>
	<b-container :fluid="true">
		<b-row class="single-artiste-row">
      <b-col md="6" cols="12" class="image-col">
        <div class="image-holder">
          <img class="artiste-image" src="~/assets/images/music/nagato-pain.jpg"/>
          <div class="artiste-summary">
            <h1 class="artiste-name text-center">{{ artisteName.whiteText }} <span class="red-text">{{ artisteName.redText }}</span></h1>
            <ul class="artiste-social social-links d-flex h-100 align-items-center justify-content-center">
              <li><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram fa-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-youtube fa-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-spotify fa-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-soundcloud fa-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-apple fa-lg"></i></a></li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col md="6" cols="12">
      </b-col>
		</b-row>
	</b-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  computed: {
    ...mapState({artists: state => state.artists}),
    title() {
      let slug = this.$route.params.slug
      let slugParts = slug.split("-")
      let title = ""
      for (let i = 0; i < slugParts.length; i++) {
        if (i == 0) {
          title = slugParts[i].charAt(0).toUpperCase() + slugParts[i].slice(1).toLowerCase() + " "
        } else {
          title = title + " " + slugParts[i].charAt(0).toUpperCase() + slugParts[i].slice(1).toLowerCase()
        }
      }
      title = title + " - Ijaya Artiste"
      return title
    },
    artisteName() {
      let slug = this.$route.params.slug
      let slugParts = slug.split("-")
      let whiteText = ""
      let redText = ""

      for (let i = 0; i < Math.round((2/3) * slugParts.length); i++) {
        if (i == 0) {
          whiteText = slugParts[i].charAt(0).toUpperCase() + slugParts[i].slice(1).toLowerCase() + " "
        } else {
          whiteText = whiteText + " " + slugParts[i].charAt(0).toUpperCase() + slugParts[i].slice(1).toLowerCase()
        }
      }

      for (let i = Math.round((2/3) * slugParts.length); i < slugParts.length; i++) {
        if (i == 0) {
          redText = slugParts[i].charAt(0).toUpperCase() + slugParts[i].slice(1).toLowerCase() + " "
        } else {
          redText = redText + " " + slugParts[i].charAt(0).toUpperCase() + slugParts[i].slice(1).toLowerCase()
        }
      }
      let fullName = whiteText + " " + redText
      
      return {whiteText, redText, fullName}
    }
  },
  methods: {
    ...mapMutations({incrementArtist: 'artists/increment'}),
  },
  components: {
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Dremdo' },
        { name: 'twitter:creator', content: '@IjayaManagement' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: `View ${this.artisteName.fullName}'s story on Ijaya` },
        { name: 'twitter:image', content: 'https://image.com/image.png' },
        { property: 'og:url', content: process.env.BASE_URL + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.title},
        { property: 'og:description', content: `View ${this.artisteName.fullName}'s story on Ijaya` },
        { property: 'og:image', content: 'https://image.com/image.png' },
      ],
    }
  }
}
</script>