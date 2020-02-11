import globalComponents from "./../../../../ui/helpers/globalComponents";
import SideMenu from "../../partials/SideMenu";

import Rate from './../../../../ui/buefy/components/FormControl/Rate/Rate'
import RateCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Rate/Rate";

import CustomRate from './../../../../ui/buefy/components/FormControl/Rate/CustomRate'
import CustomRateCode from "!raw-loader!./../../../../ui/buefy/components/FormControl/Rate/CustomRate";

export default {
  layout: 'ui',
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
    ...globalComponents,
    SideMenu,
    Rate,
    CustomRate

  },
  methods:{

  },

}
