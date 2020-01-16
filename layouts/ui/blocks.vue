<template>
  <div>

    <TopMenu></TopMenu>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">

          <div class="level">

            <div class="level-left">

              <h1 class="title">
                VaahNuxt - Reusable UI Blocks<br/>
              </h1>
              <h2 class="subtitle">
                Reference for UI Blocks Future:
                <a target="_blank" href="https://www.froala.com/design-blocks">view</a>
              </h2>

            </div>
            <div class="level-right">
              <b-dropdown position="is-bottom-left" aria-role="list">
                <button class="button" slot="trigger">
                  <span>More Items!!</span>
                  <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks">Blocks</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/others">Blocks Two</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/cards">Cards</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/cards-two">Cards Two</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/banner">Banner</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/pricing">Pricing</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/tabs">Tabs & Pills</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/calltoactions">Call To Actions</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/forms">Forms</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/blogs">Blogs</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/clientele">Clientele</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/faq">Frequently Asked Questions</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/list">List</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/testimonials">Testimonials</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/counter">Counter</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/process">Process</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/team">Team</nuxt-link></b-dropdown-item>
                <b-dropdown-item has-link aria-role="listitem"><nuxt-link to="/ui/blocks/portfolio">Portfolio</nuxt-link></b-dropdown-item>
              </b-dropdown>
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
