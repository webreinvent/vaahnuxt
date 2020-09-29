<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <vaah-link to="/" class="navbar-item">
        <img src="/images/logo-vaahnuxt.svg" width="112" height="28">
      </vaah-link>


        <a role="button" class="navbar-burger burger" aria-label="menu"
           aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div id="navbarBasicExample" class="navbar-menu">


        <div class="navbar-end">

          <vaah-link to="/" class="navbar-item">Home</vaah-link>
          <vaah-link to="/ui/bulma" class="navbar-item">Bulma</vaah-link>
          <vaah-link to="/ui/buefy" class="navbar-item">Buefy</vaah-link>
          <vaah-link to="/ui/docs" class="navbar-item">Docs</vaah-link>
          <vaah-link to="/ui/blocks" class="navbar-item">Blocks</vaah-link>
          <vaah-link to="/ui/page-layouts/layout-v1" class="navbar-item">Page Layouts</vaah-link>
          <vaah-link to="/ui/blocks/cheatsheet" class="navbar-item">Cheatsheet</vaah-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              UI Guide
            </a>

            <div class="navbar-dropdown">
              <vaah-link to="/ui/buefy" class="navbar-item">Buefy</vaah-link>
              <vaah-link to="/ui/bulma" class="navbar-item">Bulma</vaah-link>
              <vaah-link to="/ui/docs" class="navbar-item">Docs</vaah-link>
              <hr class="navbar-divider">
              <vaah-link to="/ui/blocks" class="navbar-item">Blocks</vaah-link>
              <vaah-link to="/ui/page-layouts/layout-v1" class="navbar-item">Page Layouts</vaah-link>
              <vaah-link to="/ui/blocks/cheatsheet" class="navbar-item">Cheatsheet</vaah-link>
            </div>
          </div>

          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>


</template>
<script>
  import VaahLink from '../../vaahnuxt/resuable/VaahLink';
  export default {
    data() {
      return {
        isActive: true
      }
    },
    components:{
      VaahLink,
    },
  }
</script>
<style scoped>
  .navbar-item img{
    width: 174px;
    object-fit: contain;
    height: auto;
    max-height: unset!important;
  }
</style>

