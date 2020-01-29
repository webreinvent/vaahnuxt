<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/table'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Table',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
