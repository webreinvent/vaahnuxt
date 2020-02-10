<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/input'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Input',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
