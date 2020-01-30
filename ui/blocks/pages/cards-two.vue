<template>
<div>

     <TopMenu></TopMenu>
     <BlockTopMenu></BlockTopMenu>
     <PageHeader></PageHeader>


      <div class="main-content">



        <SectionCode name="ServicesLoopThreeColorBoxes UI Block" :code="ServicesLoopThreeColorBoxesCode">
          <ServicesLoopThreeColorBoxes :content="c.ServicesLoopThreeColorBoxes"></ServicesLoopThreeColorBoxes>
        </SectionCode>



        <SectionCode name="ServicesLoopTwo UI Block" :code="ServicesLoopTwoCode">
          <ServicesLoopTwo :content="c.ServicesLoopTwo"></ServicesLoopTwo>
        </SectionCode>



        <SectionCode name="ServicesLoopTwoWithoutBackground UI Block" :code="ServicesLoopTwoWithoutBackgroundCode">
          <ServicesLoopTwoWithoutBackground :content="c.ServicesLoopTwoWithoutBackground"></ServicesLoopTwoWithoutBackground>
        </SectionCode>



        <SectionCode name="ServicesLoopWithoutBackground UI Block" :code="ServicesLoopWithoutBackgroundCode">
          <ServicesLoopWithoutBackground :content="c.ServicesLoopWithoutBackground"></ServicesLoopWithoutBackground>
        </SectionCode>



        <SectionCode name="ServicesPlainTextTwoColumns UI Block" :code="ServicesPlainTextTwoColumnsCode">
          <ServicesPlainTextTwoColumns :content="c.ServicesPlainTextTwoColumns"></ServicesPlainTextTwoColumns>
        </SectionCode>


  </div>

     <Footer></Footer>

</div>



</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import ServicesLoopThreeColorBoxes from "../../../ui/blocks/components/ServicesLoopThreeColorBoxes";
  import ServicesLoopThreeColorBoxesCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopThreeColorBoxes";

  import ServicesLoopTwo from "../../../ui/blocks/components/ServicesLoopTwo";
  import ServicesLoopTwoCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTwo";

  import ServicesLoopTwoWithoutBackground from "../../../ui/blocks/components/ServicesLoopTwoWithoutBackground";
  import ServicesLoopTwoWithoutBackgroundCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTwoWithoutBackground";

  import ServicesLoopWithoutBackground from "../../../ui/blocks/components/ServicesLoopWithoutBackground";
  import ServicesLoopWithoutBackgroundCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopWithoutBackground";

  import ServicesPlainTextTwoColumns from "../../../ui/blocks/components/ServicesPlainTextTwoColumns";
  import ServicesPlainTextTwoColumnsCode from "!raw-loader!../../../ui/blocks/components/ServicesPlainTextTwoColumns";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- cards',
      }
    },
    computed: {
      ServicesLoopThreeColorBoxesCode() {
        return ServicesLoopThreeColorBoxesCode
      },
      ServicesLoopTwoCode() {
        return ServicesLoopTwoCode
      },
      ServicesLoopTwoWithoutBackgroundCode() {
        return ServicesLoopTwoWithoutBackgroundCode
      },
      ServicesLoopWithoutBackgroundCode() {
        return ServicesLoopWithoutBackgroundCode
      },
      ServicesPlainTextTwoColumnsCode() {
        return ServicesPlainTextTwoColumnsCode
      },
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      ServicesLoopThreeColorBoxes,
      ServicesLoopTwo,
      ServicesLoopTwoWithoutBackground,
      ServicesLoopWithoutBackground,
      ServicesPlainTextTwoColumns,
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
