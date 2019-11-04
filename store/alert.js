export const state = () => ({
	show: false,
	message: "a default message",
	type: "success",
	heading: "A default heading"
})

export const mutations = {
	updateAlert (state, data) {
		state.show = true
		state.type = data.type
		state.message = data.message
		state.heading = data.heading
	},
	resetAlert (state) {
		state.show = false
		state.type = ""
		state.message = ""
		state.heading = ""
	}
}

export const actions = {
	showAlert ({commit}, data) {
		commit('updateAlert', data);
		setTimeout(() => {
			commit('resetAlert')
		}, 5000);
	}
}