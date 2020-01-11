import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Collapse from '../../../ui/buefy/components/Collapse/Collapse'
import CollapseCode from "!raw-loader!../../../ui/buefy/components/Collapse/Collapse";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    CollapseCode() {return CollapseCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Collapse,

  },
  methods:{

  },

}
