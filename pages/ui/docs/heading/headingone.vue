<template>
  <section class="section">
    <div class="columns is-mobile">
      <SectionCode name="H1" :code="headingoneCode">
        <H1></H1>
      </SectionCode>
    </div>
  </section>
</template>

<script>
  import SectionTitle from '../../../../ui/resuable/SectionTitle'
  import SectionCode from '../../../../ui/resuable/SectionCode'

  import H1 from "../../../../ui/docs/components/Heading/H1";
  import headingoneCode from "!raw-loader!../../../../ui/docs/components/Heading/H1";
  export default {
    layout: 'ui/docs',
    head () {
      return {
        title: 'Docs UI Blocks',
      }
    },
    computed:{
      headingoneCode() {return headingoneCode},
    },
    components: {
      SectionTitle,
      SectionCode,
      H1,
    },
    methods:{

    }
  }
</script>
