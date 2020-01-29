import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Message from '../../../ui/buefy/components/Message/Message'
import MessageCode from "!raw-loader!../../../ui/buefy/components/Message/Message";

import Types from '../../../ui/buefy/components/Message/Types'
import TypesCode from "!raw-loader!../../../ui/buefy/components/Message/Types";

import Icons from '../../../ui/buefy/components/Message/Icons'
import IconsCode from "!raw-loader!../../../ui/buefy/components/Message/Icons";

import Headerless from '../../../ui/buefy/components/Message/Headerless'
import HeaderlessCode from "!raw-loader!../../../ui/buefy/components/Message/Headerless";

import Sizes from '../../../ui/buefy/components/Message/Sizes'
import SizesCode from "!raw-loader!../../../ui/buefy/components/Message/Sizes";

import AutoClose from '../../../ui/buefy/components/Message/AutoClose'
import AutoCloseCode from "!raw-loader!../../../ui/buefy/components/Message/AutoClose";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    MessageCode() {return MessageCode},
    TypesCode() {return TypesCode},
    IconsCode() {return IconsCode},
    HeaderlessCode() {return HeaderlessCode},
    SizesCode() {return SizesCode},
    AutoCloseCode() {return AutoCloseCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Message,
    Types,
    Icons,
    Headerless,
    Sizes,
    AutoClose

  },
  methods:{

  },

}
