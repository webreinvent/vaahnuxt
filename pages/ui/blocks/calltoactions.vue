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

  import CallToAction from "../../../ui/blocks/CallToAction";
  import CallToActionCode from "!raw-loader!../../../ui/blocks/CallToAction";

  import CallToActionBGImage from "../../../ui/blocks/CallToActionBGImage";
  import CallToActionBGImageCode from "!raw-loader!../../../ui/blocks/CallToActionBGImage";

  import Slogan from "../../../ui/blocks/Slogan";
  import SloganCode from "!raw-loader!../../../ui/blocks/Slogan";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
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
