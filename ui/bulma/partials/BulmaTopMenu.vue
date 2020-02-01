<template>
  <nav class="navbar zindex" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <nuxt-link to="/ui/bulma" class="navbar-item">
        Bulma Blocks
      </nuxt-link>


      <a role="button" class="navbar-burger burger" aria-label="menu"
         aria-expanded="false" data-target="navbarUIBlocks">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

    </div>

    <div id="navbarUIBlocks" class="navbar-menu">
      <div class="navbar-start">

        <div class="navbar-item has-dropdown">

          <nuxt-link class="navbar-link" to="/ui/bulma"> Layouts</nuxt-link>

          <div class="navbar-dropdown">
            <nuxt-link to="/ui/bulma" class="navbar-item">Container</nuxt-link>
            <nuxt-link to="/ui/bulma/layouts/level" class="navbar-item">Level</nuxt-link>
            <nuxt-link to="/ui/bulma/layouts/mediaobject" class="navbar-item">Media Object</nuxt-link>
            <nuxt-link to="/ui/bulma/layouts/hero" class="navbar-item">Hero</nuxt-link>
            <nuxt-link to="/ui/bulma/layouts/footer" class="navbar-item">Footer</nuxt-link>
            <nuxt-link to="/ui/bulma/layouts/tiles" class="navbar-item">Tiles</nuxt-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link class="navbar-link" to="/ui/bulma/forms/general">Form</nuxt-link>


          <div class="navbar-dropdown">
            <nuxt-link to="/ui/bulma/forms/general" class="navbar-item">General</nuxt-link>
            <nuxt-link to="/ui/bulma/forms/input" class="navbar-item">Input</nuxt-link>
            <nuxt-link to="/ui/bulma/forms/textarea" class="navbar-item">Text Area</nuxt-link>
            <nuxt-link to="/ui/bulma/forms/select" class="navbar-item">Select</nuxt-link>
            <nuxt-link to="/ui/bulma/forms/checkbox" class="navbar-item">Checkbox</nuxt-link>
            <nuxt-link to="/ui/bulma/forms/radio" class="navbar-item">Radio Button</nuxt-link>
            <nuxt-link to="/ui/bulma/forms/file" class="navbar-item">File Upload</nuxt-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link class="navbar-link" to="/ui/bulma/elements/box">Elements</nuxt-link>


          <div class="navbar-dropdown">
            <nuxt-link to="/ui/bulma/elements/box" class="navbar-item">Box</nuxt-link>
            <nuxt-link to="/ui/bulma/elements/button" class="navbar-item">Button</nuxt-link>
            <nuxt-link to="/ui/bulma/elements/content" class="navbar-item">Content</nuxt-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <nuxt-link to="/ui/bulma/forms/general">Components</nuxt-link>
          </a>

          <div class="navbar-dropdown">
            <nuxt-link to="/ui/bulma/forms/general" class="navbar-item">General</nuxt-link>
          </div>
        </div>



      </div>


    </div>
  </nav>

</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style>
  .zindex{
    z-index: 10;
  }
  .zindex .navbar-brand{
    font-weight: 700;
    text-transform: uppercase;
  }
</style>
