<template>
  <div class="main-content">


    <SectionCode name="Blogs UI Block" :code="BlogsCode">
      <Blogs :content="c.Blogs"></Blogs>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Blogs from "../../../ui/blocks/Blogs";
  import BlogsCode from "!raw-loader!../../../ui/blocks/Blogs";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
      }
    },
    computed: {
      BlogsCode() {
        return BlogsCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      Blogs,
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
