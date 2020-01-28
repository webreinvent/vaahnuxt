<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/progress'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block - Progress',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
