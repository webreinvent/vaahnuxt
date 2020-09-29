<template>

  <div>

    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul v-if="breadcrumbs">
        <li v-for="(item, index) in breadcrumbs"
            v-if="item" :class="{'is-active': count_breadcrumbs === index}">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </nav>

    <h1 class="title">
      {{page_name}}
    </h1>

    <hr class="has-margin-bottom-5 has-margin-top-5"/>

  </div>



</template>

<script>


  export default {
    components:{



    },

    data () {
      return {
        breadcrumbs: null,
        page_name: null,
        pathname: null,
        count_breadcrumbs: null,
      }
    },
    watch: {
      $route(to, from) {

      },
    },

    mounted() {

      this.pathname = window.location.pathname;

      this.toPageName(this.pathname);

    },

    methods: {
      toPageName: function (text) {

        this.breadcrumbs = text.split("/");

        this.count_breadcrumbs = this.breadcrumbs.length-1;
        console.log('--->', this.count_breadcrumbs);

        this.page_name = this.breadcrumbs[this.count_breadcrumbs];

        this.page_name = this.toUpperCaseWords(this.page_name);

      },
      toUpperCaseWords: function(str)
      {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },

    }

  }
</script>
