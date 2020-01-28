<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/radio'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block- Radio',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
