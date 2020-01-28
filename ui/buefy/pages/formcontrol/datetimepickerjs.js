import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import DateTimePicker from '../../../../ui/buefy/components/FormControl/Datetimepicker/DateTimePicker'
import DateTimePickerCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datetimepicker/DateTimePicker";

import Editable from '../../../../ui/buefy/components/FormControl/Datetimepicker/DateTimePicker'
import EditableCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datetimepicker/DateTimePicker";

import Range from '../../../../ui/buefy/components/FormControl/Datetimepicker/Range'
import RangeCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datetimepicker/Range";

import Footer from '../../../../ui/buefy/components/FormControl/Datetimepicker/Footer'
import FooterCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datetimepicker/Footer";

import Inline from '../../../../ui/buefy/components/FormControl/Datetimepicker/Inline'
import InlineCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datetimepicker/Inline";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    DateTimePickerCode() {return DateTimePickerCode},
    EditableCode() {return EditableCode},
    RangeCode() {return RangeCode},
    FooterCode() {return FooterCode},
    InlineCode() {return InlineCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    DateTimePicker,
    Editable,
    Range,
    Footer,
    Inline

  },
  methods:{

  },

}
