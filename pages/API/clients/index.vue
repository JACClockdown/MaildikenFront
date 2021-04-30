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
                                <a href="/API/clients/create">
                                    <button class="btn btn-info">Create new client</button>
                                </a>
                            </div>
                            <div class="card-body">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>#ID</th>
                                            <th>Name</th>
                                            <th>Rol</th>
                                            <th>Address</th>
                                            <th>
                                                Options
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="i in client" :key="i.id">
                                            <td>
                                                {{ i.id }}
                                            </td>
                                            <td>
                                                {{ i.name }}
                                            </td>
                                            <td>
                                                {{ i.rol }}
                                            </td>
                                            <td>
                                                {{ i.adress }}
                                            </td>
                                            <td>
                                                <nuxt-link class="btn btn-info" :to="{ path: 'update', query: { id: i.id }}">
                                                        Edit
                                                </nuxt-link>
                                                &nbsp;
                                                <a @click="deleteClient(i.id)" class="btn btn-danger">
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
    name:'Client',

    middleware: ['auth'],
    head() {
        return {
            title: 'Diken - Dashboard',
        }
    },

    data(){
        return{
            client: null
        }
    },

    methods:{
        async clients(){
            let client = await this.$axios.$get('http://127.0.0.1:8000/api/clients');
            this.client = client.clients
            console.log(this.client)
        },
        async deleteClient(id){
            let deltemplate = await this.$axios.$delete('http://127.0.0.1:8000/api/clients/'+id)
            this.$router.push('/API/clients/');
        }
    },

    async fetch(){
    await this.clients();
  }
}
</script>
