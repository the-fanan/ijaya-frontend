export const state = () => ({
	show: false,
	type: "",
	heading: "",
	messages: [],
})

export const mutations = {
	updateAlert (state, data) {
		state.show = true
		state.type = data.type
		state.messages = data.messages
		state.heading = data.heading
	},
	resetAlert (state) {
		state.show = false
		state.type = ""
		state.heading = ""
		state.messages = []
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