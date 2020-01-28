<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Datetimepicker"
                  link="https://buefy.org/documentation/datetimepicker/">
    </SectionTitle>


    <SectionCode name="DateTimePicker" :code="DateTimePickerCode">
      <DateTimePicker></DateTimePicker>
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

<script src="./datetimepickerjs.js"></script>
