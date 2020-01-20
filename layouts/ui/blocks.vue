<template>
  <div>

    <TopMenu></TopMenu>
    <BlockTopMenu></BlockTopMenu>


    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            UI Blocks - {{page_name}}
          </h1>
          <h2 class="subtitle">
            Reference for UI Blocks Future:
            <a target="_blank" href="https://www.froala.com/design-blocks">view</a>
          </h2>
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
  import BlockTopMenu from "../../ui/blocks/partials/BlockTopMenu";

  export default {
    components:{
      TopMenu,
      BlockTopMenu,
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

    mounted() {
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

<style>
  .level-left{
    flex-direction: column;
  }
</style>
