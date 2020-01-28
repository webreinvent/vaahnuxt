<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Numberinput"
                  link="https://buefy.org/documentation/numberinput/">
    </SectionTitle>


    <SectionCode name="Numberinput" :code="NumberinputCode">
      <Numberinput></Numberinput>
    </SectionCode>


    <SectionCode name="Types" :code="TypesCode">
      <Types></Types>
    </SectionCode>


    <SectionCode name=" Min - Max" :code=" MinMaxCode">
      <MinMax></MinMax>
    </SectionCode>


    <SectionCode name="Steps" :code="StepsCode">
      <Steps></Steps>
    </SectionCode>


    <SectionCode name="Sizes" :code="SizesCode">
      <Sizes></Sizes>
    </SectionCode>


    <SectionCode name="Customization" :code="CustomizationCode">
      <Customization></Customization>
    </SectionCode>


  </div>

</template>

<script src="./numberinputjs.js"></script>
