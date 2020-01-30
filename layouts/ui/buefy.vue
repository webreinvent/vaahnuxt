<template>
  <div>

    <TopMenu></TopMenu>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Buefy  - {{page_name}}
          </h1>
          <h2 class="subtitle">
            Buefy Default UI Blocks
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

  import TopMenu from './../../components/partials/TopMenu'
  import SideMenu from './../../ui/buefy/partials/SideMenu'
  import Footer from './../../ui/partials/Footer'

  export default {
    components:{
      TopMenu,
      SideMenu,
      Footer,
    },

    data () {
      return {

        page_name: null

      }
    },
    watch: {
      $route(to, from) {
        this.setPageName(to.fullPath);
      },
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();

        console.log('--->start');

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      });
      this.setPageName(this.$route.fullPath);
    },
    methods: {
      setPageName: function (fullPath) {
        this.page_name = this.$vaah.getPageName(fullPath);
        this.page_name = this.$vaah.ucfirst(this.page_name);
      }
    }
  }
</script>
