import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Collapse from '../../../ui/buefy/components/Collapse/Collapse'
import CollapseCode from "!raw-loader!../../../ui/buefy/components/Collapse/Collapse";

import Panel from '../../../ui/buefy/components/Collapse/Panel'
import PanelCode from "!raw-loader!../../../ui/buefy/components/Collapse/Panel";

import Card from '../../../ui/buefy/components/Collapse/Card'
import CardCode from "!raw-loader!../../../ui/buefy/components/Collapse/Card";

import Position from '../../../ui/buefy/components/Collapse/Position'
import PositionCode from "!raw-loader!../../../ui/buefy/components/Collapse/Position";

import AccordionEffect from '../../../ui/buefy/components/Collapse/AccordionEffect'
import AccordionEffectCode from "!raw-loader!../../../ui/buefy/components/Collapse/AccordionEffect";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    CollapseCode() {return CollapseCode},
    PanelCode() {return PanelCode},
    CardCode() {return CardCode},
    PositionCode() {return PositionCode},
    AccordionEffectCode() {return AccordionEffectCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Collapse,
    Panel,
    Card,
    Position,
    AccordionEffect,

  },
  methods:{

  },

}
