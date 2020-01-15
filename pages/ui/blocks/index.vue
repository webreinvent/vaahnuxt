<template>
  <div class="main-content">

    <SectionTitle title="VaahNuxt - UI Blocks">
    </SectionTitle>



    <SectionCode name="SectionHPLImageLeft UI Block" :code="SampleCode">
      <Sample :content="c.SectionHPLImageLeft"></Sample>
    </SectionCode>



    <SectionCode name="SectionHPLImageRight UI Block" :code="SectionHPLImageRightCode">
      <SectionHPLImageRight :content="c.SectionHPLImageRight"></SectionHPLImageRight>
    </SectionCode>



    <SectionCode name="SectionHPImageSmallLeft UI Block" :code="SectionHPImageSmallLeftCode">
      <SectionHPImageSmallLeft :content="c.SectionHPImageSmallLeft"></SectionHPImageSmallLeft>
    </SectionCode>



    <SectionCode name="SectionHPListImageRight UI Block" :code="SectionHPListImageRightCode">
      <SectionHPListImageRight :content="c.SectionHPListImageRight"></SectionHPListImageRight>
    </SectionCode>



    <SectionCode name="ServiceLoopFour UI Block" :code="ServiceLoopFourCode">
      <ServiceLoopFour :content="c.ServiceLoopFour"></ServiceLoopFour>
    </SectionCode>



    <SectionCode name="ServicesBigImageWithBox UI Block" :code="ServicesBigImageWithBoxCode">
      <ServicesBigImageWithBox :content="c.ServicesBigImageWithBox"></ServicesBigImageWithBox>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Sample from "../../../ui/blocks/Sample";
  import SampleCode from "!raw-loader!../../../ui/blocks/Sample";

  import SectionHPLImageRight from "../../../ui/blocks/SectionHPLImageRight";
  import SectionHPLImageRightCode from "!raw-loader!../../../ui/blocks/SectionHPLImageRight";

  import SectionHPImageSmallLeft from "../../../ui/blocks/SectionHPImageSmallLeft";
  import SectionHPImageSmallLeftCode from "!raw-loader!../../../ui/blocks/SectionHPImageSmallLeft";

  import SectionHPListImageRight from "../../../ui/blocks/SectionHPListImageRight";
  import SectionHPListImageRightCode from "!raw-loader!../../../ui/blocks/SectionHPListImageRight";

  import ServiceLoopFour from "../../../ui/blocks/ServiceLoopFour";
  import ServiceLoopFourCode from "!raw-loader!../../../ui/blocks/ServiceLoopFour";

  import ServicesBigImageWithBox from "../../../ui/blocks/ServicesBigImageWithBox";
  import ServicesBigImageWithBoxCode from "!raw-loader!../../../ui/blocks/ServicesBigImageWithBox";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      SampleCode() {
        return SampleCode
      },
      SectionHPLImageRightCode() {
        return SectionHPLImageRightCode
      },
      SectionHPImageSmallLeftCode() {
        return SectionHPImageSmallLeftCode
      },
      SectionHPListImageRightCode() {
        return SectionHPListImageRightCode
      },
      ServiceLoopFourCode() {
        return ServiceLoopFourCode
      },
      ServicesBigImageWithBoxCode() {
        return ServicesBigImageWithBoxCode
      }
    },
    components: {
      SectionHPLImageRight,
      SectionHPImageSmallLeft,
      ServicesBigImageWithBox,
      SectionHPListImageRight,
      ServiceLoopFour,
      SectionTitle,
      SectionCode,
      Sample,
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
