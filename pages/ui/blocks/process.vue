<template>
  <div class="main-content">


    <SectionCode name="Process UI Block" :code="ProcessCode">
      <Process :content="c.Process"></Process>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Process from "../../../ui/blocks/Process";
  import ProcessCode from "!raw-loader!../../../ui/blocks/Process";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      ProcessCode() {
        return ProcessCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      Process,
    },
    data(){
      let obj = {
        c: content
      };
      return obj;
    },
    methods:{
    },

  }
</script>
