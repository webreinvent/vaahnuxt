<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/tabs'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'VaahNuxt UI components- Tabs',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
