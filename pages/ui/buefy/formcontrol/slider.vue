<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Slider"
                  link="https://buefy.org/documentation/slider/">
    </SectionTitle>


    <SectionCode name="Slider" :code="SliderCode">
      <Slider></Slider>
    </SectionCode>


    <SectionCode name="Sizes" :code="SizesCode">
      <Sizes></Sizes>
    </SectionCode>


    <SectionCode name="Types" :code="TypesCode">
      <Types></Types>
    </SectionCode>


    <SectionCode name="Customization" :code="CustomizationCode">
      <Customization></Customization>
    </SectionCode>


    <SectionCode name="Tick And Label" :code="TickAndLabelCode">
      <TickAndLabel></TickAndLabel>
    </SectionCode>


    <SectionCode name="Range Slider" :code="RangeSliderCode">
      <RangeSlider></RangeSlider>
    </SectionCode>


    <SectionCode name="Lazy Update" :code="LazyUpdateCode">
      <LazyUpdate></LazyUpdate>
    </SectionCode>


  </div>

</template>

<script src="./sliderjs.js"></script>
