<template>

  <div>

    <Block></Block>

  </div>

</template>

<script>
  import Block from '../../../../ui/bulma/pages/components/breadcrumbs'

  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Bulma UI Blocks',
      }
    },
    components: {
      Block
    },
    methods:{
    },

  }

</script>
