<template>
	<transition name="nav-transition"
	enter-active-class="nav-fade-in"
  leave-active-class="nav-fade-out"
	>
		<b-navbar :class="'ij-nav ' + nav.minPadding" toggleable="lg" type="dark" v-show="nav.show" fixed="top">
			<b-navbar-brand href="/"><img src="~/assets/images/logos/ijaya-full-black-cropped.png" alt="Ijaya Logo"/></b-navbar-brand>
		</b-navbar>
	</transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
	mounted() {
	},
	computed: {
		...mapState({nav: state => state.nav}),
	},
}
</script>