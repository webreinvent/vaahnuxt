<template>
  <div class="main-content">


    <SectionCode name="Banner UI Block" :code="BannerCode">
      <Banner :content="c.Banner"></Banner>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Banner from "../../../ui/blocks/components/Banner";
  import BannerCode from "!raw-loader!../../../ui/blocks/components/Banner";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- banner',
      }
    },
    computed: {
      BannerCode() {
        return BannerCode
      }
    },
    components: {
      SectionTitle,
      SectionCode,
      Banner,
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
