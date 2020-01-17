<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Button"
                  link="https://buefy.org/documentation/button/">
    </SectionTitle>


    <SectionCode name="Button" :code="ButtonCode">
      <Button></Button>
    </SectionCode>


    <SectionCode name="Types and states" :code="TypesAndStatesCode">
      <TypesAndStates></TypesAndStates>
    </SectionCode>

    <SectionCode name="Size" :code="SizeCode">
      <Size></Size>
    </SectionCode>

    <SectionCode name="Icons" :code="IconsCode">
      <Icons></Icons>
    </SectionCode>

    <SectionCode name="Tags" :code="TagsCode">
      <Tags></Tags>
    </SectionCode>

    <SectionCode name="Router" :code="RouterCode">
      <Router></Router>
    </SectionCode>


  </div>

</template>

<script src="./buttonJs.js"></script>
