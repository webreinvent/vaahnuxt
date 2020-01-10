<template>

  <div class="main-content">

    <section class="section">
    <div class="columns is-mobile">

      <h1 class="title">Buefy UI Blocks</h1>

    </div>
  </section>


    <SectionCode name="Button" :code="ButtonCode">
      <Button></Button>
    </SectionCode>


    <SectionCode name="Types and states" :code="TypesAndStatesCode">
      <TypesAndStates></TypesAndStates>
    </SectionCode>


  </div>

</template>

<script>

  import SectionCode from '../../../ui/resuable/SectionCode'

  import Button from '../../../ui/buefy/components/Buttons/Button'
  import TypesAndStates from '../../../ui/buefy/components/Buttons/TypesAndStates'
  import ButtonCode from "!raw-loader!../../../ui/buefy/components/Buttons/Button";
  import TypesAndStatesCode from "!raw-loader!../../../ui/buefy/components/Buttons/TypesAndStates";


  export default {
    layout: 'ui/buefy',
    head () {
      return {
        title: 'Buefy UI Block',
      }
    },
    computed: {
      ButtonCode() {return ButtonCode},
      TypesAndStatesCode() {return TypesAndStatesCode},
    },
    components: {
      SectionCode,
      Button,
      TypesAndStates,
    },
    methods:{

    },

  }
</script>
