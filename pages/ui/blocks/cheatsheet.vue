<template>
  <div class="main-content">


    <SectionCode name="Cheetsheet UI Block" >
      <Cheetsheet></Cheetsheet>

    </SectionCode>

  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Cheetsheet from "../../../ui/blocks/components/Cheetsheet";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- cheat sheet',
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
