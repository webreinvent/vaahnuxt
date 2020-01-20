<template>
  <div class="main-content">

    <SectionTitle title="VaahNuxt - UI Blocks">
    </SectionTitle>



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

  import Team from "../../../ui/blocks/Team";
  import TeamCode from "!raw-loader!../../../ui/blocks/Team";

  import TeamSquareCard from "../../../ui/blocks/TeamSquareCard";
  import TeamSquareCardCode from "!raw-loader!../../../ui/blocks/TeamSquareCard";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI Components',
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
