<template>
  <div class="main-content">


    <SectionCode name="Testimonials UI Block" :code="TestimonialsCode">
      <Testimonials :content="c.Testimonials"></Testimonials>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Testimonials from "../../../ui/blocks/components/Testimonials";
  import TestimonialsCode from "!raw-loader!../../../ui/blocks/components/Testimonials";



  export default {
    layout: 'ui/blocks',
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
