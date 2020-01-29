<template>


   <div>

     <TopMenu></TopMenu>
     <BlockTopMenu></BlockTopMenu>
     <PageHeader></PageHeader>

     <div class="main-content">


    <SectionCode name="Counter UI Block" :code="CounterCode">
      <Counter :content="c.Counter"></Counter>
    </SectionCode>


  </div>

     <Footer></Footer>

   </div>


</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import Counter from "../../../ui/blocks/components/Counter";
  import CounterCode from "!raw-loader!../../../ui/blocks/components/Counter";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- counter',
      }
    },
    computed: {
      CounterCode() {
        return CounterCode
      },
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      Counter,
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
