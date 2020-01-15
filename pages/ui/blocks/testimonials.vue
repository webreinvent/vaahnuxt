<template>
  <div class="main-content">

    <SectionTitle title="VaahNuxt - UI Blocks">
    </SectionTitle>



    <SectionCode name="Testimonials UI Block" :code="TestimonialsCode">
      <Testimonials :content="c.Testimonials"></Testimonials>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Testimonials from "../../../ui/blocks/Testimonials";
  import TestimonialsCode from "!raw-loader!../../../ui/blocks/Testimonials";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      TestimonialsCode() {
        return TestimonialsCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
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
