import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Progress from '../../../ui/buefy/components/Progress/Progress'
import ProgressCode from "!raw-loader!../../../ui/buefy/components/Progress/Progress";

import Types from '../../../ui/buefy/components/Progress/Types'
import TypesCode from "!raw-loader!../../../ui/buefy/components/Progress/Types";

import Sizes from '../../../ui/buefy/components/Progress/Sizes'
import SizesCode from "!raw-loader!../../../ui/buefy/components/Progress/Sizes";

import Values from '../../../ui/buefy/components/Progress/Values'
import ValuesCode from "!raw-loader!../../../ui/buefy/components/Progress/Values";

import Slot from '../../../ui/buefy/components/Progress/Slot'
import SlotCode from "!raw-loader!../../../ui/buefy/components/Progress/Slot";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    ProgressCode() {return ProgressCode},
    TypesCode() {return TypesCode},
    SizesCode() {return SizesCode},
    ValuesCode() {return ValuesCode},
    SlotCode() {return SlotCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Progress,
    Types,
    Sizes,
    Values,
    Slot,

  },
  methods:{

  },

}
