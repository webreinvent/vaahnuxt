import SectionTitle from '../../../ui/resuable/SectionTitle'
import SectionCode from '../../../ui/resuable/SectionCode'

import Carousel from '../../../ui/buefy/components/Carousel/Carousel'
import CarouselCode from "!raw-loader!../../../ui/buefy/components/Carousel/Carousel";

export default {
  layout: 'ui/buefy',
  head () {
    return {
      title: 'Buefy UI Block',
    }
  },
  computed: {
    CarouselCode() {return CarouselCode},
  },
  components: {
    SectionTitle,
    SectionCode,
    Carousel,

  },
  methods:{

  },

}
