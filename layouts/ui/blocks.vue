<template>
  <div>

    <TopMenu></TopMenu>
    <section class="menu">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Blocks
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  <nuxt-link to="/ui/blocks">Blocks</nuxt-link>
                </a>
                <a class="navbar-item">
                  <nuxt-link to="/ui/blocks/others">Blocks Two</nuxt-link>
                </a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Cards
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  <nuxt-link to="/ui/blocks/cards">Cards</nuxt-link>
                </a>
                <a class="navbar-item">
                  <nuxt-link to="/ui/blocks/cards-two">Cards Two</nuxt-link>
                </a>
              </div>
            </div>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/banner">Banner</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/pricing">Pricing</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/tabs">Tabs & Pills</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/calltoactions">Call To Actions</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/forms">Forms</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/blogs">Blogs</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/clientele">Clientele</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/faq">FAQ</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/list">List</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/testimonials">Testimonials</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/counter">Counter</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/process">Process</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/team">Team</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/portfolio">Portfolio</nuxt-link>
            </a>
            <a class="navbar-item">
              <nuxt-link to="/ui/blocks/cheatsheet">Cheatsheet</nuxt-link>
            </a>
          </div>
        </div>
      </nav>
    </section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">

          <div class="columns">

            <div class="column">

              <h1 class="title is-block">
                VaahNuxt - Reusable UI Blocks<br/>
              </h1>
              <h2 class="title is-4 has-text-left">
                Reference for UI Blocks Future:
                <a target="_blank" href="https://www.froala.com/design-blocks">view</a>
              </h2>

            </div>

          </div>


        </div>
      </div>
    </section>

    <div class="">

      <nuxt />

    </div>
  <Footer></Footer>
  </div>
</template>

<script>

  import TopMenu from './../../components/partials/TopMenu'
  import SideMenu from './../../ui/blocks/partials/SideMenu'
  import Footer from './../../ui/partials/Footer'

  export default {
    components:{
      TopMenu,
      SideMenu,
      Footer,
    },

    data () {
      return {

      }
    }
  }
</script>

<style>
  .navbar-item, .navbar-link{
    padding: 0.5rem 10px;
  }
</style>
