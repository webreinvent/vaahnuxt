import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Toast from '../../../ui/buefy/components/Toast/Toast'
import ToastCode from "!raw-loader!../../../ui/buefy/components/Toast/Toast";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    ToastCode() {return ToastCode},

  },
  components: {
    SectionTitle,
    SectionCode,
    Toast,

  },
  methods:{

  },

}
