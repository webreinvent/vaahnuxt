<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/dialog'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block - Dialog',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
