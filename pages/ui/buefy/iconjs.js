import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Icon from '../../../ui/buefy/components/Icon/Icon'
import IconCode from "!raw-loader!../../../ui/buefy/components/Icon/Icon";

import FontAwesome from '../../../ui/buefy/components/Icon/FontAwesome'
import FontAwesomeCode from "!raw-loader!../../../ui/buefy/components/Icon/FontAwesome";

import ObjectSyntax from '../../../ui/buefy/components/Icon/ObjectSyntax'
import ObjectSyntaxCode from "!raw-loader!../../../ui/buefy/components/Icon/ObjectSyntax";

import CustomIconPack from '../../../ui/buefy/components/Icon/CustomIconPack'
import CustomIconPackCode from "!raw-loader!../../../ui/buefy/components/Icon/CustomIconPack";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    IconCode() {return IconCode},
    FontAwesomeCode() {return FontAwesomeCode},
    ObjectSyntaxCode() {return ObjectSyntaxCode},
    CustomIconPackCode() {return CustomIconPackCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Icon,
    FontAwesome,
    ObjectSyntax,
    CustomIconPack,

  },
  methods:{

  },

}
