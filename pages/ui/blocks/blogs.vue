<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/blocks/pages/blogs'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- Blogs',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
