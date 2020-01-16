import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Tag from '../../../ui/buefy/components/Tag/Tag'
import TagCode from "!raw-loader!../../../ui/buefy/components/Tag/Tag";

import Closable from '../../../ui/buefy/components/Tag/Closable'
import ClosableCode from "!raw-loader!../../../ui/buefy/components/Tag/Closable";

import TagList from '../../../ui/buefy/components/Tag/TagList'
import TagListCode from "!raw-loader!../../../ui/buefy/components/Tag/TagList";

import Sizes from '../../../ui/buefy/components/Tag/Sizes'
import SizesCode from "!raw-loader!../../../ui/buefy/components/Tag/Sizes";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    TagCode() {return TagCode},
    ClosableCode() {return ClosableCode},
    TagListCode() {return TagListCode},
    SizesCode() {return SizesCode},

  },
  components: {
    SectionTitle,
    SectionCode,
    Tag,
    Closable,
    TagList,
    Sizes,

  },
  methods:{

  },

}
