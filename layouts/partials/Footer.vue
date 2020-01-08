<template>

  <div>

    <div class="columns">
      <div class="column has-text-centered">

        <div class="versions ">
          {{pkg.name}} v{{pkg.version}}
          | {{buefy.name}} v{{buefy.version}}
          | {{bulma.name}} v{{bulma.version}}
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
