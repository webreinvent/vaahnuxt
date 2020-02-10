<template>


<div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


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



    <Footer></Footer>


  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import ServiceFeaturesNumbersTop from "../../../ui/blocks/components/ServiceFeaturesNumbersTop";
  import ServiceFeaturesNumbersTopCode from "!raw-loader!../../../ui/blocks/components/ServiceFeaturesNumbersTop";

  import ServiceFeaturesNumbersTopThreeColumns from "../../../ui/blocks/components/ServiceFeaturesNumbersTopThreeColumns";
  import ServiceFeaturesNumbersTopThreeColumnsCode from "!raw-loader!../../../ui/blocks/components/ServiceFeaturesNumbersTopThreeColumns";

  import ServiceLoopFive from "../../../ui/blocks/components/ServiceLoopFive";
  import ServiceLoopFiveCode from "!raw-loader!../../../ui/blocks/components/ServiceLoopFive";

  import ServiceLoopFiveThreeColumns from "../../../ui/blocks/components/ServiceLoopFiveThreeColumns";
  import ServiceLoopFiveThreeColumnsCode from "!raw-loader!../../../ui/blocks/components/ServiceLoopFiveThreeColumns";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- blocks',
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
      ...globalComponents,
      BlockTopMenu,
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
