 <template>
   <div>

     <TopMenu></TopMenu>
     <BlockTopMenu></BlockTopMenu>
     <PageHeader></PageHeader>

     <div class="main-content">


    <SectionCode name="SectionHPLImageLeft UI Block" :code="SampleCode">
      <Sample :content="c.SectionHPLImageLeft"></Sample>
    </SectionCode>



    <SectionCode name="SectionHPLImageRight UI Block" :code="SectionHPLImageRightCode">
      <SectionHPLImageRight :content="c.SectionHPLImageRight"></SectionHPLImageRight>
    </SectionCode>



    <SectionCode name="SectionHPImageSmallLeft UI Block" :code="SectionHPImageSmallLeftCode">
      <SectionHPImageSmallLeft :content="c.SectionHPImageSmallLeft"></SectionHPImageSmallLeft>
    </SectionCode>



    <SectionCode name="SectionHPListImageRight UI Block" :code="SectionHPListImageRightCode">
      <SectionHPListImageRight :content="c.SectionHPListImageRight"></SectionHPListImageRight>
    </SectionCode>



    <SectionCode name="ServiceLoopFour UI Block" :code="ServiceLoopFourCode">
      <ServiceLoopFour :content="c.ServiceLoopFour"></ServiceLoopFour>
    </SectionCode>



    <SectionCode name="ServicesBigImageWithBox UI Block" :code="ServicesBigImageWithBoxCode">
      <ServicesBigImageWithBox :content="c.ServicesBigImageWithBox"></ServicesBigImageWithBox>
    </SectionCode>



    <SectionCode name="ServicesLoopEight UI Block" :code="ServicesLoopEightCode">
      <ServicesLoopEight :content="c.ServicesLoopEight"></ServicesLoopEight>
    </SectionCode>



    <SectionCode name="ServicesLoopEightLeftImage UI Block" :code="ServicesLoopEightLeftImageCode">
      <ServicesLoopEightLeftImage :content="c.ServicesLoopEightLeftImage"></ServicesLoopEightLeftImage>
    </SectionCode>



    <SectionCode name="ServicesLoopNine UI Block" :code="ServicesLoopNineCode">
      <ServicesLoopNine :content="c.ServicesLoopNine"></ServicesLoopNine>
    </SectionCode>



    <SectionCode name="ServicesLoopTen UI Block" :code="ServicesLoopTenCode">
      <ServicesLoopTen :content="c.ServicesLoopTen"></ServicesLoopTen>
    </SectionCode>



    <SectionCode name="ServicesLoopSeven UI Block" :code="ServicesLoopSevenCode">
      <ServicesLoopSeven :content="c.ServicesLoopSeven"></ServicesLoopSeven>
    </SectionCode>



    <SectionCode name="ServicesLoopOnlyData UI Block" :code="ServicesLoopOnlyDataCode">
      <ServicesLoopOnlyData :content="c.ServicesLoopOnlyData"></ServicesLoopOnlyData>
    </SectionCode>



    <SectionCode name="ServicesLoopThree UI Block" :code="ServicesLoopThreeCode">
      <ServicesLoopThree :content="c.ServicesLoopThree"></ServicesLoopThree>
    </SectionCode>



    <SectionCode name="ServicesLoopThreeOnlyPList UI Block" :code="ServicesLoopThreeOnlyPListCode">
      <ServicesLoopThreeOnlyPList :content="c.ServicesLoopThreeOnlyPList"></ServicesLoopThreeOnlyPList>
    </SectionCode>


  </div>

     <Footer></Footer>

   </div>

</template>

