import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Menu from '../../../ui/buefy/components/Menu/Menu'
import MenuCode from "!raw-loader!../../../ui/buefy/components/Menu/Menu";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    MenuCode() {return MenuCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Menu,

  },
  methods:{

  },

}
