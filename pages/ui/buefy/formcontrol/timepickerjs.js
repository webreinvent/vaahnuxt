import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import TimePicker from '../../../../ui/buefy/components/FormControl/Timepicker/TimePicker'
import TimePickerCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Timepicker/TimePicker";

import Editable from '../../../../ui/buefy/components/FormControl/Timepicker/Editable'
import EditableCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Timepicker/Editable";

import Range from '../../../../ui/buefy/components/FormControl/Timepicker/Range'
import RangeCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Timepicker/Range";

import Footer from '../../../../ui/buefy/components/FormControl/Timepicker/Footer'
import FooterCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Timepicker/Footer";

import Inline from '../../../../ui/buefy/components/FormControl/Timepicker/Inline'
import InlineCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Timepicker/Inline";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    TimePickerCode() {return TimePickerCode},
    EditableCode() {return EditableCode},
    RangeCode() {return RangeCode},
    FooterCode() {return FooterCode},
    InlineCode() {return InlineCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    TimePicker,
    Editable,
    Range,
    Footer,
    Inline,

  },
  methods:{

  },

}
