<template>
	<b-container :fluid="true">
		
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