<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Dropdown"
                  link="https://buefy.org/documentation/dropdown">
    </SectionTitle>


    <SectionCode name="Dropdown" :code="DropdownCode">
      <Dropdown></Dropdown>
    </SectionCode>


    <SectionCode name="Content And Position" :code="ContentAndPositionCode">
      <ContentAndPosition></ContentAndPosition>
    </SectionCode>


    <SectionCode name="Links Within" :code="LinksWithinCode">
      <LinksWithin></LinksWithin>
    </SectionCode>


    <SectionCode name="Customizing With V-Model" :code="CustomizingWithVModelCode">
      <CustomizingWithVModel></CustomizingWithVModel>
    </SectionCode>


    <SectionCode name="Multiple" :code="MultipleCode">
      <Multiple></Multiple>
    </SectionCode>

  </div>

</template>

<script src="./dropdownjs.js"></script>
