<template>
  <div class="main-content">



    <SectionCode name="FrequentlyAskedQuestions UI Block" :code="FrequentlyAskedQuestionsCode">
      <FrequentlyAskedQuestions :content="c.FrequentlyAskedQuestions"></FrequentlyAskedQuestions>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import FrequentlyAskedQuestions from "../../../ui/blocks/components/FrequentlyAskedQuestions";
  import FrequentlyAskedQuestionsCode from "!raw-loader!../../../ui/blocks/components/FrequentlyAskedQuestions";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- faq',
      }
    },
    computed: {
      FrequentlyAskedQuestionsCode() {
        return FrequentlyAskedQuestionsCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      FrequentlyAskedQuestions,
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
