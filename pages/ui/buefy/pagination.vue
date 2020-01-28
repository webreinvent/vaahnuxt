<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/pagination'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block - Pagination',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
