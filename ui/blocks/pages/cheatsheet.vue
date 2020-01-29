<template>
  <div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


    <div class="main-content">


      <SectionCode name="Cheetsheet UI Block" >
        <Cheetsheet></Cheetsheet>

      </SectionCode>

    </div>

    <Footer></Footer>

  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import Cheetsheet from "../../../ui/blocks/components/Cheetsheet";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- cheat sheet',
      }
    },
    computed: {
    },
    components: {
       ...globalComponents,
      BlockTopMenu,
      Cheetsheet,
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
