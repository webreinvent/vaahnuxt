<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/tag'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Tag',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
