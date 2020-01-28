<template>
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



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import ServicesLoopTabsAndPills from "../../../ui/blocks/components/ServicesLoopTabsAndPills";
  import ServicesLoopTabsAndPillsCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTabsAndPills";

  import ServicesLoopTabsAndPillsHorizontalWithAccodian from "../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontalWithAccodian";
  import ServicesLoopTabsAndPillsHorizontalWithAccodianCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontalWithAccodian";

  import ServicesLoopTabsAndPillsHorizontal from "../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontal";
  import ServicesLoopTabsAndPillsHorizontalCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTabsAndPillsHorizontal";



  export default {
    layout: 'ui/blocks',
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
      SectionTitle,
      SectionCode,
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
