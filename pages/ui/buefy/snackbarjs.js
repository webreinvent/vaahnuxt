import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Snackbar from '../../../ui/buefy/components/Snackbar/Snackbar'
import SnackbarCode from "!raw-loader!../../../ui/buefy/components/Snackbar/Snackbar";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    SnackbarCode() {return SnackbarCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Snackbar,

  },
  methods:{

  },

}
