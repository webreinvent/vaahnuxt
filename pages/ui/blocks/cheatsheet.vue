<template>
  <div class="main-content">


    <SectionCode name="Cheetsheet UI Block" :code="CheetsheetCode">
      <Cheetsheet></Cheetsheet>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Cheetsheet from "../../../ui/blocks/Cheetsheet";
  import CheetsheetCode from "!raw-loader!../../../ui/blocks/Cheetsheet";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      CheetsheetCode() {
        return CheetsheetCode
      }
    },
    components: {
      SectionTitle,
      SectionCode,
      Cheetsheet,
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
