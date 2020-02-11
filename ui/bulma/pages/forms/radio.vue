<template>

  <div>

    <TopMenu></TopMenu>
    <BulmaTopMenu></BulmaTopMenu>
    <PageHeader></PageHeader>

    <div class="main-content">


      <SectionCode name="Radio Button" :code="RadioButtonCode">
        <RadioButton></RadioButton>
      </SectionCode>


    </div>

    <Footer></Footer>

  </div>

</template>

<script>

  import globalComponents from "./../../../../ui/helpers/globalComponents";
  import BulmaTopMenu from "./../../../../ui/bulma/partials/BulmaTopMenu";

  import RadioButton from "./../../components/Forms/Radio/RadioButton";
  import RadioButtonCode from "!raw-loader!./../../components/Forms/Radio/RadioButton";



  export default {
    layout: 'ui',
    head () {
      return {
        title: 'Bulma UI components- Radio Button',
      }
    },
    computed: {
      RadioButtonCode() {
        return RadioButtonCode
      },
    },
    components: {
      ...globalComponents,
      BulmaTopMenu,
      RadioButton,
    },
    methods:{
    },

  }
</script>
