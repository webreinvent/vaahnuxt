import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import ToolTip from '../../../ui/buefy/components/ToolTip/ToolTip'
import ToolTipCode from "!raw-loader!../../../ui/buefy/components/ToolTip/ToolTip";

import Styles from '../../../ui/buefy/components/ToolTip/Styles'
import StylesCode from "!raw-loader!../../../ui/buefy/components/ToolTip/Styles";

import Multilined from '../../../ui/buefy/components/ToolTip/Multilined'
import MultilinedCode from "!raw-loader!../../../ui/buefy/components/ToolTip/Multilined";

import Toggle from '../../../ui/buefy/components/ToolTip/Toggle'
import ToggleCode from "!raw-loader!../../../ui/buefy/components/ToolTip/Toggle";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    ToolTipCode() {return ToolTipCode},
    StylesCode() {return StylesCode},
    MultilinedCode() {return MultilinedCode},
    ToggleCode() {return ToggleCode},

  },
  components: {
    SectionTitle,
    SectionCode,
    ToolTip,
    Styles,
    Multilined,
    Toggle,

  },
  methods:{

  },

}
