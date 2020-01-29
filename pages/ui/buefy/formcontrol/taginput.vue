<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/taginput'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Taginput',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
