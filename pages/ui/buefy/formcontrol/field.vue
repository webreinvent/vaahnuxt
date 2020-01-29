<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/field'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Field',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
