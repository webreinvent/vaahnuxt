<template>
  <div>

    <TopMenu></TopMenu>

    <nuxt />

    <Footer></Footer>

  </div>
</template>

<script>

import TopMenu from './../components/partials/TopMenu'
import Footer from './../components/partials/Footer'

export default {
    components:{
      TopMenu,
      Footer,
    },

    data () {
      return {

      }
    }
}
</script>
