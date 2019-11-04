<template>
  <b-container :fluid="true">
    <!--heading -->
    <b-row>
      <b-col class="page-heading">
        <h1 class="text-white">Contact Us</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-container>
          <b-row>
            <b-col class="newsletter-section">
              <b-row class="justify-content-center">
                <b-col md="9" cols="12" class="newsletter-input">
                  <div class="form-group">
                    <input :class="'form-control contact-style ' + contact.name.feedbackClass" name="name" placeholder="Name" :value="contact.name.value" @input="handleContactInput"/>
                    <div class="feedback">
                      {{contact.name.feedback}}
                    </div>
                  </div>

                  <div class="form-group">
                    <input :class="'form-control contact-style ' + contact.email.feedbackClass" name="email" placeholder="Email Address" :value="contact.email.value" @input="handleContactInput"/>
                    <div class="feedback">
                      {{contact.email.feedback}}
                    </div>
                  </div>

                  <div class="form-group">
                    <textarea :class="'form-control contact-style ' + contact.message.feedbackClass" name="message" placeholder="Message" :value="contact.message.value" @input="handleContactInput"></textarea>
                    <div class="feedback">
                      {{contact.message.feedback}}
                    </div>
                  </div>
              
                  <div class="form-group">
                    <button @click="sendContactMessage">Contact Us</button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  computed: {
    ...mapState({contact: state => state.contact}),
  },
  methods: {
   ...mapActions({handleContactInput: "contact/handleInput", sendContactMessage: "contact/sendContactMessage"}),
  },
  components: {
  },
  head: {
    title: 'Contact Ijaya Management'
  }
}
</script>