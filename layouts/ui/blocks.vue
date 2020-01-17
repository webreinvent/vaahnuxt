<template>
  <div>

    <TopMenu></TopMenu>

    <section class="menu">
      <ul>
        <li class="is-inline-block">
          <b-dropdown hoverable aria-role="list">
            <button class="button" slot="trigger">
              <span>Blocks</span>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item aria-role="listitem"><nuxt-link to="/ui/blocks">Blocks</nuxt-link></b-dropdown-item>
            <b-dropdown-item aria-role="listitem"><nuxt-link to="/ui/blocks/others">Blocks Two</nuxt-link></b-dropdown-item>
          </b-dropdown>
        </li>
        <li class="is-inline-block">
          <b-dropdown hoverable aria-role="list">
            <button class="button" slot="trigger">
              <span>Cards</span>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item aria-role="listitem"><nuxt-link to="/ui/blocks/cards">Cards</nuxt-link></b-dropdown-item>
            <b-dropdown-item aria-role="listitem"><nuxt-link to="/ui/blocks/cards-two">Cards Two</nuxt-link></b-dropdown-item>
          </b-dropdown>
        </li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/banner">Banner</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/pricing">Pricing</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/tabs">Tabs & Pills</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/calltoactions">Call To Actions</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/forms">Forms</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/blogs">Blogs</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/clientele">Clientele</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/faq">FAQ</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/list">List</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/testimonials">Testimonials</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/counter">Counter</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/process">Process</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/team">Team</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/portfolio">Portfolio</nuxt-link></li>
        <li class="is-inline-block button"><nuxt-link to="/ui/blocks/cheatsheet">Cheatsheet</nuxt-link></li>
      </ul>
    </section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">

          <div class="level">

            <div class="level-left">

              <h1 class="title is-block">
                VaahNuxt - Reusable UI Blocks<br/>
              </h1>
              <h2 class="subtitle">
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
  .level-left{
    flex-direction: column;
  }
</style>
