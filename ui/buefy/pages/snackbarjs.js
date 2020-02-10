import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Snackbar from '../../../ui/buefy/components/Snackbar/Snackbar'
import SnackbarCode from "!raw-loader!../../../ui/buefy/components/Snackbar/Snackbar";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    SnackbarCode() {return SnackbarCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Snackbar,

  },
  methods:{

  },

}
