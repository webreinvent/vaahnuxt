<template>
  <div class="main-content">



    <SectionCode name="ServiceFeaturesListViewCenterImage UI Block" :code="ServiceFeaturesListViewCenterImageCode">
      <ServiceFeaturesListViewCenterImage :content="c.ServiceFeaturesListViewCenterImage"></ServiceFeaturesListViewCenterImage>
    </SectionCode>



    <SectionCode name="ServiceFeaturesFourColouredBoxes UI Block" :code="ServiceFeaturesFourColouredBoxesCode">
      <ServiceFeaturesFourColouredBoxes :content="c.ServiceFeaturesFourColouredBoxes"></ServiceFeaturesFourColouredBoxes>
    </SectionCode>



    <SectionCode name="ServicesListViewThreeColumns UI Block" :code="ServicesListViewThreeColumnsCode">
      <ServicesListViewThreeColumns :content="c.ServicesListViewThreeColumns"></ServicesListViewThreeColumns>
    </SectionCode>



    <SectionCode name="ServicesListView UI Block" :code="ServicesListViewCode">
      <ServicesListView :content="c.ServicesListView"></ServicesListView>
    </SectionCode>



    <SectionCode name="ServicesLoopRoundImageTop UI Block" :code="ServicesLoopRoundImageTopCode">
      <ServicesLoopRoundImageTop :content="c.ServicesLoopRoundImageTop"></ServicesLoopRoundImageTop>
    </SectionCode>



    <SectionCode name="ServicesLoopRoundImageTopThreeColumns UI Block" :code="ServicesLoopRoundImageTopThreeColumnsCode">
      <ServicesLoopRoundImageTopThreeColumns :content="c.ServicesLoopRoundImageTopThreeColumns"></ServicesLoopRoundImageTopThreeColumns>
    </SectionCode>



    <SectionCode name="ServicesListViewThreeColumnsHeading UI Block" :code="ServicesListViewThreeColumnsHeadingCode">
      <ServicesListViewThreeColumnsHeading :content="c.ServicesListViewThreeColumnsHeading"></ServicesListViewThreeColumnsHeading>
    </SectionCode>



    <SectionCode name="ServicesLoopTwoWithBackgroundFiveColumns UI Block" :code="ServicesLoopTwoWithBackgroundFiveColumnsCode">
      <ServicesLoopTwoWithBackgroundFiveColumns :content="c.ServicesLoopTwoWithBackgroundFiveColumns"></ServicesLoopTwoWithBackgroundFiveColumns>
    </SectionCode>



    <SectionCode name="ServicesLoopTwoWithoutBackgroundFiveColumns UI Block" :code="ServicesLoopTwoWithoutBackgroundFiveColumnsCode">
      <ServicesLoopTwoWithoutBackgroundFiveColumns :content="c.ServicesLoopTwoWithoutBackgroundFiveColumns"></ServicesLoopTwoWithoutBackgroundFiveColumns>
    </SectionCode>



    <SectionCode name="ServicesSingleLineContent UI Block" :code="ServicesSingleLineContentCode">
      <ServicesSingleLineContent :content="c.ServicesSingleLineContent"></ServicesSingleLineContent>
    </SectionCode>



    <SectionCode name="ServicesLoopListView UI Block" :code="ServicesLoopListViewCode">
      <ServicesLoopListView :content="c.ServicesLoopListView"></ServicesLoopListView>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import ServiceFeaturesFourColouredBoxes from "../../../ui/blocks/components/ServiceFeaturesFourColouredBoxes";
  import ServiceFeaturesFourColouredBoxesCode from "!raw-loader!../../../ui/blocks/components/ServiceFeaturesFourColouredBoxes";

  import ServiceFeaturesListViewCenterImage from "../../../ui/blocks/components/ServiceFeaturesListViewCenterImage";
  import ServiceFeaturesListViewCenterImageCode from "!raw-loader!../../../ui/blocks/components/ServiceFeaturesListViewCenterImage";

  import ServicesLoopRoundImageTopThreeColumns from "../../../ui/blocks/components/ServicesLoopRoundImageTopThreeColumns";
  import ServicesLoopRoundImageTopThreeColumnsCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopRoundImageTopThreeColumns";

  import ServicesListViewThreeColumns from "../../../ui/blocks/components/ServicesListViewThreeColumns";
  import ServicesListViewThreeColumnsCode from "!raw-loader!../../../ui/blocks/components/ServicesListViewThreeColumns";

  import ServicesListView from "../../../ui/blocks/components/ServicesListView";
  import ServicesListViewCode from "!raw-loader!../../../ui/blocks/components/ServicesListView";

  import ServicesListViewThreeColumnsHeading from "../../../ui/blocks/components/ServicesListViewThreeColumnsHeading";
  import ServicesListViewThreeColumnsHeadingCode from "!raw-loader!../../../ui/blocks/components/ServicesListViewThreeColumnsHeading";

  import ServicesLoopRoundImageTop from "../../../ui/blocks/components/ServicesLoopRoundImageTop";
  import ServicesLoopRoundImageTopCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopRoundImageTop";

  import ServicesLoopTwoWithBackgroundFiveColumns from "../../../ui/blocks/components/ServicesLoopTwoWithBackgroundFiveColumns";
  import ServicesLoopTwoWithBackgroundFiveColumnsCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTwoWithBackgroundFiveColumns";

  import ServicesLoopTwoWithoutBackgroundFiveColumns from "../../../ui/blocks/components/ServicesLoopTwoWithoutBackgroundFiveColumns";
  import ServicesLoopTwoWithoutBackgroundFiveColumnsCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTwoWithoutBackgroundFiveColumns";

  import ServicesSingleLineContent from "../../../ui/blocks/components/ServicesSingleLineContent";
  import ServicesSingleLineContentCode from "!raw-loader!../../../ui/blocks/components/ServicesSingleLineContent";

  import ServicesLoopListView from "../../../ui/blocks/components/ServicesLoopListView";
  import ServicesLoopListViewCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopListView";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- list',
      }
    },
    computed: {
      ServiceFeaturesFourColouredBoxesCode() {
        return ServiceFeaturesFourColouredBoxesCode
      },
      ServiceFeaturesListViewCenterImageCode() {
        return ServiceFeaturesListViewCenterImageCode
      },
      ServicesListViewThreeColumnsCode() {
        return ServicesListViewThreeColumnsCode
      },
      ServicesListViewCode() {
        return ServicesListViewCode
      },
      ServicesListViewThreeColumnsHeadingCode() {
        return ServicesListViewThreeColumnsHeadingCode
      },
      ServicesLoopRoundImageTopCode() {
        return ServicesLoopRoundImageTopCode
      },
      ServicesLoopRoundImageTopThreeColumnsCode() {
        return ServicesLoopRoundImageTopThreeColumnsCode
      },
      ServicesLoopTwoWithBackgroundFiveColumnsCode() {
        return ServicesLoopTwoWithBackgroundFiveColumnsCode
      },
      ServicesLoopTwoWithoutBackgroundFiveColumnsCode() {
        return ServicesLoopTwoWithoutBackgroundFiveColumnsCode
      },
      ServicesSingleLineContentCode() {
        return ServicesSingleLineContentCode
      },
      ServicesLoopListViewCode() {
        return ServicesLoopListViewCode
      }
    },
    components: {
      SectionTitle,
      SectionCode,
      ServiceFeaturesFourColouredBoxes,
      ServiceFeaturesListViewCenterImage,
      ServicesListViewThreeColumns,
      ServicesListView,
      ServicesListViewThreeColumnsHeading,
      ServicesLoopRoundImageTop,
      ServicesLoopRoundImageTopThreeColumns,
      ServicesLoopTwoWithBackgroundFiveColumns,
      ServicesLoopTwoWithoutBackgroundFiveColumns,
      ServicesSingleLineContent,
      ServicesLoopListView,
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
