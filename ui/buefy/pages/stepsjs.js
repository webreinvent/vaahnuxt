import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Steps from '../../../ui/buefy/components/Steps/Steps'
import StepsCode from "!raw-loader!../../../ui/buefy/components/Steps/Steps";

import Dynamic from '../../../ui/buefy/components/Steps/Dynamic'
import DynamicCode from "!raw-loader!../../../ui/buefy/components/Steps/Dynamic";

import Icons from '../../../ui/buefy/components/Steps/Icons'
import IconsCode from "!raw-loader!../../../ui/buefy/components/Steps/Icons";

import Sizes from '../../../ui/buefy/components/Steps/Sizes'
import SizesCode from "!raw-loader!../../../ui/buefy/components/Steps/Sizes";

import Types from '../../../ui/buefy/components/Steps/Types'
import TypesCode from "!raw-loader!../../../ui/buefy/components/Steps/Types";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    StepsCode() {return StepsCode},
    DynamicCode() {return DynamicCode},
    IconsCode() {return IconsCode},
    SizesCode() {return SizesCode},
    TypesCode() {return TypesCode},

  },
  components: {
    SectionTitle,
    SectionCode,
    Steps,
    Dynamic,
    Icons,
    Sizes,
    Types,

  },
  methods:{

  },

}
