<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Tag"
                  link="https://buefy.org/documentation/tag">
    </SectionTitle>


    <SectionCode name="Tag" :code="TagCode">
      <Tag></Tag>
    </SectionCode>



    <SectionCode name="Closable" :code="ClosableCode">
      <Closable></Closable>
    </SectionCode>



    <SectionCode name="TagList" :code="TagListCode">
      <TagList></TagList>
    </SectionCode>



    <SectionCode name="Sizes" :code="SizesCode">
      <Sizes></Sizes>
    </SectionCode>


  </div>

</template>

<script src="./tagjs.js"></script>
