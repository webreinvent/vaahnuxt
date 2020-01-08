<template>
  <div>

    <TopMenu></TopMenu>

    <div class="container" >

      <section class="main-content columns">
        <aside class="column is-2 section">
          <UiSideMenu></UiSideMenu>
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

  import TopMenu from './partials/TopMenu'
  import UiSideMenu from './partials/UiSideMenu'
  import Footer from './partials/Footer'

  export default {
    components:{
      TopMenu,
      UiSideMenu,
      Footer,
    },

    data () {
      return {
        items: [
          {
            title: 'Home',
            icon: 'home',
            to: { name: 'index' }
          },
          {
            title: 'Inspire',
            icon: 'lightbulb',
            to: { name: 'inspire' }
          }
        ]
      }
    }
  }
</script>
