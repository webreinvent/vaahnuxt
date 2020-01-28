<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/cards'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'VaahNuxt UI components- Cards',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
