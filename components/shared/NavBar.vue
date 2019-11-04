<template>
	<transition name="nav-transition"
	enter-active-class="nav-fade-in"
  leave-active-class="nav-fade-out"
	>
		<b-navbar :class="'ij-nav ' + nav.minPadding" toggleable="lg" type="dark" v-show="nav.show" fixed="top">
			<b-navbar-brand to="/"><img src="~/assets/images/logos/ijaya-full-white-cropped.png" alt="Ijaya Logo"/></b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item right exact to="/">
						Home
					</b-nav-item>
					<b-nav-item right to="/music">
						Music
					</b-nav-item>
					<b-nav-item right to="/artistes">
						Artistes
					</b-nav-item>
					<b-nav-item right to="/contact">
						Contact
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
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