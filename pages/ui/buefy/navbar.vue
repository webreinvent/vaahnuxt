<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/navbar'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block - Navbar',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
