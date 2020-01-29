<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/others'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- Blocks',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
