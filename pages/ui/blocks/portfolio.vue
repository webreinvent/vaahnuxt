<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/portfolio'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- Portfolio',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
