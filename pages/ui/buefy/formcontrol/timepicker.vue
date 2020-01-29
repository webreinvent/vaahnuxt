<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/timepicker'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Timepicker',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
