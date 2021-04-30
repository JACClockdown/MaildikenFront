<template>
    <body id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <h3>Clients</h3>
              <hr>
              <div class="card">
                <div class="card-header">
                  Add New Client
                </div>
                <div class="card-body">
                  <form method="POST" @submit="create_client">
                      <div class="form-group">
                          <label for="">Name:</label>
                          <input type="text" name="name" v-model="formData.name"  class="form-control" required>
                      </div>
                      <div class="form-group">
                          <label for="">Address</label>
                          <input type="text" name="adress" v-model="formData.adress"  class="form-control" required>
                      </div>
                      <div class="form-group">
                          <label for="">Rol Client</label>
                          <input type="text" name="rol" v-model="formData.rol"  class="form-control" required>
                      </div>
                      <div class="form-group">
                          <label for="">Number Client</label>
                          <input type="number" name="number_ceo" v-model="formData.number_ceo"  class="form-control" required>
                      </div>
                      <div class="form-group">
                          <button class="btn btn-success">Create new Client...</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>    
          </div>
        </div>  
      </div>
    </body>
</template>

<script>


export default {
    name: "Create",
    middleware: ['auth'],
    head () {
      return {
        title: 'Diken - Dashboard',
      }
    },
    data() {
        return{
            formData:{
                name:"",
                adress:"",
                rol:"",
                number_ceo:""

            }
        }
    },
    methods:{
        async create_client(e){

            e.preventDefault();

           try{
                let client = await this.$axios.$post('http://127.0.0.1:8000/api/client', this.formData)
                this.$router.push('/API/clients/');
            }catch(e){
                console.log("Error al crear template")
            }
        }
    }
}
</script>
