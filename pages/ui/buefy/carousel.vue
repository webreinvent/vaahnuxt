<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/carousel'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Carousel',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
