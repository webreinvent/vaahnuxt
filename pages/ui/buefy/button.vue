<template>

  <div>

    <Button></Button>

  </div>

</template>

<script>
  import Button from '../../../ui/buefy/pages/button'

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block',
      }
    },
    components: {
      Button
    },
    methods:{
    },

  }

</script>
