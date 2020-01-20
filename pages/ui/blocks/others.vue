<template>
  <div class="main-content">


    <SectionCode name="ServiceFeaturesNumbersTop UI Block" :code="ServiceFeaturesNumbersTopCode">
      <ServiceFeaturesNumbersTop :content="c.ServiceFeaturesNumbersTop"></ServiceFeaturesNumbersTop>
    </SectionCode>



    <SectionCode name="ServiceFeaturesNumbersTopThreeColumns UI Block" :code="ServiceFeaturesNumbersTopThreeColumnsCode">
      <ServiceFeaturesNumbersTopThreeColumns :content="c.ServiceFeaturesNumbersTopThreeColumns"></ServiceFeaturesNumbersTopThreeColumns>
    </SectionCode>



    <SectionCode name="ServiceLoopFive UI Block" :code="ServiceLoopFiveCode">
      <ServiceLoopFive :content="c.ServiceLoopFive"></ServiceLoopFive>
    </SectionCode>



    <SectionCode name="ServiceLoopFiveThreeColumns UI Block" :code="ServiceLoopFiveThreeColumnsCode">
      <ServiceLoopFiveThreeColumns :content="c.ServiceLoopFiveThreeColumns"></ServiceLoopFiveThreeColumns>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import ServiceFeaturesNumbersTop from "../../../ui/blocks/ServiceFeaturesNumbersTop";
  import ServiceFeaturesNumbersTopCode from "!raw-loader!../../../ui/blocks/ServiceFeaturesNumbersTop";

  import ServiceFeaturesNumbersTopThreeColumns from "../../../ui/blocks/ServiceFeaturesNumbersTopThreeColumns";
  import ServiceFeaturesNumbersTopThreeColumnsCode from "!raw-loader!../../../ui/blocks/ServiceFeaturesNumbersTopThreeColumns";

  import ServiceLoopFive from "../../../ui/blocks/ServiceLoopFive";
  import ServiceLoopFiveCode from "!raw-loader!../../../ui/blocks/ServiceLoopFive";

  import ServiceLoopFiveThreeColumns from "../../../ui/blocks/ServiceLoopFiveThreeColumns";
  import ServiceLoopFiveThreeColumnsCode from "!raw-loader!../../../ui/blocks/ServiceLoopFiveThreeColumns";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      ServiceFeaturesNumbersTopCode() {
        return ServiceFeaturesNumbersTopCode
      },
      ServiceFeaturesNumbersTopThreeColumnsCode() {
        return ServiceFeaturesNumbersTopThreeColumnsCode
      },
      ServiceLoopFiveCode() {
        return ServiceLoopFiveCode
      },
      ServiceLoopFiveThreeColumnsCode() {
        return ServiceLoopFiveThreeColumnsCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      ServiceFeaturesNumbersTop,
      ServiceFeaturesNumbersTopThreeColumns,
      ServiceLoopFive,
      ServiceLoopFiveThreeColumns,
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
