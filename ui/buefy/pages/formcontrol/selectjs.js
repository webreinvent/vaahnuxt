import globalComponents from "./../../../../ui/helpers/globalComponents";
import SideMenu from "../../partials/SideMenu";

import Select from './../../../../ui/buefy/components/FormControl/Select/Select'
import SelectCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Select/Select";

import Multiple from './../../../../ui/buefy/components/FormControl/Select/Multiple'
import MultipleCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Select/Multiple";

import Icons from './../../../../ui/buefy/components/FormControl/Select/Icons'
import IconsCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Select/Icons";

import Sizes from './../../../../ui/buefy/components/FormControl/Select/Sizes'
import SizesCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Select/Sizes";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    SelectCode() {return SelectCode},
    MultipleCode() {return MultipleCode},
    IconsCode() {return IconsCode},
    SizesCode() {return SizesCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Select,
    Multiple,
    Icons,
    Sizes,

  },
  methods:{

  },

}
