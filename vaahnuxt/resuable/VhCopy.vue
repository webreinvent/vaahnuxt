<template>

  <b-button type="is-text" size="is-small">

    <b-icon size="is-small" icon="content-copy"></b-icon>

    <vh-copy
      :data="data"
      :label="'copy'"
      :confirm_dialog="'buefy'"
      class="content has-text-right ">
    </vh-copy>

  </b-button>

</template>

<script>

  export default {
    props: ['data'],
    components:{
    },
    data(){

      let obj = {};

      return obj;

    }
  }
</script>

<style scoped>

</style>
