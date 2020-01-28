import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import Datepicker from '../../../../ui/buefy/components/FormControl/Datepicker/Datepicker'
import DatepickerCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/Datepicker";

import Editable from '../../../../ui/buefy/components/FormControl/Datepicker/Editable'
import EditableCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/Editable";

import Range from '../../../../ui/buefy/components/FormControl/Datepicker/Range'
import RangeCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/Range";

import Footer from '../../../../ui/buefy/components/FormControl/Datepicker/Footer'
import FooterCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/Footer";

import Header from '../../../../ui/buefy/components/FormControl/Datepicker/Header'
import HeaderCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/Header";

import MonthPicker from '../../../../ui/buefy/components/FormControl/Datepicker/MonthPicker'
import MonthPickerCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/MonthPicker";

import ProgrammaticallyOpening from '../../../../ui/buefy/components/FormControl/Datepicker/ProgrammaticallyOpening'
import ProgrammaticallyOpeningCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/ProgrammaticallyOpening";

import Inline from '../../../../ui/buefy/components/FormControl/Datepicker/Inline'
import InlineCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/Inline";

import Events from '../../../../ui/buefy/components/FormControl/Datepicker/Events'
import EventsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/Events";

import SelectARangeOfDates from '../../../../ui/buefy/components/FormControl/Datepicker/SelectARangeOfDates'
import SelectARangeOfDatesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/SelectARangeOfDates";

import SelectMultipleDates from '../../../../ui/buefy/components/FormControl/Datepicker/SelectMultipleDates'
import SelectMultipleDatesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Datepicker/SelectMultipleDates";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    DatepickerCode() {return DatepickerCode},
    EditableCode() {return EditableCode},
    RangeCode() {return RangeCode},
    FooterCode() {return FooterCode},
    HeaderCode() {return HeaderCode},
    MonthPickerCode() {return MonthPickerCode},
    ProgrammaticallyOpeningCode() {return ProgrammaticallyOpeningCode},
    InlineCode() {return InlineCode},
    EventsCode() {return EventsCode},
    SelectARangeOfDatesCode() {return SelectARangeOfDatesCode},
    SelectMultipleDatesCode() {return SelectMultipleDatesCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Datepicker,
    Editable,
    Range,
    Footer,
    Header,
    MonthPicker,
    ProgrammaticallyOpening,
    Inline,
    Events,
    SelectARangeOfDates,
    SelectMultipleDates,

  },
  methods:{

  },

}
