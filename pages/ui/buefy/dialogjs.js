import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Alert from '../../../ui/buefy/components/Dialog/Alert'
import AlertCode from "!raw-loader!../../../ui/buefy/components/Dialog/Alert";

import Confirm from '../../../ui/buefy/components/Dialog/Confirm'
import ConfirmCode from "!raw-loader!../../../ui/buefy/components/Dialog/Confirm";

import Prompt from '../../../ui/buefy/components/Dialog/Prompt'
import PromptCode from "!raw-loader!../../../ui/buefy/components/Dialog/Prompt";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    AlertCode() {return AlertCode},
    ConfirmCode() {return ConfirmCode},
    PromptCode() {return PromptCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Alert,
    Confirm,
    Prompt,

  },
  methods:{

  },

}
