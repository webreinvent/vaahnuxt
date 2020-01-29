<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/counter'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- Counter',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
