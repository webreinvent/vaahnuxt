<template>


<div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


    <div class="main-content">


    <SectionCode name="Testimonials UI Block" :code="TestimonialsCode">
      <Testimonials :content="c.Testimonials"></Testimonials>
    </SectionCode>


  </div>



    <Footer></Footer>


  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import Testimonials from "../../../ui/blocks/components/Testimonials";
  import TestimonialsCode from "!raw-loader!../../../ui/blocks/components/Testimonials";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- testimonials',
      }
    },
    computed: {
      TestimonialsCode() {
        return TestimonialsCode
      },
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      Testimonials,
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
