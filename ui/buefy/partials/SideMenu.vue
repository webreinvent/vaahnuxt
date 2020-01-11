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
    </ul>


    <p class="menu-label">Form Controls</p>
    <ul class="menu-list">
      <li><nuxt-link to="/ui/buefy/button">Button</nuxt-link></li>
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
