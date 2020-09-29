<template>

  <div>
    <TopMenu/>

    <!--sections-->
    <div class="container has-padding-10">

      <!--columns-->
      <div class="columns">
        <div class="column is-2">

          <SideMenu/>

        </div>
        <div class="column is-10">

          <PageHeader/>
          <!--sections-->
          <section class="">
            <div class="container">

              <slot></slot>

            </div>
          </section>
          <!--sections-->

        </div>
      </div>
      <!--/columns-->

    </div>
    <!--sections-->

    <Footer/>

  </div>

</template>

<script>
import TopMenu from "../../components/partials/TopMenu";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import PageHeader from "../resuable/PageHeader";


export default {
  data(){
    let obj = {

    }
    return obj;
  },
  components:{
    TopMenu,
    SideMenu,
    Footer,
    PageHeader,
  },
}
</script>

<style scoped>

</style>
