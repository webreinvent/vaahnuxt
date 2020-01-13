import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Pagination from '../../../ui/buefy/components/Pagination/Pagination'
import PaginationCode from "!raw-loader!../../../ui/buefy/components/Pagination/Pagination";

import CustomPaginationButtons from '../../../ui/buefy/components/Pagination/CustomPaginationButtons'
import CustomPaginationButtonsCode from "!raw-loader!../../../ui/buefy/components/Pagination/CustomPaginationButtons";

export default {
  layout: 'ui/buefy',
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
    SectionTitle,
    SectionCode,
    Pagination,
    CustomPaginationButtons,

  },
  methods:{

  },

}
