<template>


 <div>

     <TopMenu></TopMenu>
     <BlockTopMenu></BlockTopMenu>
     <PageHeader></PageHeader>


      <div class="main-content">


    <SectionCode name="ServiceHeader UI Block" :code="ServiceHeaderCode">
      <ServiceHeader :content="c.ServiceHeader"></ServiceHeader>
    </SectionCode>


  </div>


    <Footer></Footer>

  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import ServiceHeader from "../../../ui/blocks/components/ServiceHeader";
  import ServiceHeaderCode from "!raw-loader!../../../ui/blocks/components/ServiceHeader";



  export default {
    layout: 'ui',
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
      ...globalComponents,
      BlockTopMenu,
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
