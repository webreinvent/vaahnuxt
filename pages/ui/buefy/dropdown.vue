<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/dropdown'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block - Dropdown',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
