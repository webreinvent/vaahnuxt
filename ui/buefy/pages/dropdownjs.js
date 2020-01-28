import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Dropdown from '../../../ui/buefy/components/Dropdown/Dropdown'
import DropdownCode from "!raw-loader!../../../ui/buefy/components/Dropdown/Dropdown";

import ContentAndPosition from '../../../ui/buefy/components/Dropdown/ContentAndPosition'
import ContentAndPositionCode from "!raw-loader!../../../ui/buefy/components/Dropdown/ContentAndPosition";

import LinksWithin from '../../../ui/buefy/components/Dropdown/LinksWithin'
import LinksWithinCode from "!raw-loader!../../../ui/buefy/components/Dropdown/LinksWithin";

import CustomizingWithVModel from '../../../ui/buefy/components/Dropdown/CustomizingWithVModel'
import CustomizingWithVModelCode from "!raw-loader!../../../ui/buefy/components/Dropdown/CustomizingWithVModel";

import Multiple from '../../../ui/buefy/components/Dropdown/Multiple'
import MultipleCode from "!raw-loader!../../../ui/buefy/components/Dropdown/Multiple";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    DropdownCode() {return DropdownCode},
    ContentAndPositionCode() {return ContentAndPositionCode},
    LinksWithinCode() {return LinksWithinCode},
    CustomizingWithVModelCode() {return CustomizingWithVModelCode},
    MultipleCode() {return MultipleCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Dropdown,
    ContentAndPosition,
    LinksWithin,
    CustomizingWithVModel,
    Multiple,

  },
  methods:{

  },

}
