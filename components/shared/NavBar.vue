<template>
	<transition name="nav-transition"
	enter-active-class="nav-fade-in"
  leave-active-class="nav-fade-out"
	>
		<b-navbar :class="'ij-nav ' + nav.minPadding" toggleable="lg" type="dark" variant="info" v-show="nav.show" fixed="top">
			<b-navbar-brand href="#">NavBar</b-navbar-brand>
		</b-navbar>
	</transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
	mounted() {
		alert(this.nav.minPadding)
	},
	computed: {
		...mapState({nav: state => state.nav}),
	},
}
</script>