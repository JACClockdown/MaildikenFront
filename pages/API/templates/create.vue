<template>
    <body id="page-top">
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <h3>Templates</h3>
            <hr>
            <div class="card">
              <div class="card-header">
                <h2>Create New Template</h2>
              </div>
              <div class="card-body">
                <form action="" @submit="post">
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" name="name" v-model="formData.name" class="form-control" placeholder="Name template" required>
                    </div>
                    <div class="form-group">
                        <label for="name">Content:</label>
                        <textarea name="content" v-model="formData.content" class="form-control" id="" cols="30" rows="10" placeholder="Content Template" required>

                        </textarea>
                    </div>
                    <div class="form-group">
                      <input type="hidden" name="client_id">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Save Template...</button>
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
        name: "",
        content: "",
        client_id: 1
      }
    }
  },

  methods:{
    async post(e){

      
      e.preventDefault();
      
      try{
        let template = await this.$axios.$post('http://127.0.0.1:8000/api/template', this.formData)
        this.$router.push('/API/templates/');
      }catch(e){
        console.log("Error al crear template")
      }

    }
  }
}
</script>
