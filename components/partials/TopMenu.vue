<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <nuxt-link to="/" class="navbar-item">
        <img src="./../../assets/images/logo-vaahnuxt.svg" width="112" height="28">
      </nuxt-link>


      <a role="button" class="navbar-burger burger" aria-label="menu"
         aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

    </div>

    <div id="navbarBasicExample" class="navbar-menu">


      <div class="navbar-end">

        <a href="https://demo.nuxt.vaah.dev"
           class="navbar-item"
           target="_blank">Demo</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            UI Guide
          </a>

          <div class="navbar-dropdown">
            <a href="https://demo.nuxt.vaah.dev/ui/buefy"
               target="_blank"
               class="navbar-item">Buefy</a>
            <a href="https://demo.nuxt.vaah.dev/ui/bulma"
               target="_blank"
               class="navbar-item">Bulma</a>
            <a href="https://demo.nuxt.vaah.dev/ui/docs"
               target="_blank"
               class="navbar-item">Docs</a>
            <hr class="navbar-divider">

            <a href="https://demo.nuxt.vaah.dev/ui/blocks"
               target="_blank"
               class="navbar-item">Blocks</a>


            <a href="https://demo.nuxt.vaah.dev/ui/blocks/cheatsheet"
               target="_blank"
               class="navbar-item">Cheat Sheet</a>
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

<style scoped>
  .navbar-item img{
    width: 174px;
    object-fit: contain;
    height: auto;
    max-height: unset!important;
  }
</style>
