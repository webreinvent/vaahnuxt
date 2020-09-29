<template>

  <div class="side-menu">

    <b-input v-model="q" placeholder="Search"></b-input>


    <hr/>

      <b-menu class="is-extra-small">
        <b-menu-list v-if="list_filtered" v-for="(menu_list, ml_index) in list_filtered"
                     :key="ml_index"
                     :tag="link_tag"
                     :to="menu_list.link"
                     expanded
                     :label="menu_list.label">

          <b-menu-item v-if="menu_list.child"
                       v-for="(menu, m_index) in menu_list.child"
                       :tag="link_tag"
                       :to="menu.link"
                       :key="ml_index+m_index"
                       expanded
                       :label="menu.label">

            <b-menu-item v-if="menu.child" v-for="(item, i_index) in menu.child"
                         :key="ml_index+m_index+i_index"
                         :tag="link_tag"
                         :to="item.link"
                         expanded
                         :label="item.label">
            </b-menu-item>

          </b-menu-item>

        </b-menu-list>

      </b-menu>

  </div>

</template>

<script>
  import menu from '../content/sidemenu.json'
  import Fuse from "fuse.js";
  export default {
    computed:{
      root() {return this.$store.getters['root/state']},
      link_tag() {return this.$store.getters['root/state'].link_tag},
    },
    components:{
    },
    data(){
      let obj = {

        //----autocomplete users
        q: null,
        isOpen: 0,
        list: menu,
        list_filtered: menu,
        data: [],
        isTyping: null,
        fuse_config: {
          shouldSort: true,
          threshold: 0.2,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: ['label']
        }
        //----/autocomplete users

      }
      return obj;
    },
    watch: {
      q: function (newValue, oldValue) {

        let timeout;
        let self = this;

        clearTimeout(timeout);

        // Make a new timeout set to go off in 1000ms (1 second)
        timeout = setTimeout(function () {
          self.getFilteredList(newValue);
        }, 1200);

        //this.getFilteredList(newValue);
      },
    },
    methods: {
      getFilteredList(text) {

        let config = this.fuse_config;

        let list_filtered=[];
        let filtered = [];
        let fuse;


        if(text)
        {
          for(let key in this.list_filtered)
          {
            list_filtered[key] = JSON.parse(JSON.stringify(this.list[key]));
            fuse = new Fuse(list_filtered[key]['child'], config);
            filtered = fuse.search(text);
            list_filtered[key]['child'] = filtered;
          }
        } else
        {
          list_filtered = this.list;
        }

        this.list_filtered = list_filtered;

      }

      //-------------------------------------------------------------
      //-------------------------------------------------------------
      //-------------------------------------------------------------
      //-------------------------------------------------------------
      //-------------------------------------------------------------

    }



  }
</script>
