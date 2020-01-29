<template>

   <div>

     <TopMenu></TopMenu>
     <BlockTopMenu></BlockTopMenu>
     <PageHeader></PageHeader>

  <div class="main-content">


    <SectionCode name="Banner UI Block" :code="BannerCode">
      <Banner :content="c.Banner"></Banner>
    </SectionCode>


  </div>

    <Footer></Footer>

   </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import Banner from "../../../ui/blocks/components/Banner";
  import BannerCode from "!raw-loader!../../../ui/blocks/components/Banner";



  export default {
    layout: 'ui',
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
       ...globalComponents,
      BlockTopMenu,
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
