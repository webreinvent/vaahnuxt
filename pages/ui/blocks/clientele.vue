<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/clientele'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'VaahNuxt UI components- Clientele',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
