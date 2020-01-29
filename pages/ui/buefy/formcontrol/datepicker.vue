<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/datepicker'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Datepicker',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
