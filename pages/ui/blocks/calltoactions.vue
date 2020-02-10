<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/calltoactions'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- Calltoactions',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
