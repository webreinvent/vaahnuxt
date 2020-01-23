<template>
  <section class="section">
    <div class="columns is-mobile">


      <SectionCode name="ElementOne" id="elementone"
                   :file_path="'start/test.php'"
                   :code="ElementV1Code">
        <ElementV1></ElementV1>
      </SectionCode>


      <SectionCode name="ElementTwo" id="elementtwo" :code="ElementV2Code">
        <ElementV2></ElementV2>
      </SectionCode>


      <SectionCode name="ElementThree" id="elementthree" :code="ElementV3Code">
        <ElementV3></ElementV3>
      </SectionCode>


      <SectionCode name="ElementFour" id="elementfour" :code="ElementV4Code">
        <ElementV4></ElementV4>
      </SectionCode>


      <SectionCode name="ElementFive" id="elementfive" :code="ElementV5Code">
        <ElementV5></ElementV5>
      </SectionCode>


      <SectionCode name="ElementSix" id="elementsix" :code="ElementV6Code">
        <ElementV6></ElementV6>
      </SectionCode>


      <SectionCode name="ElementSeven" id="elementseven" :code="ElementV7Code">
        <ElementV7></ElementV7>
      </SectionCode>


      <SectionCode name="ElementEight" id="elementeight" :code="ElementV8Code">
        <ElementV8></ElementV8>
      </SectionCode>


      <SectionCode name="ElementNine" id="elementnine" :code="ElementV9Code">
        <ElementV9></ElementV9>
      </SectionCode>


    </div>
  </section>
</template>

<script>
  import SectionTitle from '../../../ui/resuable/SectionTitle'
  import SectionCode from '../../../ui/resuable/SectionCode'

  import ElementV1 from "../../../ui/docs/components/ElementV1";
  import ElementV1Code from "!raw-loader!../../../ui/docs/components/ElementV1";

  import ElementV2 from "../../../ui/docs/components/ElementV2";
  import ElementV2Code from "!raw-loader!../../../ui/docs/components/ElementV2";

  import ElementV3 from "../../../ui/docs/components/ElementV3";
  import ElementV3Code from "!raw-loader!../../../ui/docs/components/ElementV3";

  import ElementV4 from "../../../ui/docs/components/ElementV4";
  import ElementV4Code from "!raw-loader!../../../ui/docs/components/ElementV4";

  import ElementV5 from "../../../ui/docs/components/ElementV5";
  import ElementV5Code from "!raw-loader!../../../ui/docs/components/ElementV5";

  import ElementV6 from "../../../ui/docs/components/ElementV6";
  import ElementV6Code from "!raw-loader!../../../ui/docs/components/ElementV6";

  import ElementV7 from "../../../ui/docs/components/ElementV7";
  import ElementV7Code from "!raw-loader!../../../ui/docs/components/ElementV7";

  import ElementV8 from "../../../ui/docs/components/ElementV8";
  import ElementV8Code from "!raw-loader!../../../ui/docs/components/ElementV8";

  import ElementV9 from "../../../ui/docs/components/ElementV9";
  import ElementV9Code from "!raw-loader!../../../ui/docs/components/ElementV9";
  export default {
    layout: 'ui/docs',
    head () {
      return {
        title: 'Docs UI Blocks',
      }
    },
    computed:{
      ElementV1Code() {return ElementV1Code},
      ElementV2Code() {return ElementV2Code},
      ElementV3Code() {return ElementV3Code},
      ElementV4Code() {return ElementV4Code},
      ElementV5Code() {return ElementV5Code},
      ElementV6Code() {return ElementV6Code},
      ElementV7Code() {return ElementV7Code},
      ElementV8Code() {return ElementV8Code},
      ElementV9Code() {return ElementV9Code},
    },
    components: {
      SectionTitle,
      SectionCode,
      ElementV1,
      ElementV2,
      ElementV3,
      ElementV4,
      ElementV5,
      ElementV6,
      ElementV7,
      ElementV8,
      ElementV9,
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
