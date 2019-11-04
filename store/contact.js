import axios from "axios";

export const state = () => ({
  email: {value: "", feedback: "", feedbackClass: ""},
  name: {value: "", feedback: "", feedbackClass: ""},
  message: {value: "", feedback: "", feedbackClass: ""},
})

export const mutations = {
  validateInput (state, e) {
    let name = e.target.name
    switch (name) {
      case "email":
        if (state[name].value === null || state[name].value === "") {
          state[name].feedback = "Email addressis required"
          state[name].feedbackClass = "is-invalid"
        } else if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state[name].value.toLowerCase())) {
          state[name].feedback = "Perfect!"
          state[name].feedbackClass = "is-valid"
        }else {
          state[name].feedback = "A valid email address must be provided"
          state[name].feedbackClass = "is-invalid"
        }
        break;
      case "name":
        if (state[name].value === null || state[name].value === "") {
          state[name].feedback = "Your name is required"
          state[name].feedbackClass = "is-invalid"
        } else {
          state[name].feedback = "Looks great!"
          state[name].feedbackClass = "is-valid"
        }
        break;
      case "message":
        if (state[name].value === null || state[name].value === "") {
          state[name].feedback = "A message is required"
          state[name].feedbackClass = "is-invalid"
        } else {
          state[name].feedback = "Okay!"
          state[name].feedbackClass = "is-valid"
        }
        break;
    }
  }, 
  resetContact (state) {
    state.email = {value: "", feedback: "", feedbackClass: ""}
    state.name = {value: "", feedback: "", feedbackClass: ""}
    state.message = {value: "", feedback: "", feedbackClass: ""}
  },
  updateValues (state, e) {
    let name = e.target.name
    let value = e.target.value
    state[name].value = value
  },
}

export const getters = {

}

export const actions = {
	addToNewsLetter({commit, dispatch}) {
    //commit alert
    //if status is suucessful reset contact
    commit('resetContact');
    //dispatch('alert/showAlert', {type:"info", message:"My message", heading: "A heading"}, { root: true } )
  },
  sendContactMessage({commit}) {

  },
  handleInput({commit}, e) {
    commit('updateValues', e);
    commit('validateInput', e);
  },
}