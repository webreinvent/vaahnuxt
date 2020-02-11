import globalComponents from "./../../../../ui/helpers/globalComponents";
import SideMenu from "../../partials/SideMenu";

import Radio from './../../../../ui/buefy/components/FormControl/Radio/Radio'
import RadioCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Radio/Radio";

import Sizes from './../../../../ui/buefy/components/FormControl/Radio/Sizes'
import SizesCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Radio/Sizes";

import Types from './../../../../ui/buefy/components/FormControl/Radio/Types'
import TypesCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Radio/Types";

import RadioButton from './../../../../ui/buefy/components/FormControl/Radio/RadioButton'
import RadioButtonCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Radio/RadioButton";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    RadioCode() {return RadioCode},
    SizesCode() {return SizesCode},
    TypesCode() {return TypesCode},
    RadioButtonCode() {return RadioButtonCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Radio,
    Sizes,
    Types,
    RadioButton,

  },
  methods:{

  },

}
