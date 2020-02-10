<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/menu'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Menu',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
