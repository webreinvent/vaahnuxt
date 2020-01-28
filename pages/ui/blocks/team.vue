<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/team'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'VaahNuxt UI components- Team',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