<script>

  import globalComponents from "../../../ui/helpers/globalComponents";
  import content from '../../../ui/content/content.json'

  import BlockTopMenu from "../../../ui/blocks/partials/BlockTopMenu";


  import Sample from "../../../ui/blocks/components/Sample";
  import SampleCode from "!raw-loader!../../../ui/blocks/components/Sample";

  import SectionHPLImageRight from "../../../ui/blocks/components/SectionHPLImageRight";
  import SectionHPLImageRightCode from "!raw-loader!../../../ui/blocks/components/SectionHPLImageRight";

  import SectionHPImageSmallLeft from "../../../ui/blocks/components/SectionHPImageSmallLeft";
  import SectionHPImageSmallLeftCode from "!raw-loader!../../../ui/blocks/components/SectionHPImageSmallLeft";

  import SectionHPListImageRight from "../../../ui/blocks/components/SectionHPListImageRight";
  import SectionHPListImageRightCode from "!raw-loader!../../../ui/blocks/components/SectionHPListImageRight";

  import ServiceLoopFour from "../../../ui/blocks/components/ServiceLoopFour";
  import ServiceLoopFourCode from "!raw-loader!../../../ui/blocks/components/ServiceLoopFour";

  import ServicesBigImageWithBox from "../../../ui/blocks/components/ServicesBigImageWithBox";
  import ServicesBigImageWithBoxCode from "!raw-loader!../../../ui/blocks/components/ServicesBigImageWithBox";

  import ServicesLoopEight from "../../../ui/blocks/components/ServicesLoopEight";
  import ServicesLoopEightCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopEight";

  import ServicesLoopEightLeftImage from "../../../ui/blocks/components/ServicesLoopEightLeftImage";
  import ServicesLoopEightLeftImageCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopEightLeftImage";

  import ServicesLoopNine from "../../../ui/blocks/components/ServicesLoopNine";
  import ServicesLoopNineCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopNine";

  import ServicesLoopTen from "../../../ui/blocks/components/ServicesLoopTen";
  import ServicesLoopTenCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopTen";

  import ServicesLoopSeven from "../../../ui/blocks/components/ServicesLoopSeven";
  import ServicesLoopSevenCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopSeven";

  import ServicesLoopOnlyData from "../../../ui/blocks/components/ServicesLoopOnlyData";
  import ServicesLoopOnlyDataCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopOnlyData";

  import ServicesLoopThree from "../../../ui/blocks/components/ServicesLoopThree";
  import ServicesLoopThreeCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopThree";

  import ServicesLoopThreeOnlyPList from "../../../ui/blocks/components/ServicesLoopThreeOnlyPList";
  import ServicesLoopThreeOnlyPListCode from "!raw-loader!../../../ui/blocks/components/ServicesLoopThreeOnlyPList";



  export default {
    layout: 'ui/blocks',
    head () {
      return {
        title: 'VaahNuxt UI components- blocks',
      }
    },
    computed: {
      SampleCode() {
        return SampleCode
      },
      SectionHPLImageRightCode() {
        return SectionHPLImageRightCode
      },
      SectionHPImageSmallLeftCode() {
        return SectionHPImageSmallLeftCode
      },
      SectionHPListImageRightCode() {
        return SectionHPListImageRightCode
      },
      ServiceLoopFourCode() {
        return ServiceLoopFourCode
      },
      ServicesBigImageWithBoxCode() {
        return ServicesBigImageWithBoxCode
      },
      ServicesLoopEightCode() {
        return ServicesLoopEightCode
      },
      ServicesLoopEightLeftImageCode() {
        return ServicesLoopEightLeftImageCode
      },
      ServicesLoopNineCode() {
        return ServicesLoopNineCode
      },
      ServicesLoopTenCode() {
        return ServicesLoopTenCode
      },
      ServicesLoopSevenCode() {
        return ServicesLoopSevenCode
      },
      ServicesLoopOnlyDataCode() {
        return ServicesLoopOnlyDataCode
      },
      ServicesLoopThreeCode() {
        return ServicesLoopThreeCode
      },
      ServicesLoopThreeOnlyPListCode() {
        return ServicesLoopThreeOnlyPListCode
      }
    },
    components: {
      ...globalComponents,
      BlockTopMenu,
      SectionHPLImageRight,
      SectionHPImageSmallLeft,
      ServicesBigImageWithBox,
      SectionHPListImageRight,
      ServiceLoopFour,
      Sample,
      ServicesLoopEight,
      ServicesLoopEightLeftImage,
      ServicesLoopNine,
      ServicesLoopTen,
      ServicesLoopSeven,
      ServicesLoopOnlyData,
      ServicesLoopThree,
      ServicesLoopThreeOnlyPList,
    },
    data(){
      let obj = {
        c: content
      };
      return obj;
    },
    mounted() {


    },
    methods:{

    },

  }
</script>
