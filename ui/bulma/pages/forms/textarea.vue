<template>

  <div>

    <TopMenu></TopMenu>
    <BulmaTopMenu></BulmaTopMenu>
    <PageHeader></PageHeader>

    <div class="main-content">


      <SectionCode name="Textarea" :code="TextareaCode">
        <Textarea></Textarea>
      </SectionCode>


      <SectionCode name="Colors" :code="ColorsCode">
        <Colors></Colors>
      </SectionCode>


      <SectionCode name="Sizes" :code="SizesCode">
        <Sizes></Sizes>
      </SectionCode>


      <SectionCode name="States" :code="StatesCode">
        <States></States>
      </SectionCode>


    </div>

    <Footer></Footer>

  </div>

</template>

<script>

  import globalComponents from "../../../../ui/helpers/globalComponents";
  import BulmaTopMenu from "../../../../ui/bulma/partials/BulmaTopMenu";

  import Textarea from "../../components/Forms/Textarea/Textarea";
  import TextareaCode from "!raw-loader!../../components/Forms/Textarea/Textarea";

  import Colors from "../../components/Forms/Textarea/Colors";
  import ColorsCode from "!raw-loader!../../components/Forms/Textarea/Colors";

  import Sizes from "../../components/Forms/Textarea/Sizes";
  import SizesCode from "!raw-loader!../../components/Forms/Textarea/Sizes";

  import States from "../../components/Forms/Textarea/States";
  import StatesCode from "!raw-loader!../../components/Forms/Textarea/States";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Bulma UI components- Input',
      }
    },
    computed: {
      TextareaCode() {
        return TextareaCode
      },
      ColorsCode() {
        return ColorsCode
      },
      SizesCode() {
        return SizesCode
      },
      StatesCode() {
        return StatesCode
      },
    },
    components: {
      ...globalComponents,
      BulmaTopMenu,
      Textarea,
      Colors,
      Sizes,
      States,
    },
    methods:{
    },

  }
</script>
