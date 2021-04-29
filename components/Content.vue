<template>
    <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
            <!-- Begin Page Content -->   
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "Templates",
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

  data(){
      return{
        data:[],
        total_data: 0
      }
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.push('/login')
    },

    async init() {
        let data = await this.$axios.$get('http://127.0.0.1:8000/api/templates');
        return { data: data.templates }
        
    }

  },
  async fetch() {
    await this.init();
  }
}
</script>
