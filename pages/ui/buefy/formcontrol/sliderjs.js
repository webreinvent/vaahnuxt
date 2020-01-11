import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import Slider from '../../../../ui/buefy/components/FormControl/Slider/Slider'
import SliderCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Slider/Slider";

import Sizes from '../../../../ui/buefy/components/FormControl/Slider/Sizes'
import SizesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Slider/Sizes";

import Types from '../../../../ui/buefy/components/FormControl/Slider/Types'
import TypesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Slider/Types";

import Customization from '../../../../ui/buefy/components/FormControl/Slider/Customization'
import CustomizationCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Slider/Customization";

import TickAndLabel from '../../../../ui/buefy/components/FormControl/Slider/TickAndLabel'
import TickAndLabelCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Slider/TickAndLabel";

import RangeSlider from '../../../../ui/buefy/components/FormControl/Slider/RangeSlider'
import RangeSliderCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Slider/RangeSlider";

import LazyUpdate from '../../../../ui/buefy/components/FormControl/Slider/LazyUpdate'
import LazyUpdateCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Slider/LazyUpdate";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    SliderCode() {return SliderCode},
    SizesCode() {return SizesCode},
    TypesCode() {return TypesCode},
    CustomizationCode() {return CustomizationCode},
    TickAndLabelCode() {return TickAndLabelCode},
    RangeSliderCode() {return RangeSliderCode},
    LazyUpdateCode() {return LazyUpdateCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Slider,
    Sizes,
    Types,
    Customization,
    TickAndLabel,
    RangeSlider,
    LazyUpdate

  },
  methods:{

  },

}
