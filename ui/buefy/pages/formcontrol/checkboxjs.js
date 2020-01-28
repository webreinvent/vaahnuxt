import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import Checkbox from '../../../../ui/buefy/components/FormControl/Checkbox/Checkbox'
import CheckboxCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Checkbox/Checkbox";

import Grouped from '../../../../ui/buefy/components/FormControl/Checkbox/Grouped'
import GroupedCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Checkbox/Grouped";

import Sizes from '../../../../ui/buefy/components/FormControl/Checkbox/Sizes'
import SizesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Checkbox/Sizes";

import Types from '../../../../ui/buefy/components/FormControl/Checkbox/Types'
import TypesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Checkbox/Types";

import CheckboxButton from '../../../../ui/buefy/components/FormControl/Checkbox/CheckboxButton'
import CheckboxButtonCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Checkbox/CheckboxButton";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    CheckboxCode() {return CheckboxCode},
    GroupedCode() {return GroupedCode},
    SizesCode() {return SizesCode},
    TypesCode() {return TypesCode},
    CheckboxButtonCode() {return CheckboxButtonCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Checkbox,
    Grouped,
    Sizes,
    Types,
    CheckboxButton,

  },
  methods:{

  },

}
