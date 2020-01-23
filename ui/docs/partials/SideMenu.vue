<template>
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">

      <li>
        <nuxt-link to="/ui/docs/uielements/uielementone">uielementone</nuxt-link>
      </li>
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

<style>
  .menu-list li ul{
    border-left: none !important;
  }
</style>
