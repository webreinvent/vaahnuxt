<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/steps'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Steps',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
