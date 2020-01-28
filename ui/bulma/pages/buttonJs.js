import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Button from '../../../ui/buefy/components/Buttons/Button'
import ButtonCode from "!raw-loader!../../../ui/buefy/components/Buttons/Button";

import TypesAndStates from '../../../ui/buefy/components/Buttons/TypesAndStates'
import TypesAndStatesCode from "!raw-loader!../../../ui/buefy/components/Buttons/TypesAndStates";

import Size from '../../../ui/buefy/components/Buttons/Sizes'
import SizeCode from "!raw-loader!../../../ui/buefy/components/Buttons/Sizes";

import Icons from '../../../ui/buefy/components/Buttons/Icons'
import IconsCode from "!raw-loader!../../../ui/buefy/components/Buttons/Icons";

import Tags from '../../../ui/buefy/components/Buttons/Tags'
import TagsCode from "!raw-loader!../../../ui/buefy/components/Buttons/Tags";

import Router from '../../../ui/buefy/components/Buttons/Router'
import RouterCode from "!raw-loader!../../../ui/buefy/components/Buttons/Router";

export default {
  computed: {
    ButtonCode() {return ButtonCode},
    TypesAndStatesCode() {return TypesAndStatesCode},
    SizeCode() {return SizeCode},
    IconsCode() {return IconsCode},
    TagsCode() {return TagsCode},
    RouterCode() {return RouterCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Button,
    TypesAndStates,
    Size,
    Icons,
    Tags,
    Router,

  },
  methods:{

  },

}
