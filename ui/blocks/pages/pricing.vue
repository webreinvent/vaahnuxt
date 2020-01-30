<template>
  <div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


     <div class="main-content">



    <SectionCode name="ServicesLoopPricingFourColumns UI Block" :code="ServicesLoopPricingFourColumnsCode">
      <ServicesLoopPricingFourColumns :content="c.ServicesLoopPricingFourColumns"></ServicesLoopPricingFourColumns>
    </SectionCode>



    <SectionCode name="ServicesLoopPricingThreeColumns UI Block" :code="ServicesLoopPricingThreeColumnsCode">
      <ServicesLoopPricingThreeColumns :content="c.ServicesLoopPricingThreeColumns"></ServicesLoopPricingThreeColumns>
    </SectionCode>


  </div>



    <Footer></Footer>


  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import ServicesLoopPricingFourColumns from "../../../ui/blocks/components/ServicesLoopPricingFourColumns";
  import ServicesLoopPricingFourColumnsCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopPricingFourColumns";

  import ServicesLoopPricingThreeColumns from "../../../ui/blocks/components/ServicesLoopPricingThreeColumns";
  import ServicesLoopPricingThreeColumnsCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopPricingThreeColumns";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- pricing',
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
      ...globalComponents,
      BlockTopMenu,
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
