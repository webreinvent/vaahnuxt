import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Toast from '../../../ui/buefy/components/Toast/Toast'
import ToastCode from "!raw-loader!../../../ui/buefy/components/Toast/Toast";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    ToastCode() {return ToastCode},

  },
  components: {
    ...globalComponents,
    SideMenu,
    Toast,

  },
  methods:{

  },

}
