<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/buefy/pages/formcontrol/select'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block- Select',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
