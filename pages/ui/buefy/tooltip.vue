<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Tooltip"
                  link="https://buefy.org/documentation/tooltip">
    </SectionTitle>


    <SectionCode name="Tooltip" :code="ToolTipCode">
      <ToolTip></ToolTip>
    </SectionCode>



    <SectionCode name="Styles" :code="StylesCode">
      <Styles></Styles>
    </SectionCode>



    <SectionCode name="Multilined" :code="MultilinedCode">
      <Multilined></Multilined>
    </SectionCode>



    <SectionCode name="Toggle" :code="ToggleCode">
      <Toggle></Toggle>
    </SectionCode>


  </div>

</template>

<script src="./tooltipjs.js"></script>
