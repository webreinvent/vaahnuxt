<template>

  <div class="main-content">

    <SectionTitle title="Buefy - Icon"
                  link="https://buefy.org/documentation/icon/">
    </SectionTitle>


    <SectionCode name=" Material Design Icons" :code="IconCode">
      <Icon></Icon>
    </SectionCode>


    <SectionCode name="FontAwesome" :code="FontAwesomeCode">
      <FontAwesome></FontAwesome>
    </SectionCode>


    <SectionCode name="Object Syntax" :code="ObjectSyntaxCode">
      <ObjectSyntax></ObjectSyntax>
    </SectionCode>


    <SectionCode name="Custom Icon Pack" :code="CustomIconPackCode">
      <b-notification
        type="is-warning"
        aria-close-label="Close notification"
        role="alert">
        Custom Icon Pack Generating errors and needs to be fixed.
      </b-notification>
      <!--<CustomIconPack></CustomIconPack>-->
    </SectionCode>


  </div>

</template>

<script src="./iconjs.js"></script>
