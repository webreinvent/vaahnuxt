<template>

  <div>

     <TopMenu></TopMenu>
     <BlockTopMenu></BlockTopMenu>
     <PageHeader></PageHeader>


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

      <Footer></Footer>

   </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import ServiceFeatures from "../../../ui/blocks/components/ServiceFeatures";
  import ServiceFeaturesCode from "!raw-loader!../../../ui/blocks/components/ServiceFeatures";

  import ServicesBigColorBoxes from "../../../ui/blocks/components/ServicesBigColorBoxes";
  import ServicesBigColorBoxesCode from "!raw-loader!../../../ui/blocks/components/ServicesBigColorBoxes";

  import ServicesCardWithLeftImage from "../../../ui/blocks/components/ServicesCardWithLeftImage";
  import ServicesCardWithLeftImageCode from "!raw-loader!../../../ui/blocks/components/ServicesCardWithLeftImage";

  import ServicesCardWithLeftRoundImage from "../../../ui/blocks/components/ServicesCardWithLeftRoundImage";
  import ServicesCardWithLeftRoundImageCode from "!raw-loader!../../../ui/blocks/components/ServicesCardWithLeftRoundImage";

  import ServicesLoop from "../../../ui/blocks/components/ServicesLoop";
  import ServicesLoopCode from "!raw-loader!../../../ui/blocks/components/ServicesLoop";

  import ServicesLoopBackgroundImage from "../../../ui/blocks/components/ServicesLoopBackgroundImage";
  import ServicesLoopBackgroundImageCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopBackgroundImage";

  import ServicesLoopBackgroundImageAndBoxes from "../../../ui/blocks/components/ServicesLoopBackgroundImageAndBoxes";
  import ServicesLoopBackgroundImageAndBoxesCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopBackgroundImageAndBoxes";

  import ServicesLoopRightImage from "../../../ui/blocks/components/ServicesLoopRightImage";
  import ServicesLoopRightImageCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopRightImage";

  import ServicesLoopSix from "../../../ui/blocks/components/ServicesLoopSix";
  import ServicesLoopSixCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopSix";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- cards',
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
      ...globalComponents,
      BlockTopMenu,
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
