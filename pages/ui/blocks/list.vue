<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/list'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- List',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
