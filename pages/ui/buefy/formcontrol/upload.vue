<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/upload'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Upload',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
