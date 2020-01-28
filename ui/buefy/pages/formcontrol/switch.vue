<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Switch"
                  link="https://buefy.org/documentation/switch/">
    </SectionTitle>


    <SectionCode name="Switch Default" :code="SwitchDefaultCode">
      <SwitchDefault></SwitchDefault>
    </SectionCode>


    <SectionCode name="Types" :code="TypesCode">
      <Types></Types>
    </SectionCode>


    <SectionCode name="Sizes" :code="SizesCode">
      <Sizes></Sizes>
    </SectionCode>


    <SectionCode name="Styles" :code="StylesCode">
      <Styles></Styles>
    </SectionCode>


  </div>

</template>

<script src="./switchjs.js"></script>
