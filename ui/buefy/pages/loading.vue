<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Loading"
                  link="https://buefy.org/documentation/loading/">
    </SectionTitle>


    <SectionCode name="Loading" :code="LoadingCode">
      <Loading></Loading>
    </SectionCode>


    <SectionCode name="Programmatically Opening" :code="ProgrammaticallyOpeningCode">
      <ProgrammaticallyOpening></ProgrammaticallyOpening>
    </SectionCode>


    <SectionCode name="Templated" :code="TemplatedCode">
      <Templated></Templated>
    </SectionCode>


  </div>

</template>

<script src="./loadingjs.js"></script>
