<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/testimonials'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- Testimonials',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
