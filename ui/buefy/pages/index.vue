<template>

  <div class="main-content">

    <section class="section">
    <div class="columns is-mobile">

      <h1>Buefy UI Blocks</h1>

    </div>
  </section>

    <section>

      <p class="title">
        <a href="#dynamic" class="">#</a>
        <a name="dynamic"></a>
        Dynamic
      </p>

      <b-tabs :animated="false">
        <b-tab-item label="Preview">
          <Button></Button>
        </b-tab-item>

        <b-tab-item label="Code">

          <div class="docs code">


            <b-button type="is-text">
              <vh-copy
                :data="ButtonCode"
                :label="'copy'"
                :confirm_dialog="'buefy'">
              </vh-copy>
            </b-button>

            <pre v-highlightjs="ButtonCode">
            <code class="vue">
            </code>
          </pre>

          </div>

        </b-tab-item>

      </b-tabs>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </section>

  </div>

</template>

<script>

  import Button from '../../../ui/buefy/components/Buttons/Button'
  import ButtonCode from "!raw-loader!../../../ui/buefy/components/Buttons/Button";

  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy Block',
      }
    },
    computed: {
      ButtonCode() {
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
