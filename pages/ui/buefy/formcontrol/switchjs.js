import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import SwitchDefault from '../../../../ui/buefy/components/FormControl/Switch/SwitchDefault'
import SwitchDefaultCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Switch/SwitchDefault";

import Types from '../../../../ui/buefy/components/FormControl/Switch/Types'
import TypesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Switch/Types";

import Sizes from '../../../../ui/buefy/components/FormControl/Switch/Sizes'
import SizesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Switch/Sizes";

import Styles from '../../../../ui/buefy/components/FormControl/Switch/Styles'
import StylesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Switch/Styles";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    SwitchDefaultCode() {return SwitchDefaultCode},
    TypesCode() {return TypesCode},
    SizesCode() {return SizesCode},
    StylesCode() {return StylesCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    SwitchDefault,
    Types,
    Sizes,
    Styles,

  },
  methods:{

  },

}
