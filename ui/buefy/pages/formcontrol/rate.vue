<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Rate"
                  link="https://buefy.org/documentation/rate/">
    </SectionTitle>


    <SectionCode name="Rate" :code="RateCode">
      <Rate></Rate>
    </SectionCode>


    <SectionCode name="Custom Rate" :code="CustomRateCode">
      <CustomRate></CustomRate>
    </SectionCode>


  </div>

</template>

<script src="./ratejs.js"></script>
