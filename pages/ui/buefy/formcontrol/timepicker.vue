<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/timepicker'

  export default {
    layout: 'ui/buefy',
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
