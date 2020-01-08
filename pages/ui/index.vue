<template>
  <section class="section">
    <div class="columns is-mobile">

      <h1>Buefy UI Elements</h1>

    </div>
  </section>
</template>

<script>

  export default {
    name: 'HomePage',

    components: {

    },
    methods:{
      clickMe: function () {

        this.$vaah.toastErrors(['testing'])
        this.$vaah.toastSuccess(['testing'])

      }
    }
  }
</script>
