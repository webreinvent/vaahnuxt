import SectionTitle from '../../../../ui/resuable/SectionTitle'
import SectionCode from '../../../../ui/resuable/SectionCode'

import Rate from '../../../../ui/buefy/components/FormControl/Rate/Rate'
import RateCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Rate/Rate";

import CustomRate from '../../../../ui/buefy/components/FormControl/Rate/CustomRate'
import CustomRateCode from "!raw-loader!../../../../ui/buefy/components/FormControl/Rate/CustomRate";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    RateCode() {return RateCode},
    CustomRateCode() {return CustomRateCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Rate,
    CustomRate

  },
  methods:{

  },

}
