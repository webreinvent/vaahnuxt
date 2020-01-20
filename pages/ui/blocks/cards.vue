<template>
  <div class="main-content">


    <SectionCode name="ServiceFeatures UI Block" :code="ServiceFeaturesCode">
      <ServiceFeatures :content="c.ServiceFeatures"></ServiceFeatures>
    </SectionCode>



    <SectionCode name="ServicesBigColorBoxes UI Block" :code="ServicesBigColorBoxesCode">
      <ServicesBigColorBoxes :content="c.ServicesBigColorBoxes"></ServicesBigColorBoxes>
    </SectionCode>



    <SectionCode name="ServicesCardWithLeftImage UI Block" :code="ServicesCardWithLeftImageCode">
      <ServicesCardWithLeftImage :content="c.ServicesCardWithLeftImage"></ServicesCardWithLeftImage>
    </SectionCode>



    <SectionCode name="ServicesCardWithLeftRoundImage UI Block" :code="ServicesCardWithLeftRoundImageCode">
      <ServicesCardWithLeftRoundImage :content="c.ServicesCardWithLeftRoundImage"></ServicesCardWithLeftRoundImage>
    </SectionCode>



    <SectionCode name="ServicesLoop UI Block" :code="ServicesLoopCode">
      <ServicesLoop :content="c.ServicesLoop"></ServicesLoop>
    </SectionCode>



    <SectionCode name="ServicesLoopBackgroundImage UI Block" :code="ServicesLoopBackgroundImageCode">
      <ServicesLoopBackgroundImage :content="c.ServicesLoopBackgroundImage"></ServicesLoopBackgroundImage>
    </SectionCode>



    <SectionCode name="ServicesLoopBackgroundImageAndBoxes UI Block" :code="ServicesLoopBackgroundImageAndBoxesCode">
      <ServicesLoopBackgroundImageAndBoxes :content="c.ServicesLoopBackgroundImageAndBoxes"></ServicesLoopBackgroundImageAndBoxes>
    </SectionCode>



    <SectionCode name="ServicesLoopRightImage UI Block" :code="ServicesLoopRightImageCode">
      <ServicesLoopRightImage :content="c.ServicesLoopRightImage"></ServicesLoopRightImage>
    </SectionCode>



    <SectionCode name="ServicesLoopSix UI Block" :code="ServicesLoopSixCode">
      <ServicesLoopSix :content="c.ServicesLoopSix"></ServicesLoopSix>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import ServiceFeatures from "../../../ui/blocks/ServiceFeatures";
  import ServiceFeaturesCode from "!raw-loader!../../../ui/blocks/ServiceFeatures";

  import ServicesBigColorBoxes from "../../../ui/blocks/ServicesBigColorBoxes";
  import ServicesBigColorBoxesCode from "!raw-loader!../../../ui/blocks/ServicesBigColorBoxes";

  import ServicesCardWithLeftImage from "../../../ui/blocks/ServicesCardWithLeftImage";
  import ServicesCardWithLeftImageCode from "!raw-loader!../../../ui/blocks/ServicesCardWithLeftImage";

  import ServicesCardWithLeftRoundImage from "../../../ui/blocks/ServicesCardWithLeftRoundImage";
  import ServicesCardWithLeftRoundImageCode from "!raw-loader!../../../ui/blocks/ServicesCardWithLeftRoundImage";

  import ServicesLoop from "../../../ui/blocks/ServicesLoop";
  import ServicesLoopCode from "!raw-loader!../../../ui/blocks/ServicesLoop";

  import ServicesLoopBackgroundImage from "../../../ui/blocks/ServicesLoopBackgroundImage";
  import ServicesLoopBackgroundImageCode from "!raw-loader!../../../ui/blocks/ServicesLoopBackgroundImage";

  import ServicesLoopBackgroundImageAndBoxes from "../../../ui/blocks/ServicesLoopBackgroundImageAndBoxes";
  import ServicesLoopBackgroundImageAndBoxesCode from "!raw-loader!../../../ui/blocks/ServicesLoopBackgroundImageAndBoxes";

  import ServicesLoopRightImage from "../../../ui/blocks/ServicesLoopRightImage";
  import ServicesLoopRightImageCode from "!raw-loader!../../../ui/blocks/ServicesLoopRightImage";

  import ServicesLoopSix from "../../../ui/blocks/ServicesLoopSix";
  import ServicesLoopSixCode from "!raw-loader!../../../ui/blocks/ServicesLoopSix";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      ServiceFeaturesCode() {
        return ServiceFeaturesCode
      },
      ServicesBigColorBoxesCode() {
        return ServicesBigColorBoxesCode
      },
      ServicesCardWithLeftImageCode() {
        return ServicesCardWithLeftImageCode
      },
      ServicesCardWithLeftRoundImageCode() {
        return ServicesCardWithLeftRoundImageCode
      },
      ServicesLoopCode() {
        return ServicesLoopCode
      },
      ServicesLoopBackgroundImageCode() {
        return ServicesLoopBackgroundImageCode
      },
      ServicesLoopBackgroundImageAndBoxesCode() {
        return ServicesLoopBackgroundImageAndBoxesCode
      },
      ServicesLoopRightImageCode() {
        return ServicesLoopRightImageCode
      },
      ServicesLoopSixCode() {
        return ServicesLoopSixCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      ServiceFeatures,
      ServicesBigColorBoxes,
      ServicesCardWithLeftImage,
      ServicesCardWithLeftRoundImage,
      ServicesLoop,
      ServicesLoopBackgroundImage,
      ServicesLoopBackgroundImageAndBoxes,
      ServicesLoopRightImage,
      ServicesLoopSix,
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
