<template>
  <div class="main-content">

    <SectionTitle title="VaahNuxt Cheat Sheet - UI Blocks">
    </SectionTitle>

      <Cheetsheet></Cheetsheet>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Cheetsheet from "../../../ui/blocks/Cheetsheet";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
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
