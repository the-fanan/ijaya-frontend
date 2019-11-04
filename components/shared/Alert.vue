<template>
	<transition name="alert-transition"
	enter-active-class="alert-slide-in"
  leave-active-class="alert-slide-out"
	>
		<div class="ij-alert d-flex justify-content-center" v-if="alert.show">
			<div :class="'main shadow-lg ' + alert.type">
				<h6 class="text-center text-white">{{ alert.heading }}</h6>
				<ul>
					<li v-for="message in alert.messages" v-bind:key="message" class="text-white">
						{{ message }}
					</li>
				</ul>
				<h4 class="text-center text-white">{{ alert.message }}</h4>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({alert: state => state.alert}),
	},
}
</script>