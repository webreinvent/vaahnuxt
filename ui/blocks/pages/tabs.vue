<template>


 <div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


    <div class="main-content">


    <SectionCode name="ServicesLoopTabsAndPills UI Block" :code="ServicesLoopTabsAndPillsCode">
      <ServicesLoopTabsAndPills :content="c.ServicesLoopTabsAndPills"></ServicesLoopTabsAndPills>
    </SectionCode>



    <SectionCode name="ServicesLoopTabsAndPillsHorizontal UI Block" :code="ServicesLoopTabsAndPillsHorizontalCode">
      <ServicesLoopTabsAndPillsHorizontal :content="c.ServicesLoopTabsAndPillsHorizontal"></ServicesLoopTabsAndPillsHorizontal>
    </SectionCode>



    <SectionCode name="ServicesLoopTabsAndPillsHorizontalWithAccodian UI Block" :code="ServicesLoopTabsAndPillsHorizontalWithAccodianCode">
      <ServicesLoopTabsAndPillsHorizontalWithAccodian :content="c.ServicesLoopTabsAndPillsHorizontalWithAccodian"></ServicesLoopTabsAndPillsHorizontalWithAccodian>
    </SectionCode>


  </div>



    <Footer></Footer>


  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import ServicesLoopTabsAndPills from "../../../ui/blocks/components/ServicesLoopTabsAndPills";
  import ServicesLoopTabsAndPillsCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTabsAndPills";

  import ServicesLoopTabsAndPillsHorizontalWithAccodian from "../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontalWithAccodian";
  import ServicesLoopTabsAndPillsHorizontalWithAccodianCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontalWithAccodian";

  import ServicesLoopTabsAndPillsHorizontal from "../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontal";
  import ServicesLoopTabsAndPillsHorizontalCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontal";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- tabs',
      }
    },
    computed: {
      ServicesLoopTabsAndPillsCode() {
        return ServicesLoopTabsAndPillsCode
      },
      ServicesLoopTabsAndPillsHorizontalCode() {
        return ServicesLoopTabsAndPillsHorizontalCode
      },
      ServicesLoopTabsAndPillsHorizontalWithAccodianCode() {
        return ServicesLoopTabsAndPillsHorizontalWithAccodianCode
      }
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      ServicesLoopTabsAndPills,
      ServicesLoopTabsAndPillsHorizontal,
      ServicesLoopTabsAndPillsHorizontalWithAccodian,
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
