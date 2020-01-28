<template>

  <div class="main-content">

    <SectionTitle title="Buefy - TimePicker"
                  link="https://buefy.org/documentation/timepicker/">
    </SectionTitle>


    <SectionCode name="TimePicker" :code="TimePickerCode">
      <TimePicker></TimePicker>
    </SectionCode>


    <SectionCode name="Editable (non readonly)" :code="EditableCode">
      <Editable></Editable>
    </SectionCode>


    <SectionCode name="Range" :code="RangeCode">
      <Range></Range>
    </SectionCode>


    <SectionCode name="Footer" :code="FooterCode">
      <Footer></Footer>
    </SectionCode>


    <SectionCode name="Inline" :code="InlineCode">
      <Inline></Inline>
    </SectionCode>


  </div>

</template>

<script src="./timepickerjs.js"></script>
