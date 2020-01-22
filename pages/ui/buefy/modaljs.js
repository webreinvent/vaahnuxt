import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Modal from '../../../ui/buefy/components/Modal/Modal'
import ModalCode from "!raw-loader!../../../ui/buefy/components/Modal/Modal";

import ComponentModal from '../../../ui/buefy/components/Modal/ComponentModal'
import ComponentModalCode from "!raw-loader!../../../ui/buefy/components/Modal/ComponentModal";

import Programmatic from '../../../ui/buefy/components/Modal/Programmatic'
import ProgrammaticCode from "!raw-loader!../../../ui/buefy/components/Modal/Programmatic";

import FullScreen from '../../../ui/buefy/components/Modal/FullScreen'
import FullScreenCode from "!raw-loader!../../../ui/buefy/components/Modal/FullScreen";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    ModalCode() {return ModalCode},
    ComponentModalCode() {return ComponentModalCode},
    ProgrammaticCode() {return ProgrammaticCode},
    FullScreenCode() {return FullScreenCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Modal,
    ComponentModal,
    Programmatic,
    FullScreen,

  },
  methods:{

  },

}
