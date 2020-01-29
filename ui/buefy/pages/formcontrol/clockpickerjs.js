import globalComponents from "../../../../ui/helpers/globalComponents";
import SideMenu from "../../partials/SideMenu";

import Clockpicker from '../../../../ui/buefy/components/FormControl/Clockpicker/Clockpicker'
import ClockpickerCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Clockpicker/Clockpicker";

import NonReadOnly from '../../../../ui/buefy/components/FormControl/Clockpicker/NonReadOnly'
import NonReadOnlyCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Clockpicker/NonReadOnly";

import Range from '../../../../ui/buefy/components/FormControl/Clockpicker/Range'
import RangeCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Clockpicker/Range";

import Footer from '../../../../ui/buefy/components/FormControl/Clockpicker/Footer'
import FooterCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Clockpicker/Footer";

import Colors from '../../../../ui/buefy/components/FormControl/Clockpicker/Colors'
import ColorsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Clockpicker/Colors";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    ClockpickerCode() {return ClockpickerCode},
    NonReadOnlyCode() {return NonReadOnlyCode},
    RangeCode() {return RangeCode},
    FooterCode() {return FooterCode},
    ColorsCode() {return ColorsCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Clockpicker,
    NonReadOnly,
    Range,
    Footer,
    Colors,

  },
  methods:{

  },

}