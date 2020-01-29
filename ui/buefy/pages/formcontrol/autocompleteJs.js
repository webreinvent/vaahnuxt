import globalComponents from "../../../../ui/helpers/globalComponents";
import SideMenu from "../../partials/SideMenu";

import AutoComplete from '../../../../ui/buefy/components/FormControl/AutoComplete/AutoComplete'
import AutoCompleteCode from "!raw-loader!../../../../ui/buefy/components/FormControl/AutoComplete/AutoComplete";

import ObjectArray from '../../../../ui/buefy/components/FormControl/Autocomplete/ObjectArray'
import ObjectArrayCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Autocomplete/ObjectArray";

import Header from '../../../../ui/buefy/components/FormControl/Autocomplete/Header'
import HeaderCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Autocomplete/Header";

import Footer from '../../../../ui/buefy/components/FormControl/Autocomplete/Footer'
import FooterCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Autocomplete/Footer";

import AsyncWithCustomTemplate from '../../../../ui/buefy/components/FormControl/Autocomplete/AsyncWithCustomTemplate'
import AsyncWithCustomTemplateCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Autocomplete/AsyncWithCustomTemplate";

import AsyncWithInfiniteScroll from '../../../../ui/buefy/components/FormControl/Autocomplete/AsyncWithInfiniteScroll'
import AsyncWithInfiniteScrollCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Autocomplete/AsyncWithInfiniteScroll";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    AutoCompleteCode() {return AutoCompleteCode},
    ObjectArrayCode() {return ObjectArrayCode},
    HeaderCode() {return HeaderCode},
    FooterCode() {return FooterCode},
    AsyncWithCustomTemplateCode() {return AsyncWithCustomTemplateCode},
    AsyncWithInfiniteScrollCode() {return AsyncWithInfiniteScrollCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    AutoComplete,
    ObjectArray,
    Header,
    Footer,
    AsyncWithCustomTemplate,
    AsyncWithInfiniteScroll,

  },
  methods:{

  },

}
