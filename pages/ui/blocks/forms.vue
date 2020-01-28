<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/forms'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'VaahNuxt UI components- Forms',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
