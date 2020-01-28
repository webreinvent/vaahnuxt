<template>
  <div class="main-content">


    <SectionCode name="CallToAction UI Block" :code="CallToActionCode">
      <CallToAction :content="c.CallToAction"></CallToAction>
    </SectionCode>



    <SectionCode name="CallToActionBGImage UI Block" :code="CallToActionBGImageCode">
      <CallToActionBGImage :content="c.CallToActionBGImage"></CallToActionBGImage>
    </SectionCode>



    <SectionCode name="Slogan UI Block" :code="SloganCode">
      <Slogan :content="c.Slogan"></Slogan>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import CallToAction from "../../../ui/blocks/components/CallToAction";
  import CallToActionCode from "!raw-loader!../../../ui/blocks/components/CallToAction";

  import CallToActionBGImage from "../../../ui/blocks/components/CallToActionBGImage";
  import CallToActionBGImageCode from "!raw-loader!../../../ui/blocks/components/CallToActionBGImage";

  import Slogan from "../../../ui/blocks/components/Slogan";
  import SloganCode from "!raw-loader!../../../ui/blocks/components/Slogan";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- call to actions',
      }
    },
    computed: {
      CallToActionCode() {
        return CallToActionCode
      },
      CallToActionBGImageCode() {
        return CallToActionBGImageCode
      },
      SloganCode() {
        return SloganCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      CallToAction,
      CallToActionBGImage,
      Slogan,
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
