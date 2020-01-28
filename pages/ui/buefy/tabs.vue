<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/tabs'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block - Tabs',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
