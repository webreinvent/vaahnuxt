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



    <SectionCode name="ServicesLoopEight UI Block" :code="ServicesLoopEightCode">
      <ServicesLoopEight :content="c.ServicesLoopEight"></ServicesLoopEight>
    </SectionCode>



    <SectionCode name="ServicesLoopEightLeftImage UI Block" :code="ServicesLoopEightLeftImageCode">
      <ServicesLoopEightLeftImage :content="c.ServicesLoopEightLeftImage"></ServicesLoopEightLeftImage>
    </SectionCode>



    <SectionCode name="ServicesLoopNine UI Block" :code="ServicesLoopNineCode">
      <ServicesLoopNine :content="c.ServicesLoopNine"></ServicesLoopNine>
    </SectionCode>



    <SectionCode name="ServicesLoopTen UI Block" :code="ServicesLoopTenCode">
      <ServicesLoopTen :content="c.ServicesLoopTen"></ServicesLoopTen>
    </SectionCode>



    <SectionCode name="ServicesLoopSeven UI Block" :code="ServicesLoopSevenCode">
      <ServicesLoopSeven :content="c.ServicesLoopSeven"></ServicesLoopSeven>
    </SectionCode>



    <SectionCode name="ServicesLoopOnlyData UI Block" :code="ServicesLoopOnlyDataCode">
      <ServicesLoopOnlyData :content="c.ServicesLoopOnlyData"></ServicesLoopOnlyData>
    </SectionCode>



    <SectionCode name="ServicesLoopThree UI Block" :code="ServicesLoopThreeCode">
      <ServicesLoopThree :content="c.ServicesLoopThree"></ServicesLoopThree>
    </SectionCode>



    <SectionCode name="ServicesLoopThreeOnlyPList UI Block" :code="ServicesLoopThreeOnlyPListCode">
      <ServicesLoopThreeOnlyPList :content="c.ServicesLoopThreeOnlyPList"></ServicesLoopThreeOnlyPList>
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

  import ServicesLoopEight from "../../../ui/blocks/ServicesLoopEight";
  import ServicesLoopEightCode from "!raw-loader!../../../ui/blocks/ServicesLoopEight";

  import ServicesLoopEightLeftImage from "../../../ui/blocks/ServicesLoopEightLeftImage";
  import ServicesLoopEightLeftImageCode from "!raw-loader!../../../ui/blocks/ServicesLoopEightLeftImage";

  import ServicesLoopNine from "../../../ui/blocks/ServicesLoopNine";
  import ServicesLoopNineCode from "!raw-loader!../../../ui/blocks/ServicesLoopNine";

  import ServicesLoopTen from "../../../ui/blocks/ServicesLoopTen";
  import ServicesLoopTenCode from "!raw-loader!../../../ui/blocks/ServicesLoopTen";

  import ServicesLoopSeven from "../../../ui/blocks/ServicesLoopSeven";
  import ServicesLoopSevenCode from "!raw-loader!../../../ui/blocks/ServicesLoopSeven";

  import ServicesLoopOnlyData from "../../../ui/blocks/ServicesLoopOnlyData";
  import ServicesLoopOnlyDataCode from "!raw-loader!../../../ui/blocks/ServicesLoopOnlyData";

  import ServicesLoopThree from "../../../ui/blocks/ServicesLoopThree";
  import ServicesLoopThreeCode from "!raw-loader!../../../ui/blocks/ServicesLoopThree";

  import ServicesLoopThreeOnlyPList from "../../../ui/blocks/ServicesLoopThreeOnlyPList";
  import ServicesLoopThreeOnlyPListCode from "!raw-loader!../../../ui/blocks/ServicesLoopThreeOnlyPList";



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
      },
      ServicesLoopEightCode() {
        return ServicesLoopEightCode
      },
      ServicesLoopEightLeftImageCode() {
        return ServicesLoopEightLeftImageCode
      },
      ServicesLoopNineCode() {
        return ServicesLoopNineCode
      },
      ServicesLoopTenCode() {
        return ServicesLoopTenCode
      },
      ServicesLoopSevenCode() {
        return ServicesLoopSevenCode
      },
      ServicesLoopOnlyDataCode() {
        return ServicesLoopOnlyDataCode
      },
      ServicesLoopThreeCode() {
        return ServicesLoopThreeCode
      },
      ServicesLoopThreeOnlyPListCode() {
        return ServicesLoopThreeOnlyPListCode
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
      ServicesLoopEight,
      ServicesLoopEightLeftImage,
      ServicesLoopNine,
      ServicesLoopTen,
      ServicesLoopSeven,
      ServicesLoopOnlyData,
      ServicesLoopThree,
      ServicesLoopThreeOnlyPList,
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
