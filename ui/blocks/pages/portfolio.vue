<template>


<div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


     <div class="main-content">


    <SectionCode name="Portfolio UI Block" :code="PortfolioCode">
      <Portfolio :content="c.Portfolio"></Portfolio>
    </SectionCode>


  </div>



    <Footer></Footer>


  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import Portfolio from "../../../ui/blocks/components/Portfolio";
  import PortfolioCode from "!raw-loader!../../../ui/blocks/components/Portfolio";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- portfolio',
      }
    },
    computed: {
      PortfolioCode() {
        return PortfolioCode
      },
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      Portfolio,
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
