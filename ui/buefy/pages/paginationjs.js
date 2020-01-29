import globalComponents from "../../../ui/helpers/globalComponents";
import SideMenu from "../partials/SideMenu";

import Pagination from '../../../ui/buefy/components/Pagination/Pagination'
import PaginationCode from "!raw-loader!../../../ui/buefy/components/Pagination/Pagination";

import CustomPaginationButtons from '../../../ui/buefy/components/Pagination/CustomPaginationButtons'
import CustomPaginationButtonsCode from "!raw-loader!../../../ui/buefy/components/Pagination/CustomPaginationButtons";

export default {
  layout: 'ui',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    PaginationCode() {return PaginationCode},
    CustomPaginationButtonsCode() {return CustomPaginationButtonsCode},
  },
  components: {
    ...globalComponents,
    SideMenu,
    Pagination,
    CustomPaginationButtons,

  },
  methods:{

  },

}
