<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/docs/pages/index'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Docs',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
