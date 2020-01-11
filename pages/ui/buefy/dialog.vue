<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Dialog"
                  link="https://buefy.org/documentation/dialog">
    </SectionTitle>


    <SectionCode name="Alert" :code="AlertCode">
      <Alert></Alert>
    </SectionCode>


    <SectionCode name="Confirm" :code="ConfirmCode">
      <Confirm></Confirm>
    </SectionCode>


    <SectionCode name="Prompt" :code="PromptCode">
      <Prompt></Prompt>
    </SectionCode>

  </div>

</template>

<script src="./dialogjs.js"></script>
