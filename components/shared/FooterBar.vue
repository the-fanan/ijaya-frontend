<template>
	<b-navbar class="ij-footer" toggleable="lg" type="dark" variant="dark" >
		<b-container :fluid="true">
			<b-row class="justify-content-between">
				<b-col md="4" cols="12">
					<p class="copy-text d-flex h-100 align-items-center">&copy; 2019 Ijaya Management. All rights reserved.</p>
				</b-col>
				<b-col cols="12" md="4">
					<div class="d-flex justify-content-center h-100 align-items-center">
						<img class="footer-logo" src="~/assets/images/logos/ijaya-full-white-cropped.png" alt="Ijaya Logo"/>
					</div>
				</b-col>
				<b-col md="4" cols="12" class="d-flex justify-content-end">
					<ul class="social-links d-flex h-100 align-items-center">
						<li><a href="#"><i class="fab fa-twitter"></i></a></li>
						<li><a href="#"><i class="fab fa-instagram"></i></a></li>
						<li><a href="#"><i class="fab fa-youtube"></i></a></li>
						<li><a href="#"><i class="fab fa-spotify"></i></a></li>
						<li><a href="#"><i class="fab fa-soundcloud"></i></a></li>
					</ul>
				</b-col>
			</b-row>
		</b-container>
	</b-navbar>
</template>

<script> 
export default {
	data() {
		return {

		}
	},
	mounted() {
	},
	computed: {
	},
}
</script>