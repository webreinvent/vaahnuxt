<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/checkbox'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Checkbox',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
