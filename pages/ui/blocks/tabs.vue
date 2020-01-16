<template>
  <div class="main-content">

    <SectionTitle title="VaahNuxt - UI Blocks">
    </SectionTitle>



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

  import ServicesLoopTabsAndPills from "../../../ui/blocks/ServicesLoopTabsAndPills";
  import ServicesLoopTabsAndPillsCode from "!raw-loader!../../../ui/blocks/ServicesLoopTabsAndPills";

  import ServicesLoopTabsAndPillsHorizontalWithAccodian from "../../../ui/blocks/ServicesLoopTabsAndPillsHorizontalWithAccodian";
  import ServicesLoopTabsAndPillsHorizontalWithAccodianCode from "!raw-loader!../../../ui/blocks/ServicesLoopTabsAndPillsHorizontalWithAccodian";

  import ServicesLoopTabsAndPillsHorizontal from "../../../ui/blocks/ServicesLoopTabsAndPillsHorizontal";
  import ServicesLoopTabsAndPillsHorizontalCode from "!raw-loader!../../../ui/blocks/ServicesLoopTabsAndPillsHorizontal";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
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
