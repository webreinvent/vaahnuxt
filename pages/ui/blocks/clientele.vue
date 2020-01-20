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

  import Clientele from "../../../ui/blocks/Clientele";
  import ClienteleCode from "!raw-loader!../../../ui/blocks/Clientele";

  import Clients from "../../../ui/blocks/Clients";
  import ClientsCode from "!raw-loader!../../../ui/blocks/Clients";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
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
