<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/button'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
