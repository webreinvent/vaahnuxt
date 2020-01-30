<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/pricing'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- Pricing',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
