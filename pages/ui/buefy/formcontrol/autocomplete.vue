<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/autocomplete'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Autocomplete',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
