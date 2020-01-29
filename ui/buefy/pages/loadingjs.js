import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Loading from '../../../ui/buefy/components/Loading/Loading'
import LoadingCode from "!raw-loader!../../../ui/buefy/components/Loading/Loading";

import ProgrammaticallyOpening from '../../../ui/buefy/components/Loading/ProgrammaticallyOpening'
import ProgrammaticallyOpeningCode from "!raw-loader!../../../ui/buefy/components/Loading/ProgrammaticallyOpening";

import Templated from '../../../ui/buefy/components/Loading/Templated'
import TemplatedCode from "!raw-loader!../../../ui/buefy/components/Loading/Templated";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    LoadingCode() {return LoadingCode},
    ProgrammaticallyOpeningCode() {return ProgrammaticallyOpeningCode},
    TemplatedCode() {return TemplatedCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Loading,
    ProgrammaticallyOpening,
    Templated,

  },
  methods:{

  },

}
