<template>
  <div class="main-content">


    <SectionCode name="Counter UI Block" :code="CounterCode">
      <Counter :content="c.Counter"></Counter>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Counter from "../../../ui/blocks/components/Counter";
  import CounterCode from "!raw-loader!../../../ui/blocks/components/Counter";



  export default {
    layout: 'ui/blocks',
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
      SectionTitle,
      SectionCode,
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
