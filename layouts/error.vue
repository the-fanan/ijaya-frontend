<template>
	<b-container>
		<b-row>
			<b-col class="error-col d-flex">
				<div class="text-holder align-self-center">
					<h1 class="text-white text-center">Error <span>{{ error.statusCode }}</span></h1>
					<h4 class="text-white text-center">{{ error.message }}</h4>
    			<nuxt-link to="/" class="text-white text-center">Go back to Home page</nuxt-link>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
  props: ['error'],
}
</script>