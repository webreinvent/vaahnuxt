import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import TagInput from '../../../../ui/buefy/components/FormControl/TagInput/TagInput'
import TagInputCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/TagInput";

import AutoComplete from '../../../../ui/buefy/components/FormControl/TagInput/AutoComplete'
import AutoCompleteCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/AutoComplete";

import TemplatedAutocomplete from '../../../../ui/buefy/components/FormControl/TagInput/TemplatedAutocomplete'
import TemplatedAutocompleteCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/TemplatedAutocomplete";

import Limits from '../../../../ui/buefy/components/FormControl/TagInput/Limits'
import LimitsCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/Limits";

import States from '../../../../ui/buefy/components/FormControl/TagInput/States'
import StatesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/States";

import TagTypes from '../../../../ui/buefy/components/FormControl/TagInput/TagTypes'
import TagTypesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/TagTypes";

import Sizes from '../../../../ui/buefy/components/FormControl/TagInput/Sizes'
import SizesCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/Sizes";

import Modifiers from '../../../../ui/buefy/components/FormControl/TagInput/Modifiers'
import ModifiersCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/Modifiers";

import Validation from '../../../../ui/buefy/components/FormControl/TagInput/Validation'
import ValidationCode from "!raw-loader!../../../../ui/buefy/components/FormControl/TagInput/Validation";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    TagInputCode() {return TagInputCode},
    AutoCompleteCode() {return AutoCompleteCode},
    TemplatedAutocompleteCode() {return TemplatedAutocompleteCode},
    LimitsCode() {return LimitsCode},
    StatesCode() {return StatesCode},
    TagTypesCode() {return TagTypesCode},
    SizesCode() {return SizesCode},
    ModifiersCode() {return ModifiersCode},
    ValidationCode() {return ValidationCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    TagInput,
    AutoComplete,
    TemplatedAutocomplete,
    Limits,
    States,
    TagTypes,
    Sizes,
    Modifiers,
    Validation,

  },
  methods:{

  },

}
