<template>
	<b-container :fluid="true">
		<b-row class="single-artiste-row">
      <b-col md="6" cols="12" class="image-col">
        <div class="image-holder">
          <img class="artiste-image" :src="artiste.image"/>
          <div class="artiste-summary">
            <h1 class="artiste-name text-center">{{ artisteName.whiteText }} <span class="red-text">{{ artisteName.redText }}</span></h1>
            <ul class="artiste-social social-links d-flex h-100 align-items-center justify-content-center">
              <li v-for="(social, index) in artiste.socialMedia" v-bind:key="index"><a :href="social.link"><i :class="'fab fa-lg ' + social.icon"></i></a></li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col md="6" cols="12">
        <div class="artiste-description">
          <p>
            {{ artiste.description }}
          </p>
          <div class="music-holder">
             <b-container :fluid="true">
              <b-row>
                <b-col>
                  <h1 class="text-ijaya release-heading">Releases</h1>
                </b-col>
              </b-row>
              <b-row class="justify-content-start music-row artiste">
                <b-col md="6" cols="12" v-for="(music,index) in artiste.musics" v-bind:key="index">
                  <div class="music-holder shadow-lg">
                    <img class="music-image" :src="music.image"/>
                    <div class="music-details d-flex h-100 align-items-center">
                      <p class="text-white text-center">
                        <i class="fa fa-music"></i>
                        <span>
                          <p class="song-title"><a class="text-white" target="blank" :href="music.link">{{music.title}}</a></p>
                          <p class="artiste"><nuxt-link :to="'/artistes/' + music.artisteSlug">{{music.artiste}}</nuxt-link> <span class="feature" v-show="music.ft !== ''">ft. {{ music.ft }}</span></p>
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
import _ from 'lodash'
export default {
  data() {
    return {
      artiste: {
        name: "Jess ETA",
        slug: "jess-eta",
        image: require("~/assets/images/artistes/jess-suit.jpg"),
        description: "JessE The Architect is a Nigerian producer/singer/song-writer who started singing in his church’s choir at 16. He now fuses afrobeats with other genres to create alternative sounds. His sound has evolved from the EDM inspired production on his debut EP September, to the silky smooth sounds in Aphrodite. He shuttles between Nigeria, Ukraine and the United States.",
        socialMedia: [
          {link: "https://twitter.com/JessETAmusic", icon: "fa-twitter"},
          {link: "https://www.instagram.com/jess.eta/", icon: "fa-instagram"},
          {link: "https://www.youtube.com/channel/UCEu3hP0AwdlhUnC8FLxqLQg", icon: "fa-youtube"},
          {link: "https://open.spotify.com/artist/0pl5KisZPcKHhrruuvFg3y/about", icon: "fa-spotify"},
          {link: "https://soundcloud.com/jessekagbo", icon: "fa-soundcloud"},
          {link: "https://music.apple.com/us/artist/jess-eta/1287192877", icon: "fa-apple"},
        ],
        musics: [
          {title: "Dumb", link: "https://open.spotify.com/album/77GHxa29YSiZU26HqXDAmB", image: require("~/assets/images/music/dumb-ft-grove.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: "Grove"},
          {title: "E.T.A.", link: "https://open.spotify.com/album/1ZBWO099OEa7mzLvWOTv50", image: require("~/assets/images/music/ETA.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
          {title: "Fire", link: "https://open.spotify.com/album/3uhHPmUhCO1x3e9N79DCol", image: require("~/assets/images/music/fire.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
          {title: "Loco", link: "https://open.spotify.com/album/7xm0JNJQQlyvQ3WW4fciDg", image: require("~/assets/images/music/loco.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
          {title: "Old Me", link: "https://open.spotify.com/album/51LfdryItjCHuV6Hbuso0K", image: require("~/assets/images/music/old-me.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
          {title: "Red Velvet", link: "https://open.spotify.com/album/5V8AoI7nUHzKT4fZB5XzNw", image: require("~/assets/images/music/red-velvet.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
        ]
      },
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  computed: {
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
    
  },
  components: {
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@IjayaManagement' },
        { name: 'twitter:creator', content: '@IjayaManagement' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: `View ${this.artisteName.fullName}'s story on Ijaya` },
        { name: 'twitter:image', content: process.env.BASE_URL + this.artiste.image },
        { property: 'og:url', content: process.env.BASE_URL + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.title},
        { property: 'og:description', content: `View ${this.artisteName.fullName}'s story on Ijaya` },
        { property: 'og:image', content:  process.env.BASE_URL + this.artiste.image },
      ],
    }
  },
  asyncData ({ params, error }) {
    let artistesSlug = ['jess-eta', 'roadman']
    let artistes = [
          {
          name: "Jess ETA",
          slug: "jess-eta",
          image: require("~/assets/images/artistes/jess-suit.jpg"),
          description: "JessE The Architect is a Nigerian producer/singer/song-writer who started singing in his church’s choir at 16. He now fuses afrobeats with other genres to create alternative sounds. His sound has evolved from the EDM inspired production on his debut EP September, to the silky smooth sounds in Aphrodite. He shuttles between Nigeria, Ukraine and the United States.",
          socialMedia: [
            {link: "https://twitter.com/JessETAmusic", icon: "fa-twitter"},
            {link: "https://www.instagram.com/jess.eta/", icon: "fa-instagram"},
            {link: "https://www.youtube.com/channel/UCEu3hP0AwdlhUnC8FLxqLQg", icon: "fa-youtube"},
            {link: "https://open.spotify.com/artist/0pl5KisZPcKHhrruuvFg3y/about", icon: "fa-spotify"},
            {link: "https://soundcloud.com/jessekagbo", icon: "fa-soundcloud"},
            {link: "https://music.apple.com/us/artist/jess-eta/1287192877", icon: "fa-apple"},
          ],
          musics: [
            {title: "Dumb", link: "https://open.spotify.com/album/77GHxa29YSiZU26HqXDAmB", image: require("~/assets/images/music/dumb-ft-grove.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: "Grove"},
            {title: "E.T.A.", link: "https://open.spotify.com/album/1ZBWO099OEa7mzLvWOTv50", image: require("~/assets/images/music/ETA.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
            {title: "Fire", link: "https://open.spotify.com/album/3uhHPmUhCO1x3e9N79DCol", image: require("~/assets/images/music/fire.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
            {title: "Loco", link: "https://open.spotify.com/album/7xm0JNJQQlyvQ3WW4fciDg", image: require("~/assets/images/music/loco.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
            {title: "Old Me", link: "https://open.spotify.com/album/51LfdryItjCHuV6Hbuso0K", image: require("~/assets/images/music/old-me.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
            {title: "Red Velvet", link: "https://open.spotify.com/album/5V8AoI7nUHzKT4fZB5XzNw", image: require("~/assets/images/music/red-velvet.jpeg"), artiste: "Jess ETA", artisteSlug: "jess-eta", ft: ""},
          ]
        },
        {
          name: "Roadman",
          slug: "roadman",
          image: require("~/assets/images/artistes/toro1.jpeg"),
          description: "Roadman (Toro Alaba) is an eccentric, enigmatic and powerful musician. He resides in U.S.A. and has gained a large number of listeners from his local community.",
          socialMedia: [
            {link: "https://soundcloud.com/toro-alaba-819454537", icon: "fa-soundcloud"},
          ],
          musics: [
            {title: "Belinda", link: "https://soundcloud.com/toro-alaba-819454537/belinda", image: require("~/assets/images/music/belinda.jpg"), artiste: "Roadman", artisteSlug: "roadman", ft: ""},
            {title: "Soji", link: "https://soundcloud.com/toro-alaba-819454537/soji", image: require("~/assets/images/music/soji.jpg"), artiste: "Roadman", artisteSlug: "roadman", ft: ""},
            {title: "Aries", link: "https://soundcloud.com/toro-alaba-819454537/aries", image: require("~/assets/images/music/aries.jpg"), artiste: "Roadman", artisteSlug: "roadman", ft: ""},
            {title: "Ceremony", link: "https://soundcloud.com/toro-alaba-819454537/ceremony-feat-dr-wavyy", image: require("~/assets/images/music/ceremony.jpg"), artiste: "Roadman", artisteSlug: "roadman", ft: "Dr Wavy"},
          ]
        }
      ]
    if (artistesSlug.includes(params.slug) ) {
      return {artiste: _.find(artistes, ['slug', params.slug])}
    } else {
      error({ statusCode: 404, message: 'Artiste does not exist on this platform' })
    }
  }
}
</script>