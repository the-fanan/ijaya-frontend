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
                    <input class="form-control" placeholder="Name"/>
                  </div>
                  <div class="form-group">
                    <input class="form-control" placeholder="Email Address"/>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Message"></textarea>
                  </div>
                  <div class="form-group">
                    <button>Contact Us</button>
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
export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  computed: {
   
  },
  methods: {
   
  },
  components: {
  },
  head: {
    title: 'Contact Ijaya'
  }
}
</script>