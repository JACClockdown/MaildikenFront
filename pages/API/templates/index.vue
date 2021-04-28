<template> 
    <Sidebar />
</template>
<script>

import { Contenido } from "../../../components/Content"; 

export default {
   
  middleware: ['auth'],
  head () {
      return {
        title: 'Diken - Dashboard',
      }
  },
    components:{
      Contenido: Contenido
    }
}
</script>
