<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Clockpicker"
                  link="https://buefy.org/documentation/checkbox/">
    </SectionTitle>


    <SectionCode name="Clockpicker" :code="ClockpickerCode">
      <Clockpicker></Clockpicker>
    </SectionCode>


    <SectionCode name="Non Read Only" :code="NonReadOnlyCode">
      <NonReadOnly></NonReadOnly>
    </SectionCode>


    <SectionCode name="Range" :code="RangeCode">
      <Range></Range>
    </SectionCode>


    <SectionCode name="Footer" :code="FooterCode">
      <Footer></Footer>
    </SectionCode>


    <SectionCode name="Colors" :code="ColorsCode">
      <Colors></Colors>
    </SectionCode>


  </div>

</template>

<script src="./clockpickerjs.js"></script>
