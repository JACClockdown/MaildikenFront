<template>
  <section class="section">
    <div class="col-md-12" style="background: #0767c6 0 0 no-repeat padding-box">
      <div class="row">
        <div class="col-md-3" style="background: #fff; border-radius: 0 0 100px 0; position: relative;">
          <img src="@/assets/images/logo-diken-30-aniversario.png" alt="" width="150px" height="50px">
        </div> 
      </div>
    </div>
    <div class="container mt-5" >
      <div class="row">

        <div class="col-md-4">
          
        </div>

        <div class="col-md-4 sub-container">
          <div class="card text-white bg-light mt-3 mb-3" >

            <div class="card-header" style="background-color: #FF5733">
              <img src="@/assets/images/logo-diken-30-aniversario.png" alt="" class='img-card'>
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

        <div class="col-md-4">
          
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
<style>
.img-card{
  max-width: 100%;
  height: auto;
}
.sub-container{
  background: orange;
  border-radius: 10px 10px 10px 10px;
}
</style>