<template>

  <div>

    <div class="columns">
      <div class="column has-text-centered">

        <div class="versions ">

          <b-tag>{{pkg.name}} v{{pkg.version}}</b-tag>
          <b-tag>{{buefy.name}} v{{buefy.version}}</b-tag>
          <b-tag>{{bulma.name}} v{{bulma.version}}</b-tag>
          
        </div>

      </div>
    </div>


  </div>

</template>

<script>
  import pkg from './../../package';
  import buefy from './../../node_modules/buefy/package';
  import bulma from './../../node_modules/bulma/package';
  export default {
    data(){
      let obj = {
        pkg: pkg,
        buefy: buefy,
        bulma: bulma,
      }
      return obj;
    }
  }
</script>

<style scoped>

</style>
