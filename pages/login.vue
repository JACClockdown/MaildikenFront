<template>
  <section class="section">
    <div class="container mt-5">
      <div class="col-mb-10">
        <div class="col-mb-4">

        </div>
        <div class="col-mb-4">
          <div class="card text-white bg-light mb-3" >
            <div class="card-header" style="background-color: #FF5733">
              <center>
                <img src="@/assets/images/logo-diken-30-aniversario.png" alt="">
              </center>  
            </div>
            <div class="card-body" style="background-color: #FA947E">
              <form method="post" @submit.prevent="login">
                <div class="field">
                  <label class="label" style="color:black">Email</label>
                  <div class="control">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      v-model="form.email"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label" style="color:black">Password</label>
                  <div class="control">
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      v-model="form.password"
                    />
                  </div>
                </div>
                <div class="control">
                  <br>
                  <button type="submit" class="btn btn-info">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-mb-4">

        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods:{
    async login() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.form })
        
      } catch (err) {
        console.log('Credenciales de acceso incorrectas');
      }
    }
  }

}
</script>