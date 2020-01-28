<template>
  <div class="main-content">


    <SectionCode name="ServiceHeader UI Block" :code="ServiceHeaderCode">
      <ServiceHeader :content="c.ServiceHeader"></ServiceHeader>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import ServiceHeader from "../../../ui/blocks/components/ServiceHeader";
  import ServiceHeaderCode from "!raw-loader!../../../ui/blocks/components/ServiceHeader";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- forms',
      }
    },
    computed: {
      ServiceHeaderCode() {
        return ServiceHeaderCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      ServiceHeader,
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
