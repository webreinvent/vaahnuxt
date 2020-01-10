<template>
  <div class="main-content">


    <section class="section">

      <div class="columns is-mobile">
        <div class="column">
          <h1 class="title">UI Blocks</h1>
        </div>

      </div>

    </section>



    <section>

      <b-tabs >
        <b-tab-item label="Preview">
          <Button></Button>
        </b-tab-item>

        <b-tab-item label="Code">

          <div class="docs code">


            <b-button type="is-text">
              <vh-copy
                :data="hello"
                :label="'copy'"
                :confirm_dialog="'buefy'">
              </vh-copy>
            </b-button>

            <pre v-highlightjs="hello">
            <code class="vue">
            </code>
          </pre>

          </div>

        </b-tab-item>

      </b-tabs>

    </section>


  </div>



</template>

<script>

  import Button from '../../../ui/buefy/components/Buttons/Button'
  import ButtonCode from "!raw-loader!../../../ui/buefy/components/Buttons/Button";


  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'UI Block',
      }
    },
    computed: {
      hello() {
        return ButtonCode
      }
    },
    components: {
      Button,
    },
    methods:{
    },

  }
</script>
