<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/datetimepicker'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block- Datetimepicker',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
