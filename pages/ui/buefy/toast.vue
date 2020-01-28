<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/toast'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block - Toast',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
