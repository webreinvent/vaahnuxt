<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/faq'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- FAQ',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
