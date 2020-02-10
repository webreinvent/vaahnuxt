<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/loading'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Loading',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
