<template>
  <div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>
    <PageHeader></PageHeader>


    <div class="main-content">



      <SectionCode name="Clientele UI Block" :code="ClienteleCode">
        <Clientele :content="c.Clientele"></Clientele>
      </SectionCode>



      <SectionCode name="Clients UI Block" :code="ClientsCode">
        <Clients :content="c.Clients"></Clients>
      </SectionCode>


    </div>



    <Footer></Footer>


  </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";

  import Clientele from "../../../ui/blocks/components/Clientele";
  import ClienteleCode from "!raw-loader!../../../ui/blocks/components/Clientele";

  import Clients from "../../../ui/blocks/components/Clients";
  import ClientsCode from "!raw-loader!../../../ui/blocks/components/Clients";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'VaahNuxt UI components- clientele',
      }
    },
    computed: {
      ClienteleCode() {
        return ClienteleCode
      },
      ClientsCode() {
        return ClientsCode
      },
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      Clientele,
      Clients,
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
