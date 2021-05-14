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
                    <form action="" :data='data' :key="data.id">
                      <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" class="form-control"  placeholder="Name Template" v-model="data.name"  />
                      </div>
                      <div class="form-group">
                        <label for="name">Content:</label>
                        <client-only placeholder="loading..." >
                          <ckeditor-nuxt :config="editorConfig"  v-model="data.content" />
                        </client-only>
                      </div>
                      <div class="form-group">
                        <button class="btn btn-warning" type="submit" @click="updateTemplate" >Update Template...</button>
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
            data: [],
            form: {
              name: "",
              content: ""
            },
            editorConfig: {
              simpleUpload: {
                uploadUrl: 'http://127.0.0.1:8000/api/mailImage',
                headers: {
                  'Authorization':this.$auth.getToken('local'),
                  'content-type': 'multipart/form-data'
                }
              }
            }
        }
    },
    methods:{
      
        async template(){
            const template = await this.$axios.get('http://127.0.0.1:8000/api/template/'+this.id)
            //console.log(template.data.template)
            //this.data = template.data.template
            //console.log(template.data.template)
            this.data = template.data.template
 
            
            //console.log(this.$auth.strategy)
            
            
        },
        async updateTemplate(e){
          e.preventDefault();
          let template = await this.$axios.put('http://127.0.0.1:8000/api/template/'+this.id, this.data)
          console.log(template)
          this.$router.push('/API/templates/');
        }
    },

    async fetch(){
        await this.template();
    }
}
</script>
