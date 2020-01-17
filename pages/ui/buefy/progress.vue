<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Progress"
                  link="https://buefy.org/documentation/progress">
    </SectionTitle>


    <SectionCode name="Progress" :code="ProgressCode">
      <Progress></Progress>
    </SectionCode>


    <SectionCode name="Types" :code="TypesCode">
      <Types></Types>
    </SectionCode>


    <SectionCode name="Sizes" :code="SizesCode">
      <Sizes></Sizes>
    </SectionCode>


    <SectionCode name="Values" :code="ValuesCode">
      <Values></Values>
    </SectionCode>


    <SectionCode name="Slot" :code="SlotCode">
      <Slot></Slot>
    </SectionCode>


  </div>

</template>

<script src="./progressjs.js"></script>
