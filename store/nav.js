export const state = () => ({
	show: true,
	minPadding: false,
	lastScrollTop: 0,
})

export const mutations = {
	handleScroll(state)
	{
		var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
		if (st > state.lastScrollTop){
			// downscroll code
			alert("going down")
		} else {
				// upscroll code
				alert("going up")
		}
		state.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
		state.show = true;
	}
}

export const getters = {

}

export const actions = {
	
}