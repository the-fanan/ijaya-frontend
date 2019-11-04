export const state = () => ({
  
})

export const actions = {
	handleErrors ({commit, dispatch}, error) {
		console.log(error)
		if (error.response !== undefined) {
			let messages = [];
			if (error.response.data.errors) {
				for(let errorField in error.response.data.errors) {
					messages.push(error.response.data.errors[errorField][0]);
				}
			}
			dispatch('alert/showAlert', {type:"error", messages: messages, heading: error.response.data.message}, { root: true } )
		} else {
			dispatch('alert/showAlert', {type:"error", messages:[], heading: "An error occurred, please try again."}, { root: true } )
		}	
	}
}