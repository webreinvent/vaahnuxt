<template>
  <div class="main-content">



    <SectionCode name="ServicesLoopPricingFourColumns UI Block" :code="ServicesLoopPricingFourColumnsCode">
      <ServicesLoopPricingFourColumns :content="c.ServicesLoopPricingFourColumns"></ServicesLoopPricingFourColumns>
    </SectionCode>



    <SectionCode name="ServicesLoopPricingThreeColumns UI Block" :code="ServicesLoopPricingThreeColumnsCode">
      <ServicesLoopPricingThreeColumns :content="c.ServicesLoopPricingThreeColumns"></ServicesLoopPricingThreeColumns>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import ServicesLoopPricingFourColumns from "../../../ui/blocks/ServicesLoopPricingFourColumns";
  import ServicesLoopPricingFourColumnsCode from "!raw-loader!../../../ui/blocks/ServicesLoopPricingFourColumns";

  import ServicesLoopPricingThreeColumns from "../../../ui/blocks/ServicesLoopPricingThreeColumns";
  import ServicesLoopPricingThreeColumnsCode from "!raw-loader!../../../ui/blocks/ServicesLoopPricingThreeColumns";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      ServicesLoopPricingFourColumnsCode() {
        return ServicesLoopPricingFourColumnsCode
      },
      ServicesLoopPricingThreeColumnsCode() {
        return ServicesLoopPricingThreeColumnsCode
      }
    },
    components: {
      SectionTitle,
      SectionCode,
      ServicesLoopPricingFourColumns,
      ServicesLoopPricingThreeColumns,
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
