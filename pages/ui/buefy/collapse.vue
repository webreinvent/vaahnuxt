<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/collapse'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Collapse',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
