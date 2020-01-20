<template>
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



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import ServicesLoopThreeColorBoxes from "../../../ui/blocks/ServicesLoopThreeColorBoxes";
  import ServicesLoopThreeColorBoxesCode from "!raw-loader!../../../ui/blocks/ServicesLoopThreeColorBoxes";

  import ServicesLoopTwo from "../../../ui/blocks/ServicesLoopTwo";
  import ServicesLoopTwoCode from "!raw-loader!../../../ui/blocks/ServicesLoopTwo";

  import ServicesLoopTwoWithoutBackground from "../../../ui/blocks/ServicesLoopTwoWithoutBackground";
  import ServicesLoopTwoWithoutBackgroundCode from "!raw-loader!../../../ui/blocks/ServicesLoopTwoWithoutBackground";

  import ServicesLoopWithoutBackground from "../../../ui/blocks/ServicesLoopWithoutBackground";
  import ServicesLoopWithoutBackgroundCode from "!raw-loader!../../../ui/blocks/ServicesLoopWithoutBackground";

  import ServicesPlainTextTwoColumns from "../../../ui/blocks/ServicesPlainTextTwoColumns";
  import ServicesPlainTextTwoColumnsCode from "!raw-loader!../../../ui/blocks/ServicesPlainTextTwoColumns";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
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
      SectionTitle,
      SectionCode,
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
