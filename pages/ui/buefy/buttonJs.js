import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Button from '../../../ui/buefy/components/Buttons/Button'
import ButtonCode from "!raw-loader!../../../ui/buefy/components/Buttons/Button";

import TypesAndStates from '../../../ui/buefy/components/Buttons/TypesAndStates'
import TypesAndStatesCode from "!raw-loader!../../../ui/buefy/components/Buttons/TypesAndStates";


export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    ButtonCode() {return ButtonCode},
    TypesAndStatesCode() {return TypesAndStatesCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Button,
    TypesAndStates,

  },
  methods:{

  },

}
