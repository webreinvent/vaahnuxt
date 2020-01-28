<template>
  <div class="main-content">



    <SectionCode name="Clientele UI Block" :code="ClienteleCode">
      <Clientele :content="c.Clientele"></Clientele>
    </SectionCode>



    <SectionCode name="Clients UI Block" :code="ClientsCode">
      <Clients :content="c.Clients"></Clients>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Clientele from "../../../ui/blocks/components/Clientele";
  import ClienteleCode from "!raw-loader!../../../ui/blocks/components/Clientele";

  import Clients from "../../../ui/blocks/components/Clients";
  import ClientsCode from "!raw-loader!../../../ui/blocks/components/Clients";



  export default {
    layout: 'ui/blocks',
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
      SectionTitle,
      SectionCode,
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
