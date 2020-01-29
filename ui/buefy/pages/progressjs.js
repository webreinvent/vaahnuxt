import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Progress from '../../../ui/buefy/components/Progress/Progress'
import ProgressCode from "!raw-loader!../../../ui/buefy/components/Progress/Progress";

import Types from '../../../ui/buefy/components/Progress/Types'
import TypesCode from "!raw-loader!../../../ui/buefy/components/Progress/Types";

import Sizes from '../../../ui/buefy/components/Progress/Sizes'
import SizesCode from "!raw-loader!../../../ui/buefy/components/Progress/Sizes";

import Values from '../../../ui/buefy/components/Progress/Values'
import ValuesCode from "!raw-loader!../../../ui/buefy/components/Progress/Values";

import SlotProgress from '../../../ui/buefy/components/Progress/SlotProgress'
import SlotProgressCode from "!raw-loader!../../../ui/buefy/components/Progress/SlotProgress";

export default {
  layout: 'ui',
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
    SlotProgressCode() {return SlotProgressCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Progress,
    Types,
    Sizes,
    Values,
    SlotProgress,

  },
  methods:{

  },

}
