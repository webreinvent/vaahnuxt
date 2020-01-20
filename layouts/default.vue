<template>
  <div>

    <TopMenu></TopMenu>

    <nuxt />

    <UIFooter></UIFooter>

  </div>
</template>

<script>

import TopMenu from './../components/partials/TopMenu'
import UIFooter from './../ui/partials/Footer'

export default {
    components:{
      TopMenu,
      UIFooter,
    },

    data () {
      return {

      }
    }
}
</script>
