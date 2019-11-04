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
        <div class="artiste-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="music-holder">
             <b-container :fluid="true">
              <b-row>
                <b-col>
                  <h1 class="text-ijaya release-heading">Releases</h1>
                </b-col>
              </b-row>
              <b-row class="justify-content-start music-row artiste">
                <b-col md="6" cols="12">
                  <div class="music-holder shadow-lg">
                    <img class="music-image" src="~/assets/images/music/drifting.jpg"/>
                    <div class="music-details d-flex h-100 align-items-center">
                      <p class="text-white text-center">
                        <i class="fa fa-music"></i>
                        <span>
                          <p class="song-title">Drifting</p>
                          <p class="artiste"><nuxt-link to="/artistes/dremdo">Dremdo</nuxt-link></p>
                        </span>
                      </p>
                    </div>
                  </div>
                </b-col>

                <b-col md="6" cols="12">
                  <div class="music-holder shadow-lg">
                    <img class="music-image" src="~/assets/images/music/angel-ash.jpg"/>
                    <div class="music-details d-flex h-100 align-items-center">
                      <p class="text-white text-center">
                        <i class="fa fa-music"></i>
                        <span>
                          <p class="song-title">Angel Ash</p>
                          <p class="artiste"><nuxt-link to="/artistes/dremdo">Dremdo</nuxt-link></p>
                        </span>
                      </p>
                    </div>
                  </div>
                </b-col>

                <b-col md="6" cols="12">
                  <div class="music-holder shadow-lg">
                    <img class="music-image" src="~/assets/images/music/cello-girl.jpg"/>
                    <div class="music-details d-flex h-100 align-items-center">
                      <p class="text-white text-center">
                        <i class="fa fa-music"></i>
                        <span>
                          <p class="song-title">Cello Girl</p>
                          <p class="artiste"><nuxt-link to="/artistes/dremdo">Dremdo</nuxt-link></p>
                        </span>
                      </p>
                    </div>
                  </div>
                </b-col>

                <b-col md="6" cols="12">
                  <div class="music-holder shadow-lg">
                    <img class="music-image" src="~/assets/images/music/guitar-boy.jpg"/>
                    <div class="music-details d-flex h-100 align-items-center">
                      <p class="text-white text-center">
                        <i class="fa fa-music"></i>
                        <span>
                          <p class="song-title">Guitar Boy</p>
                          <p class="artiste"><nuxt-link to="/artistes/dremdo">Dremdo</nuxt-link></p>
                        </span>
                      </p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
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
      if (redText === "") {
        redText = whiteText
        whiteText = ""
      }
      
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