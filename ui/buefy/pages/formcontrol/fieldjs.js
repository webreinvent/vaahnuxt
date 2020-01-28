import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import Field from '../../../../ui/buefy/components/FormControl/Field/Field'
import FieldCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/Field";

import LabelPosition from '../../../../ui/buefy/components/FormControl/Field/LabelPosition'
import LabelPositionCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/LabelPosition";

import ObjectSyntax from '../../../../ui/buefy/components/FormControl/Field/ObjectSyntax'
import ObjectSyntaxCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/ObjectSyntax";

import Addons from '../../../../ui/buefy/components/FormControl/Field/Addons'
import AddonsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/Addons";

import Groups from '../../../../ui/buefy/components/FormControl/Field/Groups'
import GroupsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/Groups";

import NestedGroups from '../../../../ui/buefy/components/FormControl/Field/NestedGroups'
import NestedGroupsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/NestedGroups";

import ResponsiveGroups from '../../../../ui/buefy/components/FormControl/Field/ResponsiveGroups'
import ResponsiveGroupsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/ResponsiveGroups";

import Positions from '../../../../ui/buefy/components/FormControl/Field/Positions'
import PositionsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/Positions";

import CombiningAddonsAndGroups from '../../../../ui/buefy/components/FormControl/Field/CombiningAddonsAndGroups'
import CombiningAddonsAndGroupsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/CombiningAddonsAndGroups";

import Horizontal from '../../../../ui/buefy/components/FormControl/Field/Horizontal'
import HorizontalCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/Horizontal";

import LabelClasses from '../../../../ui/buefy/components/FormControl/Field/LabelClasses'
import LabelClassesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/LabelClasses";

import LabelSlot from '../../../../ui/buefy/components/FormControl/Field/LabelSlot'
import LabelSlotCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Field/LabelSlot";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    FieldCode() {return FieldCode},
    LabelPositionCode() {return LabelPositionCode},
    ObjectSyntaxCode() {return ObjectSyntaxCode},
    AddonsCode() {return AddonsCode},
    GroupsCode() {return GroupsCode},
    NestedGroupsCode() {return NestedGroupsCode},
    ResponsiveGroupsCode() {return ResponsiveGroupsCode},
    PositionsCode() {return PositionsCode},
    CombiningAddonsAndGroupsCode() {return CombiningAddonsAndGroupsCode},
    HorizontalCode() {return HorizontalCode},
    LabelClassesCode() {return LabelClassesCode},
    LabelSlotCode() {return LabelSlotCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Field,
    LabelPosition,
    ObjectSyntax,
    Addons,
    Groups,
    NestedGroups,
    ResponsiveGroups,
    Positions,
    CombiningAddonsAndGroups,
    Horizontal,
    LabelClasses,
    LabelSlot,

  },
  methods:{

  },

}
