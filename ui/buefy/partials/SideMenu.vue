<template>

  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><nuxt-link to="/ui/buefy/button">Button</nuxt-link></li>
    </ul>

    <p class="menu-label">UI COMPONENTS</p>
    <ul class="menu-list">
      <li><nuxt-link to="/ui/buefy/button">Button</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/carousel">Carousel</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/collapse">Collapse</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/dialog">Dialog</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/dropdown">Dropdown</nuxt-link></li>
    </ul>


    <p class="menu-label">Form Controls</p>
    <ul class="menu-list">
      <li><nuxt-link to="/ui/buefy/formcontrol/autocomplete">Autocomplete</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/formcontrol/checkbox">Checkbox</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/formcontrol/clockpicker">Clockpicker</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/formcontrol/datepicker">Datepicker</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/formcontrol/datetimepicker">Datetimepicker</nuxt-link></li>
      <li><nuxt-link to="/ui/buefy/formcontrol/field">Field</nuxt-link></li>
    </ul>

  </aside>

</template>

<script>
  export default {
    data() {
      return {
        isActive: true
      }
    }
  }
</script>
