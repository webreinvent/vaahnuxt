import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Loading from '../../../ui/buefy/components/Loading/Loading'
import LoadingCode from "!raw-loader!../../../ui/buefy/components/Loading/Loading";

import ProgrammaticallyOpening from '../../../ui/buefy/components/Loading/ProgrammaticallyOpening'
import ProgrammaticallyOpeningCode from "!raw-loader!../../../ui/buefy/components/Loading/ProgrammaticallyOpening";

import Templated from '../../../ui/buefy/components/Loading/Templated'
import TemplatedCode from "!raw-loader!../../../ui/buefy/components/Loading/Templated";

export default {
  layout: 'ui/buefy',
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
    SectionTitle,
    SectionCode,
    Loading,
    ProgrammaticallyOpening,
    Templated,

  },
  methods:{

  },

}
