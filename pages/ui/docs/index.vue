<template>
  <section class="section">
    <div class="columns is-mobile">


      <SectionCode name="ElementOne" id="elementone" :code="ElementOneCode">
        <ElementOne></ElementOne>
      </SectionCode>


      <SectionCode name="ElementTwo" id="elementtwo" :code="ElementTwoCode">
        <ElementTwo></ElementTwo>
      </SectionCode>


      <SectionCode name="ElementThree" id="elementthree" :code="ElementThreeCode">
        <ElementThree></ElementThree>
      </SectionCode>


      <SectionCode name="ElementFour" id="elementfour" :code="ElementFourCode">
        <ElementFour></ElementFour>
      </SectionCode>


      <SectionCode name="ElementFive" id="elementfive" :code="ElementFiveCode">
        <ElementFive></ElementFive>
      </SectionCode>


      <SectionCode name="ElementSix" id="elementsix" :code="ElementSixCode">
        <ElementSix></ElementSix>
      </SectionCode>


      <SectionCode name="ElementSeven" id="elementseven" :code="ElementSevenCode">
        <ElementSeven></ElementSeven>
      </SectionCode>


      <SectionCode name="ElementEight" id="elementeight" :code="ElementEightCode">
        <ElementEight></ElementEight>
      </SectionCode>


    </div>
  </section>
</template>

<script>
  import SectionTitle from '../../../ui/resuable/SectionTitle'
  import SectionCode from '../../../ui/resuable/SectionCode'

  import ElementOne from "../../../ui/docs/components/ElementOne";
  import ElementOneCode from "!raw-loader!../../../ui/docs/components/ElementOne";

  import ElementTwo from "../../../ui/docs/components/ElementTwo";
  import ElementTwoCode from "!raw-loader!../../../ui/docs/components/ElementTwo";

  import ElementThree from "../../../ui/docs/components/ElementThree";
  import ElementThreeCode from "!raw-loader!../../../ui/docs/components/ElementThree";

  import ElementFour from "../../../ui/docs/components/ElementFour";
  import ElementFourCode from "!raw-loader!../../../ui/docs/components/ElementFour";

  import ElementFive from "../../../ui/docs/components/ElementFive";
  import ElementFiveCode from "!raw-loader!../../../ui/docs/components/ElementFive";

  import ElementSix from "../../../ui/docs/components/ElementSix";
  import ElementSixCode from "!raw-loader!../../../ui/docs/components/ElementSix";

  import ElementSeven from "../../../ui/docs/components/ElementSeven";
  import ElementSevenCode from "!raw-loader!../../../ui/docs/components/ElementSeven";

  import ElementEight from "../../../ui/docs/components/ElementEight";
  import ElementEightCode from "!raw-loader!../../../ui/docs/components/ElementEight";
  export default {
    layout: 'ui/docs',
    head () {
      return {
        title: 'Docs UI Blocks',
      }
    },
    computed:{
      ElementOneCode() {return ElementOneCode},
      ElementTwoCode() {return ElementTwoCode},
      ElementThreeCode() {return ElementThreeCode},
      ElementFourCode() {return ElementFourCode},
      ElementFiveCode() {return ElementFiveCode},
      ElementSixCode() {return ElementSixCode},
      ElementSevenCode() {return ElementSevenCode},
      ElementEightCode() {return ElementEightCode},
    },
    components: {
      SectionTitle,
      SectionCode,
      ElementOne,
      ElementTwo,
      ElementThree,
      ElementFour,
      ElementFive,
      ElementSix,
      ElementSeven,
      ElementEight,
    },
    methods:{

    }
  }
</script>
<style>
  html {
  scroll-behavior: smooth;
}
</style>
