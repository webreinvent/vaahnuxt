<template>
  <div class="main-content">


    <SectionCode name="Portfolio UI Block" :code="PortfolioCode">
      <Portfolio :content="c.Portfolio"></Portfolio>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Portfolio from "../../../ui/blocks/Portfolio";
  import PortfolioCode from "!raw-loader!../../../ui/blocks/Portfolio";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      PortfolioCode() {
        return PortfolioCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      Portfolio,
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
