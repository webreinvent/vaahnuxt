<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/cheatsheet'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'VaahNuxt UI components- Cheatsheet',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
