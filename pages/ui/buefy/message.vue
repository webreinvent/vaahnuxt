<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/message'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Message',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
