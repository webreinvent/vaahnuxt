<template>

  <section class="docs section">

    <p class="title is-4">
      <a :href="'#'+link" class="">#</a>
      <a :name="link"></a>
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
  let slugify = require('slugify')
  export default {
    props: ['name', 'code'],
    components:{
    },
    data(){

      let obj = {
        link: null,
      };

      return obj;

    },
    mounted () {
      this.link = slugify(this.name.toLowerCase());
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
