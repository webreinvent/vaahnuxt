import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Notification from '../../../ui/buefy/components/Notification/Notification'
import NotificationCode from "!raw-loader!../../../ui/buefy/components/Notification/Notification";

import Types from '../../../ui/buefy/components/Notification/Types'
import TypesCode from "!raw-loader!../../../ui/buefy/components/Notification/Types";

import Icons from '../../../ui/buefy/components/Notification/Icons'
import IconsCode from "!raw-loader!../../../ui/buefy/components/Notification/Icons";

import AutoClose from '../../../ui/buefy/components/Notification/AutoClose'
import AutoCloseCode from "!raw-loader!../../../ui/buefy/components/Notification/AutoClose";

import ProgrammaticallyOpening from '../../../ui/buefy/components/Notification/ProgrammaticallyOpening'
import ProgrammaticallyOpeningCode from "!raw-loader!../../../ui/buefy/components/Notification/ProgrammaticallyOpening";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    NotificationCode() {return NotificationCode},
    TypesCode() {return TypesCode},
    IconsCode() {return IconsCode},
    AutoCloseCode() {return AutoCloseCode},
    ProgrammaticallyOpeningCode() {return ProgrammaticallyOpeningCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Notification,
    Types,
    Icons,
    AutoClose,
    ProgrammaticallyOpening,

  },
  methods:{

  },

}
