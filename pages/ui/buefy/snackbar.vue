<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/snackbar'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Snackbar',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
