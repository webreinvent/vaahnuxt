<template>

  <section>

    <p class="title">
      <a :href="'#'+name.toLowerCase()" class="">#</a>
      <a :name="name.toLowerCase()"></a>
      {{name}}
    </p>

    <b-tabs :animated="false">
      <b-tab-item label="Preview">
        <slot></slot>
      </b-tab-item>

      <b-tab-item label="Code">

        <div class="docs code">

          <b-button type="is-text">
            <vh-copy
              :data="code"
              :label="'copy'"
              :confirm_dialog="'buefy'">
            </vh-copy>
          </b-button>

          <pre v-highlightjs="code">
            <code class="vue">
            </code>
          </pre>

        </div>

      </b-tab-item>

    </b-tabs>




  </section>

</template>

<script>

  export default {
    props: ['name', 'code'],
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
