<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../ui/buefy/pages/notification'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Buefy UI Block - Notification',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
