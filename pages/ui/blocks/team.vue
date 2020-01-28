<template>
  <div class="main-content">



    <SectionCode name="Team UI Block" :code="TeamCode">
      <Team :content="c.Team"></Team>
    </SectionCode>



    <SectionCode name="TeamSquareCard UI Block" :code="TeamSquareCardCode">
      <TeamSquareCard :content="c.TeamSquareCard"></TeamSquareCard>
    </SectionCode>


  </div>



</template>

<script>

  import content from '../../../ui/content/content.json'

  import SectionTitle from '../../../ui/resuable/SectionTitle'

  import SectionCode from '../../../ui/resuable/SectionCode';

  import Team from "../../../ui/blocks/components/Team";
  import TeamCode from "!raw-loader!../../../ui/blocks/components/Team";

  import TeamSquareCard from "../../../ui/blocks/components/TeamSquareCard";
  import TeamSquareCardCode from "!raw-loader!../../../ui/blocks/components/TeamSquareCard";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- team',
      }
    },
    computed: {
      TeamCode() {
        return TeamCode
      },
      TeamSquareCardCode() {
        return TeamSquareCardCode
      },
    },
    components: {
      SectionTitle,
      SectionCode,
      Team,
      TeamSquareCard,
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
