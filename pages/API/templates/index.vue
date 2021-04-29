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
                <a href="/API/templates/create">
                  <button class="btn btn-info">Create new template</button>
                </a>
              </div>
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>ID#</th>
                      <th>Template Name</th>
                      <th>Content template</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody v-for="item in objectItems" :key="item.id">
                    <tr v-for="i in item" :key="i.id">
                      <td>
                        {{ i.id }}
                      </td>
                      <td>
                        {{ i.name }}
                      </td>
                      <td>
                        {{ i.content }}
                      </td>
                      <td>
                        <nuxt-link class="btn btn-info" :to="{ path: 'update', query: { id: i.id }}">
                          Update
                        </nuxt-link>
                        &nbsp;
                        <a @click="deleteTemplate(i.id)" class="btn btn-danger">
                          Delete 
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  name:'Templates',

  middleware: ['auth'],

  head () {
      return {
        title: 'Diken - Dashboard',
      }
  },

  data(){
    return{
      objectItems: null
    }
  },

  methods:{
    async templates(){
      let templates = await this.$axios.$get('http://127.0.0.1:8000/api/templates')
      this.objectItems = templates;
    },
    async deleteTemplate(id){
      let deltemplate = await this.$axios.$delete('http://127.0.0.1:8000/api/template/'+id)
      this.$router.push('/API/templates/');
    }
  },

  async fetch(){
    await this.templates();
  }

}
</script>
