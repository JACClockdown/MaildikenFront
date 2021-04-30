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
                  Template {{ $route.query.id }}
                </div>
                <div class="card-body">
                  <form action="" v-for="item in data" :key="item.id">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" :value= item.name placeholder="Name Template">
                    </div>
                    <div class="form-group">
                        <label for="name">Content:</label>
                        <textarea class="form-control" name="" id="" cols="30" rows="10" :value= item.content>

                        </textarea>
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
        async template(){
            let template = await this.$axios.get('http://127.0.0.1:8000/api/template/'+this.id)
            this.data = template.data.template
        }
    },

    async fetch(){
        await this.template();
    }
}
</script>
