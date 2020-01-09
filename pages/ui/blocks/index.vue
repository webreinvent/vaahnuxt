<template>
  <div class="main-content">


    <section class="section">

      <div class="columns is-mobile">
        <div class="column">
          <h1 class="title">UI Blocks</h1>
        </div>

      </div>

    </section>


    <hr/>
    Code View<br/>
    <div v-html="hello"></div>


    <hr/>



        <section>

          <b-tabs >
            <b-tab-item label="Preview">
              <Button></Button>
            </b-tab-item>

            <b-tab-item label="Code">
              Lorem <br>
              ipsum <br>
              dolor <br>
              sit <br>
              amet.
            </b-tab-item>



          </b-tabs>
        </section>


  </div>



</template>

<script>

  import Button from '../../../ui/buefy/components/Buttons/Button'
  import readme from './readme.md';
  import md_button from '../../../ui/buefy/components/Buttons/Button.vue.md';


  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'UI Block',
      }
    },
    computed: {
      hello() {
        return md_button
      }
    },
    components: {
      Button,
    },
    methods:{
    },

  }
</script>
