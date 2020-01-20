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

  import ServiceFeaturesFourColouredBoxes from "../../../ui/blocks/ServiceFeaturesFourColouredBoxes";
  import ServiceFeaturesFourColouredBoxesCode from "!raw-loader!../../../ui/blocks/ServiceFeaturesFourColouredBoxes";

  import ServiceFeaturesListViewCenterImage from "../../../ui/blocks/ServiceFeaturesListViewCenterImage";
  import ServiceFeaturesListViewCenterImageCode from "!raw-loader!../../../ui/blocks/ServiceFeaturesListViewCenterImage";

  import ServicesLoopRoundImageTopThreeColumns from "../../../ui/blocks/ServicesLoopRoundImageTopThreeColumns";
  import ServicesLoopRoundImageTopThreeColumnsCode from "!raw-loader!../../../ui/blocks/ServicesLoopRoundImageTopThreeColumns";

  import ServicesListViewThreeColumns from "../../../ui/blocks/ServicesListViewThreeColumns";
  import ServicesListViewThreeColumnsCode from "!raw-loader!../../../ui/blocks/ServicesListViewThreeColumns";

  import ServicesListView from "../../../ui/blocks/ServicesListView";
  import ServicesListViewCode from "!raw-loader!../../../ui/blocks/ServicesListView";

  import ServicesListViewThreeColumnsHeading from "../../../ui/blocks/ServicesListViewThreeColumnsHeading";
  import ServicesListViewThreeColumnsHeadingCode from "!raw-loader!../../../ui/blocks/ServicesListViewThreeColumnsHeading";

  import ServicesLoopRoundImageTop from "../../../ui/blocks/ServicesLoopRoundImageTop";
  import ServicesLoopRoundImageTopCode from "!raw-loader!../../../ui/blocks/ServicesLoopRoundImageTop";

  import ServicesLoopTwoWithBackgroundFiveColumns from "../../../ui/blocks/ServicesLoopTwoWithBackgroundFiveColumns";
  import ServicesLoopTwoWithBackgroundFiveColumnsCode from "!raw-loader!../../../ui/blocks/ServicesLoopTwoWithBackgroundFiveColumns";

  import ServicesLoopTwoWithoutBackgroundFiveColumns from "../../../ui/blocks/ServicesLoopTwoWithoutBackgroundFiveColumns";
  import ServicesLoopTwoWithoutBackgroundFiveColumnsCode from "!raw-loader!../../../ui/blocks/ServicesLoopTwoWithoutBackgroundFiveColumns";

  import ServicesSingleLineContent from "../../../ui/blocks/ServicesSingleLineContent";
  import ServicesSingleLineContentCode from "!raw-loader!../../../ui/blocks/ServicesSingleLineContent";

  import ServicesLoopListView from "../../../ui/blocks/ServicesLoopListView";
  import ServicesLoopListViewCode from "!raw-loader!../../../ui/blocks/ServicesLoopListView";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
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
