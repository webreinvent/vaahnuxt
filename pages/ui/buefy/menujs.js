import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Menu from '../../../ui/buefy/components/Menu/Menu'
import MenuCode from "!raw-loader!../../../ui/buefy/components/Menu/Menu";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    MenuCode() {return MenuCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Menu,

  },
  methods:{

  },

}
