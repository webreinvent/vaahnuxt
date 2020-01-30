<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/cards-two'

  export default {
    layout: 'ui',
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
