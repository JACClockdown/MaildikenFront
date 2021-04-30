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
                  Client {{ $route.query.id }}
                </div>
                <div class="card-body">
                  <form action="" v-for="i in data" :key="i.id">
                      <div class="form-group">
                          <label for="">Name:</label>
                          <input type="text" :value="i.name" class="form-control">
                      </div>
                      <div class="form-group">
                          <label for="">Address</label>
                          <input type="text" :value="i.adress" class="form-control">
                      </div>
                      <div class="form-group">
                          <label for="">Rol Client</label>
                          <input type="text" :value="i.rol" class="form-control">
                      </div>
                      <div class="form-group">
                          <label for="">Number Client</label>
                          <input type="text" :value="i.number_ceo" class="form-control">
                      </div>
                      <div class="form-group">
                          <button class="btn btn-success">Update Client...</button>
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
    name: "Update",
    middleware: ['auth'],
    head () {
      return {
        title: 'Diken - Dashboard',
      }
    },
    data() {
        return{
            id: this.$route.query.id,
            data: null
        }
    },
    methods:{
        async client(){
            let client = await this.$axios.get('http://127.0.0.1:8000/api/clients/'+this.id);
            this.data = client.data.client;
            
        }
    },
    async fetch(){
        await this.client();
    }
}
</script>
