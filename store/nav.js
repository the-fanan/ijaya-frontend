export const state = () => ({
	show: true,
	//"" or "min-padding"
	minPadding: "",
	lastScrollTop: 0,
})

export const mutations = {
	handleScroll(state)
	{
		var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
		if (st > state.lastScrollTop){
			// downscroll code
			state.show = false;
		} else {
			// upscroll code
			state.show = true;
		}

		if (window.scrollY > 50) {
			state.minPadding = "min-padding"
		} else {
			state.minPadding = ""
		}
		state.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	}
}

export const getters = {

}

export const actions = {
	
}