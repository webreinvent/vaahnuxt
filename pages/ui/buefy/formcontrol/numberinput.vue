<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/numberinput'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Numberinput',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
