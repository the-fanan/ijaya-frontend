<template>
	<b-container :fluid="true">
		
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
        { name: 'twitter:title', content: 'Dremdo - Ijaya Artist' },
        { name: 'twitter:description', content: 'View Dremdo\'s story on Ijaya' },
        { name: 'twitter:image', content: 'https://image.com/image.png' },
        { property: 'og:url', content: process.env.BASE_URL + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Dremdo - Ijaya Artist' },
        { property: 'og:description', content: 'View Dremdo\'s story on Ijaya' },
        { property: 'og:image', content: 'https://image.com/image.png' },
      ],
    }
  }
}
</script>