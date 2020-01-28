import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import Select from '../../../../ui/buefy/components/FormControl/Select/Select'
import SelectCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Select/Select";

import Multiple from '../../../../ui/buefy/components/FormControl/Select/Multiple'
import MultipleCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Select/Multiple";

import Icons from '../../../../ui/buefy/components/FormControl/Select/Icons'
import IconsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Select/Icons";

import Sizes from '../../../../ui/buefy/components/FormControl/Select/Sizes'
import SizesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Select/Sizes";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    SelectCode() {return SelectCode},
    MultipleCode() {return MultipleCode},
    IconsCode() {return IconsCode},
    SizesCode() {return SizesCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Select,
    Multiple,
    Icons,
    Sizes,

  },
  methods:{

  },

}
