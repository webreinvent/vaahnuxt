<template>


      <nuxt-link to="/" class="navbar-item">
        <img src="../../assets/images/logo.svg" width="112" height="28">
      </nuxt-link>

        <nuxt-link to="/" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </nuxt-link>


        <a role="button" class="navbar-burger burger" aria-label="menu"
           aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

          <nuxt-link to="/" class="navbar-item">Home</nuxt-link>

          <nuxt-link to="/ui/buefy" class="navbar-item">Buefy</nuxt-link>
          <nuxt-link to="/ui/docs" class="navbar-item">Docs</nuxt-link>

        </div>

        <div class="navbar-end">

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              UI Guide
            </a>

            <div class="navbar-dropdown">
              <nuxt-link to="/ui/buefy" class="navbar-item">Buefy</nuxt-link>
              <nuxt-link to="/ui/docs" class="navbar-item">Docs</nuxt-link>
              <hr class="navbar-divider">
              <nuxt-link to="/ui/blocks" class="navbar-item">Blocks</nuxt-link>
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

