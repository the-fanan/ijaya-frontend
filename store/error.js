export const state = () => ({
  
})

export const actions = {
	handleErrors ({commit, dispatch}, error) {
		console.log(error)
		if (error.response !== undefined) {
			let errorMessage = "";
			if (error.response.data.errors) {
				for(let errorField in error.response.data.errors) {
					errorMessage +=  error.response.data.errors[errorField][0] + " ";
				}
			}
			dispatch('alert/showAlert', {type:"error", message: errorMessage, heading: error.response.data.message}, { root: true } )
		} else {
			dispatch('alert/showAlert', {type:"error", message:"Please try again.", heading: "An error occurred"}, { root: true } )
		}	
	}
}