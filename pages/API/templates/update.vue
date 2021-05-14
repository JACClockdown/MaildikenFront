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
                        <input type="text" class="form-control"  placeholder="Name Template" v-model="item.name" />
                        
                    </div>
                    <div class="form-group">
                        <label for="name">Content:</label>
                        <client-only placeholder="loading..." >
                          <ckeditor-nuxt  :config="editorConfig"  v-model="item.content"/>
                        </client-only>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-warning id" type="submit" @click="updateTemplate" >Update Template...</button>
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

import $ from 'jquery';

export default {
  
    name: "Update",
    middleware: ['auth'],
    components: {
      'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
    },
    head () {
      return {
        title: 'Diken - Dashboard',
      }
    },

    data() {
        return{
            id: this.$route.query.id,
            data: null,
            form: {
              name: "",
              content: ""
            }
        }
    },
    mounted() {
      $('.id').on('click',function(){
        alert("Console")
      })
    },
    methods:{
      
        async template(){
            let template = await this.$axios.get('http://127.0.0.1:8000/api/template/'+this.id)
            console.log(template)
            //this.data = template.data.template
        },
        async updateTemplate(e){
          e.preventDefault();

          let template = await this.$axios.put('http://127.0.0.1:8000/api/template/'+this.id, this.data[0])
          console.log(template)
          //this.$router.push('/API/templates/');
        }
    },

    async fetch(){
        await this.template();
    }
}
</script>
