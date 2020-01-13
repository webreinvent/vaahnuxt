import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Tabs from '../../../ui/buefy/components/Tabs/Tabs'
import TabsCode from "!raw-loader!../../../ui/buefy/components/Tabs/Tabs";

import Dynamic from '../../../ui/buefy/components/Tabs/Dynamic'
import DynamicCode from "!raw-loader!../../../ui/buefy/components/Tabs/Dynamic";


import Position from '../../../ui/buefy/components/Tabs/Position'
import PositionCode from "!raw-loader!../../../ui/buefy/components/Tabs/Position";


import Icons from '../../../ui/buefy/components/Tabs/Icons'
import IconsCode from "!raw-loader!../../../ui/buefy/components/Tabs/Icons";


import Sizes from '../../../ui/buefy/components/Tabs/Sizes'
import SizesCode from "!raw-loader!../../../ui/buefy/components/Tabs/Sizes";


import Types from '../../../ui/buefy/components/Tabs/Types'
import TypesCode from "!raw-loader!../../../ui/buefy/components/Tabs/Types";



import Expanded from '../../../ui/buefy/components/Tabs/Expanded'
import ExpandedCode from "!raw-loader!../../../ui/buefy/components/Tabs/Expanded";



import CustomHeaders from '../../../ui/buefy/components/Tabs/CustomHeaders'
import CustomHeadersCode from "!raw-loader!../../../ui/buefy/components/Tabs/CustomHeaders";



import Vertical from '../../../ui/buefy/components/Tabs/Vertical'
import VerticalCode from "!raw-loader!../../../ui/buefy/components/Tabs/Vertical";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    TabsCode() {return TabsCode},
    DynamicCode() {return DynamicCode},
    PositionCode() {return PositionCode},
    IconsCode() {return IconsCode},
    SizesCode() {return SizesCode},
    TypesCode() {return TypesCode},
    ExpandedCode() {return ExpandedCode},
    CustomHeadersCode() {return CustomHeadersCode},
    VerticalCode() {return VerticalCode},

  },
  components: {
    SectionTitle,
    SectionCode,
    Tabs,
    Dynamic,
    Position,
    Icons,
    Sizes,
    Types,
    Expanded,
    CustomHeaders,
    Vertical,


  },
  methods:{

  },

}
