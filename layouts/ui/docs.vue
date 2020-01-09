<template>
  <div>

    <TopMenu></TopMenu>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Docs UI Blocks
          </h1>
          <h2 class="subtitle">
            UI Blocks helpful for creating Docs
          </h2>
        </div>
      </div>
    </section>

    <div class="container" >

      <section class="main-content columns">
        <aside class="column is-2 section">
          <SideMenu></SideMenu>
        </aside>

        <div class="container column is-10">



          <nuxt />
        </div>
      </section>

      <Footer></Footer>

    </div>

  </div>
</template>

<script>

  import TopMenu from './../partials/TopMenu'
  import SideMenu from './../../ui/docs/partials/SideMenu'
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
