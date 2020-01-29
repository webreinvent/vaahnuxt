<template>

<div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


    <div class="main-content">


      <SectionCode name="Process UI Block" :code="ProcessCode">
        <Process :content="c.Process"></Process>
      </SectionCode>


    </div>



    <Footer></Footer>


  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import Process from "../../../ui/blocks/components/Process";
  import ProcessCode from "!raw-loader!../../../ui/blocks/components/Process";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- process',
      }
    },
    computed: {
      ProcessCode() {
        return ProcessCode
      },
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      Process,
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
